import arweave from '../../arweave-config';
import settings from '../../app-config';
import { toast } from 'react-toastify';
import { intToBuffer } from 'arweave/web/lib/merkle';
const axios = require('axios')

export async function saveEverQuestion(username, question) {
    console.log(username + " " + question);

    var equestion = {
        name: username,
        question: question
    }

    const jwk = JSON.parse(sessionStorage.getItem('AR_jwk', null));

    let transaction = await arweave.createTransaction({
        data: JSON.stringify(equestion)
    }, jwk);

    transaction.addTag('App', settings.APP_NAME);
    transaction.addTag('Type', 'EverVoice-FAQ-Q');
 
    await arweave.transactions.sign(transaction, jwk);

    var localequestion = {
        name: username,
        question: question,
        txid: transaction.id
    }
    const faqs = JSON.parse(localStorage.getItem('evoice_questions'))

    const type = typeof faqs;
    if(type == "object") {
        var faqs_list = [faqs, localequestion]
        localStorage.setItem('evoice_questions', JSON.stringify(faqs_list))
    } else {
        localStorage.setItem('evoice_questions', JSON.stringify(localequestion))
    }
    
    
    /*const response = await arweave.transactions.post(transaction);
    console.log(response.status);

    if(response.status == 200) {
        toast("Your Question has been saved and will be mined shortly!", { type: toast.TYPE.SUCCESS });  
    }*/
}

export async function getEverQuestionsGQL() { 
    
    const address = sessionStorage.getItem('AR_Wallet', null);

    let cursor = '';
    let hasNextPage = true;
    const faqs = [];

    while(hasNextPage) {
        const query = `{
            transactions(
                owners: ["${address}"]
                tags: [
                {
                    name: "Type",
                    values: ["EverVoice-FAQ-Q"]
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
    console.log(faqs);
    return faqs;
}

export async function saveEverAnswer(username, answer, selected_question) {
    console.log(username + " " + answer + " " + selected_question);

    var eanswer = {
        name: username,
        answer: answer,
        selected_question: selected_question
    }

    const jwk = JSON.parse(sessionStorage.getItem('AR_jwk', null));

    let transaction = await arweave.createTransaction({
        data: JSON.stringify(eanswer)
    }, jwk);

    transaction.addTag('App', settings.APP_NAME);
    transaction.addTag('Type', 'EverVoice-FAQ-A');
 
    await arweave.transactions.sign(transaction, jwk);

    var localeanswer = {
        name: username,
        answer: answer,
        selected_question: selected_question,
        txid: transaction.id
    }
    const faqs = JSON.parse(localStorage.getItem('evoice_answers'))

    const type = typeof faqs;
    if(type == "object") {
        var answers_list = [faqs, localeanswer]
        localStorage.setItem('evoice_answers', JSON.stringify(answers_list))
    } else {
        localStorage.setItem('evoice_answers', JSON.stringify(localeanswer))
    }
    
    
    /*const response = await arweave.transactions.post(transaction);
    console.log(response.status);

    if(response.status == 200) {
        toast("Your Answer has been saved and will be mined shortly!", { type: toast.TYPE.SUCCESS });  
    }*/
}

export async function getEverAnswersGQL() { 
    
    const address = sessionStorage.getItem('AR_Wallet', null);

    let cursor = '';
    let hasNextPage = true;
    const faqs = [];

    while(hasNextPage) {
        const query = `{
            transactions(
                owners: ["${address}"]
                tags: [
                {
                    name: "Type",
                    values: ["EverVoice-FAQ-A"]
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
    console.log(faqs);
    return faqs;
}