import arweave from '../../arweave-config';
import settings from '../../app-config';
import { toast } from 'react-toastify';
import { intToBuffer } from 'arweave/web/lib/merkle';
const axios = require('axios')

export async function saveEverFAQs(question, answer) {
    console.log(question + " " + answer);

    var efaq = {
        question: question,
        answer: answer
    }

    const jwk = JSON.parse(sessionStorage.getItem('AR_jwk', null));

    let transaction = await arweave.createTransaction({
        data: JSON.stringify(efaq)
    }, jwk);

    transaction.addTag('App', settings.APP_NAME);
    transaction.addTag('Type', 'EverVoice-FAQ');
    transaction.addTag('Origin', transaction.id)
 
    await arweave.transactions.sign(transaction, jwk);

    var localefaq = {
        question: question,
        answer: answer,
        txid: transaction.id
    }
    const faqs = JSON.parse(localStorage.getItem('evoice_questions'))

    const type = typeof faqs;
    if(type == "object") {
        var faqs_list = [faqs, localefaq]
        localStorage.setItem('evoice_questions', JSON.stringify(faqs_list))
    } else {
        localStorage.setItem('evoice_questions', JSON.stringify(localefaq))
    }
    
    
    const response = await arweave.transactions.post(transaction);
    console.log(response.status);

    if(response.status == 200) {
        toast("FAQ Successfully Added, It Will Be Mined Shortly!", { type: toast.TYPE.SUCCESS });  
    }
}

export async function getEverFAQGQL() { 
    
    const address = sessionStorage.getItem('AR_Wallet', null);

    let cursor = '';
    let hasNextPage = true;
    const faqs = [];

    while(hasNextPage) {
        const query = `{
            transactions(
                tags: [
                {
                    name: "Type",
                    values: ["EverVoice-FAQ"]
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
                item['faq_data'] = JSON.parse(result);  
                faqs.push(item)             
            }

            hasNextPage = data.transactions.pageInfo.hasNextPage;

            if(hasNextPage) {
                cursor = data.transactions.edges[data.transactions.edges.length - 1].cursor;
            }
        } else {
            hasNextPage = false;
        }
    }

    return faqs;
}