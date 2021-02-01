import arweave from '../../arweave-config';
import settings from '../../app-config';
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

                try {
                    const client_data = await arweave.transactions.getData(item.data.clientid , {decode: true, string: true});

                    item['client'] = JSON.parse(client_data);
                } catch (e) {
                    console.error(`${item.data.clientid} created error ${e}`);
                }
                

                transactions.push(item);
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