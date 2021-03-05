import arweave from '../../arweave-config';
import settings from '../../app-config';
import {toast} from 'react-toastify';
const axios = require('axios')

export async function saveEverClient(eclient_name, eclient_contact_name, eclient_address, eclient_postcode, eclient_email, eclient_phone, eclient_website) {
    console.log(eclient_name + " " + eclient_contact_name + " " + eclient_address + " " + eclient_postcode + " " + eclient_email + " " + eclient_phone + " " + eclient_website);

    var eclient = {
        name: eclient_name,
        contact_name: eclient_contact_name,
        address: eclient_address,
        postcode: eclient_postcode,
        email: eclient_email,
        phone: eclient_phone,
        website: eclient_website
    }

    const jwk = JSON.parse(sessionStorage.getItem('AR_jwk', null));

    let transaction = await arweave.createTransaction({
        data: JSON.stringify(eclient)
    }, jwk);

    transaction.addTag('App', settings.APP_NAME);
    transaction.addTag('Type', 'EverVoice-Client');

    await arweave.transactions.sign(transaction, jwk);

    var localeclient = {
        name: eclient_contact_name,
        id: transaction.id
    }
    const clients = JSON.parse(localStorage.getItem('evoice_clients'))
    debugger;
    const type = typeof clients;
    if(type == "object") {
        var clients_list = [clients, localeclient]
        localStorage.setItem('evoice_clients', JSON.stringify(clients_list))
    } else {
        localStorage.setItem('evoice_clients', JSON.stringify(localeclient))
    }
    
    
    /*const response = await arweave.transactions.post(transaction);
    console.log(response.status);

    if(response.status == 200) {
        toast("Your Timesheet has been saved and will be mined shortly!", { type: toast.TYPE.SUCCESS });  
    }*/
}

export async function getClientsGQL() { 
    
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
                item['data'] = JSON.parse(result);

                try {
                    const client_data = await arweave.transactions.getData(item.data.clientid , {decode: true, string: true});
                
                    item['client_data'] = JSON.parse(client_data);
                    clients.push(item)
                } catch(e) {
                    console.log(e);
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
    console.log(clients);
    return clients;
}