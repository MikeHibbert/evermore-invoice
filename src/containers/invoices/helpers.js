import arweave from '../../arweave-config';
import settings from '../../app-config';
import moment from 'moment';
import { toast } from 'react-toastify';
import { time } from 'faker';
import { intToBuffer } from 'arweave/web/lib/merkle';
const axios = require('axios')

export async function getTSheets() {
    const wallet_address = sessionStorage.getItem('AR_Wallet', null);

    const txids = await arweave.arql({
        op: "and",
        expr1: {
            op: "equals",
            expr1: "from",
            expr2: wallet_address
        },
        expr2: {
            op: "and",
            expr1: {
                op: "equals",
                expr1: "App",
                expr2: settings.APP_NAME
            },
            expr2: {
                op: "equals" ,
                expr1: "Type" ,
                expr2: "Timesheet"
            }
        }
    });

    const tsheets = [];

    for(let i in txids) {
        const txid = txids[i];

        const data = await arweave.transactions.getData(txid, {decode: true, string: true});

        if(data.length == 0) {
            continue;
        }

        const timesheet = {
            id: txid,
            ... JSON.parse(data)
        };

        timesheet.start = new Date(timesheet.start);
        timesheet.finish = new Date(timesheet.finish);

        tsheets.push(timesheet);
    }


    return tsheets;
}

export async function getTSheetsGQL() {
    
    const address = sessionStorage.getItem('AR_Wallet', null);

    let cursor = '';
    let hasNextPage = true;
    const transactions = [];

    while(hasNextPage) {
        const query = `{
            transactions(
                owners: ["${address}"]
                tags: [
                {
                    name: "App",
                    values: ["Timelord"]
                },
                ]
                after: "${cursor}"
                first: 100    ) {
                pageInfo {
                    hasNextPage
                }
                edges {
                    cursor
                    node {
                          owner {
                          address
                        }
                        id
                        tags {
                            name
                            value
                        }
                        block {
                            timestamp
                            height
                        }
                    }
                }
            }
        }`;

        const response = await axios.post("https://arweave.net/graphql", {
            operationName: null,
            query: query,
            variables: {}
        });
        
        if(response.status == 200) {
            const data = response.data.data;

            for(let i in data.transactions.edges) {
                const item = data.transactions.edges[i].node;

                const result = await arweave.transactions.getData(item.id , {decode: true, string: true});

                item['data'] = JSON.parse(result);

                Object.keys(item.data).map(key => {
                    const data = item.data[key];

                    if(key == 'start' || key == 'finish') {
                        item[key] = new Date(data);
                    }
                });


                if(item.hasOwnProperty('start') && item.hasOwnProperty('finish')) {
                    const starttime = moment(item.start);
                    const endtime = moment(item.finish);
                    const timedifference = moment.duration(endtime.diff(starttime)).asHours();
                    item['totalTime'] = timedifference;
                } else {
                    item['totalTime'] = 0;
                }

                try {
                    const client_data = await arweave.transactions.getData(item.data.clientid , {decode: true, string: true});

                    item['client'] = JSON.parse(client_data);
                } catch (e) {
                    console.error(`${item.data.clientid} created error ${e}`);
                }
            
                if(isTimesheet(item)) {
                    transactions.push(item);
                }                
            }

            hasNextPage = data.transactions.pageInfo.hasNextPage;

            if(hasNextPage) {
                cursor = data.transactions.edges[data.data.transactions.edges.length - 1].cursor;
            }
        } else {
            hasNextPage = false;
        }
    }

    return transactions;
}

const isTimesheet = (transaction) => {
    const timesheet_tags_found = transaction.tags.filter(tag => tag.name == 'Type' && tag.value != 'Client');

    if(timesheet_tags_found.length > 0) {
        return true;
    }

    return false;
}

export async function getClients() {
    const wallet_address = sessionStorage.getItem('AR_Wallet', null);
    
    const txids = await arweave.arql({
        op: "and",
        expr1: {
            op: "equals",
            expr1: "from",
            expr2: wallet_address
        },
        expr2: {
            op: "and",
            expr1: {
                op: "equals",
                expr1: "App",
                expr2: settings.APP_NAME
            },
            expr2: {
                op: "equals" ,
                expr1: "Type" ,
                expr2: "Client"
            }
        }
    });

    const clients = [];

    for(let i in txids) {
        const txid = txids[i];

        const data = await arweave.transactions.getData(txid, {decode: true, string: true});

        if(data.length == 0) {
            continue;
        }

        clients.push({
            id: txid,
            ... JSON.parse(data)
        });
    }

    return clients;
}

