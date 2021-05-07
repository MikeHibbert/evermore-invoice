import React from 'react';
import arweave from '../../arweave-config';
import settings from '../../app-config';
import {toast} from 'react-toastify';
import { uuid as v4 } from 'uuidv4';
import { getAllInOriginGroup } from '../../helpers';

const axios = require('axios')

export async function saveEverClient(eclient_name, eclient_contact_name, eclient_address, eclient_postcode, eclient_email, eclient_phone, eclient_website) {
    console.log(eclient_name + " " + eclient_contact_name + " " + eclient_address + " " + eclient_postcode + " " + eclient_email + " " + eclient_phone + " " + eclient_website);

    var version_number = 1
    const origin = v4();

    var eclient = {
        name: eclient_name,
        contact_name: eclient_contact_name,
        address: eclient_address,
        postcode: eclient_postcode,
        email: eclient_email,
        phone: eclient_phone,
        website: eclient_website,
        vernumber: version_number,
        Origin: origin,
        type: "client",
    }

    const jwk = JSON.parse(sessionStorage.getItem('AR_jwk', null));

    let transaction = await arweave.createTransaction({
        data: JSON.stringify(eclient)
    }, jwk);

    transaction.addTag('App', settings.APP_NAME);
    transaction.addTag('Type', 'EverVoice-Client');
    transaction.addTag('Version', eclient.vernumber);
    transaction.addTag('Origin', eclient.Origin);
 
    await arweave.transactions.sign(transaction, jwk);

    var localeclient = {
        name: eclient_name,
        contact_name: eclient_contact_name,
        address: eclient_address,
        postcode: eclient_postcode,
        email: eclient_email,
        phone: eclient_phone,
        website: eclient_website,
        txid: transaction.id
    }
    const clients = JSON.parse(localStorage.getItem('evoice_clients'))

    const type = typeof clients;
    if(type == "object") {
        var clients_list = [clients, localeclient]
        localStorage.setItem('evoice_clients', JSON.stringify(clients_list))
    } else {
        localStorage.setItem('evoice_clients', JSON.stringify(localeclient))
    }
    
    
    const response = await arweave.transactions.post(transaction);

    if(response.status == 200) {
        toast("Your Client has been saved and will be mined shortly!", { type: toast.TYPE.SUCCESS });  
    }
}

export async function updateEverClient(eclient_name, eclient_contact_name, eclient_address, eclient_postcode, eclient_email, eclient_phone, eclient_website, version_number, origin) {
    console.log(eclient_name + " " + eclient_contact_name + " " + eclient_address + " " + eclient_postcode + " " + eclient_email + " " + eclient_phone + " " + eclient_website + " " + version_number + " " + origin);


    var new_version_number = version_number + 1 

    var updated_eclient = {
        name: eclient_name,
        contact_name: eclient_contact_name,
        address: eclient_address,
        postcode: eclient_postcode,
        email: eclient_email,
        phone: eclient_phone,
        website: eclient_website,
        vernumber: new_version_number,
        Origin: origin
    }

    console.log(updated_eclient)

    const jwk = JSON.parse(sessionStorage.getItem('AR_jwk', null));

    let transaction = await arweave.createTransaction({
        data: JSON.stringify(updated_eclient)
    }, jwk);

    transaction.addTag('App', settings.APP_NAME);
    transaction.addTag('Type', 'EverVoice-Client');
    transaction.addTag('Version', updated_eclient.vernumber);
    transaction.addTag('Origin', updated_eclient.Origin);

    await arweave.transactions.sign(transaction, jwk);    
    
    var localupdatedclient = {
        name: eclient_name,
        contact_name: eclient_contact_name,
        address: eclient_address,
        postcode: eclient_postcode,
        email: eclient_email,
        phone: eclient_phone,
        website: eclient_website,
        version: version_number,
        new_version: new_version_number,
        origin: origin,
    }

    const clients = JSON.parse(localStorage.getItem('evoice_new_clients'))

    const type = typeof clients;
    if(type == "object") {
        var clients_list = [clients, localupdatedclient]
        localStorage.setItem('evoice_new_clients', JSON.stringify(clients_list))
    } else {
        localStorage.setItem('evoice_new_clients', JSON.stringify(localupdatedclient))
    }

    const response = await arweave.transactions.post(transaction);

    if(response.status == 200) {
        toast("Your Client has been updated and will be mined shortly!", { type: toast.TYPE.SUCCESS });  
    }
}

export async function XXXgetEverClientsGQL() { 
    
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
                    name: "Type",
                    values: ["EverVoice-Client"]
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
                clients.push(item)             
            }

            hasNextPage = data.transactions.pageInfo.hasNextPage;

            if(hasNextPage) {
                cursor = data.transactions.edges[data.transactions.edges.length - 1].cursor;
            }
        } else {
            hasNextPage = false;
        }
    }

    return clients;
}

export async function getEverClientsGQL() { 
    
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
                    name: "Type",
                    values: ["EverVoice-Client"]
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
                clients.push(item)             
            }

            hasNextPage = data.transactions.pageInfo.hasNextPage;

            if(hasNextPage) {
                cursor = data.transactions.edges[data.transactions.edges.length - 1].cursor;
            }
        } else {
            hasNextPage = false;
        }
    }

    return clients;
}

async function UpdateRecord(previousTX) {
    const originTag = previousTX.tags.filter(tag => tag.name == 'Origin')[0];
    const versionTag = previousTX.tags.filter(tag => tag.name == 'Version')[0];

    const transaction = await arweave.createTransaction({data: "Hello WOrld"});

    const version_number = parseInt(versionTag.value) + 1;

    transaction.addTag('App', "OriginTest");
    transaction.addTag('Version', version_number);
    transaction.addTag('Origin', originTag.value);

    await arweave.transactions.sign(transaction);
    const response = await arweave.transactions.post(transaction);

    console.log(originTag.value);
}

async function getOriginRecords() {
    const query = `{
            transactions(
                sort: HEIGHT_ASC
                tags: [
                {
                    name: "Type",
                    values: ["EverVoice-Client"]
                },
                {
                    name: "Version",
                    values: ["1"]
                }
                ]
                after: ""
                ) {
                pageInfo {
                    hasNextPage
                }
                edges {
                    cursor
                    node {
                        id
                        tags {
                            name
                            value
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
        return response.data.data.transactions.edges;
    }
}

export async function VersionChecker() {

    const origin_edges = await getOriginRecords();

    const latest_versions = {};
    for(let i in origin_edges) {
        const node = origin_edges[i].node;
        const versionTag = node.tags.filter(tag => tag.name == 'Version')[0];
        const originTag = node.tags.filter(tag => tag.name == 'Origin')[0];

        const version = parseInt(versionTag.value);

        node['version_number'] = version;

        latest_versions[originTag.value] = node;

        const other_versions = await getAllInOriginGroup(originTag.value);

        for(let j in other_versions) {
            const other_version = other_versions[j].node;

            const otherVersionTag = other_version.tags.filter(tag => tag.name == 'Version')[0];
            const otherOriginTag = node.tags.filter(tag => tag.name == 'Origin')[0];
            
            const other_version_number = parseInt(otherVersionTag.value);

            if(latest_versions[otherOriginTag.value].version_number < other_version_number) {
                other_version['version_number'] = other_version_number;
                latest_versions[otherOriginTag.value] = other_version;
            }
        }

    }

    console.log(latest_versions);

    const previousTX = origin_edges[origin_edges.length - 1].node;

    await UpdateRecord(previousTX);

    console.log(origin_edges)
}