export async function getTimelordClientsGQL() {
    
    const address = sessionStorage.getItem('AR_Wallet', null);

    let cursor = '';
    let hasNextPage = true;
    const clients = [];

    while(hasNextPage) {
        const query = `{
            transactions(
                owners: ["${address}"]
                tags: [
                {
                    name: "App",
                    values: ["Timelord"]
                },
                ]
                after: "${cursor}"
                first: 100    ) {
                pageInfo {
                    hasNextPage
                }
                edges {
                    cursor
                    node {
                        owner {
                            address
                        }
                        id
                        tags {
                            name
                            value
                        }
                        block {
                            timestamp
                            height
                        }
                    }
                }
            }
        }`;

        const response = await axios.post("https://arweave.net/graphql", {
            operationName: null,
            query: query,
            variables: {}
        });
        
        if(response.status == 200) {
            const data = response.data.data;

            for(let i in data.transactions.edges) {
                const item = data.transactions.edges[i].node;

                const result = await arweave.transactions.getData(item.id , {decode: true, string: true});
                item['client_data'] = JSON.parse(result);

                if(isClient(item)) {
                    clients.push(item)
                }
            }

            hasNextPage = data.transactions.pageInfo.hasNextPage;

            if(hasNextPage) {
                cursor = data.transactions.edges[data.data.transactions.edges.length - 1].cursor;
            }
        } else {
            hasNextPage = false;
        }
    }

    return clients;
}

const isClient = (transaction) => {
    const client_tags_found = transaction.tags.filter(tag => tag.name == 'Type' && tag.value != 'Timesheet');
    for(let i in transaction) {
        if(client_tags_found.length > 0) {
            return true;
        }
    }
    return false;
}

const defaultOptions = {
    significantDigits: 2,
    thousandsSeparator: ',',
    decimalSeparator: '.',
    symbol: '$'
  }
  
export const currencyFormatter = (value, options) => {
    if (typeof value !== 'number') value = 0.0
    options = { ...defaultOptions, ...options }
    value = value.toFixed(options.significantDigits+1)

    const [currency, decimal] = value.split('.')
    return `${options.symbol} ${currency.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        options.thousandsSeparator
    )}${options.decimalSeparator}${decimal.slice(0, options.significantDigits)}`
}

export async function saveEverVoice(client_id, evoice_tsheets, evoice_created, evoice_duedate, evoice_costph, evoice_totalvalue) {
    console.log(client_id + " " + evoice_tsheets + " " + evoice_created + " " + evoice_duedate + " " + evoice_costph + " " + evoice_totalvalue);

    var evoice = {
        clientid: client_id,
        tsheets: evoice_tsheets,
        created: evoice_created,
        duedate: evoice_duedate,
        costph: evoice_costph,
        totalvalue: evoice_totalvalue
    }

    const jwk = JSON.parse(sessionStorage.getItem('AR_jwk', null));

    let transaction = await arweave.createTransaction({
        data: JSON.stringify(evoice)
    }, jwk);

    transaction.addTag('App', settings.APP_NAME);
    transaction.addTag('Type', 'EverVoice-Invoice');
    transaction.addTag('Origin', transaction.id)

    await arweave.transactions.sign(transaction, jwk);

    var localevoice = {
        clientid: client_id,
        tsheets: evoice_tsheets,
        created: evoice_created,
        duedate: evoice_duedate,
        costph: evoice_costph,
        totalvalue: evoice_totalvalue
    }
    const evoices = JSON.parse(localStorage.getItem('evoice_invoices'))
    
    const type = typeof evoices;
    if(type == "object") {
        var evoices_list = [evoices, localevoice]
        localStorage.setItem('evoice_invoices', JSON.stringify(evoices_list))
    } else {
        localStorage.setItem('evoice_invoices', JSON.stringify(localevoice))
    }

    const response = await arweave.transactions.post(transaction);
    console.log(response.status);

    if(response.status == 200) {
        toast("Your Invoice has been saved and will be mined shortly!", { type: toast.TYPE.SUCCESS });  
    }
}

export async function getEverVoicesGQL() {
    
    const address = sessionStorage.getItem('AR_Wallet', null);

    let cursor = '';
    let hasNextPage = true;
    const invoices = [];

    while(hasNextPage) {
        const query = `{
            transactions(
                owners: ["${address}"]
                tags: [
                {
                    name: "Type",
                    values: ["EverVoice-Invoice"]
                },
                ]
                after: "${cursor}"
                first: 100    ) {
                pageInfo {
                    hasNextPage
                }
                edges {
                    cursor
                    node {
                        owner {
                            address
                        }
                        id
                        tags {
                            name
                            value
                        }
                        block {
                            timestamp
                            height
                        }
                    }
                }
            }
        }`;

        const response = await axios.post("https://arweave.net/graphql", {
            operationName: null,
            query: query,
            variables: {}
        });
        
        if(response.status == 200) {
            const data = response.data.data;

            for(let i in data.transactions.edges) {
                const item = data.transactions.edges[i].node;

                const result = await arweave.transactions.getData(item.id , {decode: true, string: true});
                item['invoice_data'] = JSON.parse(result);
                invoices.push(item)
            }

            hasNextPage = data.transactions.pageInfo.hasNextPage;

            if(hasNextPage) {
                cursor = data.transactions.edges[data.transactions.edges.length - 1].cursor;
            }
        } else {
            hasNextPage = false;
        }
    }

    return invoices;
}