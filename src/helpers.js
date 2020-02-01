
import sendgrid from '@sendgrid/mail';
import arweave from './arweave-config';
import settings from './app-config';
import {toast} from 'react-toastify';

import faker from 'faker';

const successMessage = (message) => {
  toast(message, { type: toast.TYPE.SUCCESS }); 
}

const errorMessage = (message) => {
  toast(message, { type: toast.TYPE.SUCCESS }); 
}

const encryptData = (data) => {
  console.log(data);
}

const decryptData = (encrypted_data) => {
  console.log(encrypted_data);
}

export const sendInvoice = (client, invoice) => {
  const api_key = localStorage.getItem('evermore-invoice-sendgrid-api-key', null);
  if(!api_key) {
    errorMessage("Unable to email your invoice, please setup your Sendgrid API key to enable.");
    return;
  }

  const email_from = localStorage.getItem('evermore-invoice-sendgrid-email-from', null);
  sendgrid.setApiKey(api_key);

  const msg = {
    to: client.email,
    from: email_from,
    subject: 'Your invoice is here!',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    attachments: [{
      content: invoice.content,
      filename: invoice.filename,
      type: 'application/pdf',
      disposition: 'attachment'
    }]
  };
  sendgrid.send(msg);
}

export const saveNewInvoice = async (data) => {
  const jwk = JSON.parse(sessionStorage.getItem('AR_jwk'));

  // TODO: hash the json data befor adding to the transaction
  const transaction_data = JSON.stringify(data);

  let transaction = await arweave.createTransaction({
    data: transaction_data
  }, jwk);

  transaction.addTag('app', settings.APP_TAG);
  transaction.addTag('type', 'invoice');

  await arweave.transactions.sign(transaction, jwk);

  const response = await arweave.transactions.post(transaction);

  if(response.status === 200) {
    successMessage("Your chart was successfully saved and will be mined shortly.");

  } else if (response.status === 400) {
    errorMessage("There was a problem saving your chart.");
  } else {
    errorMessage("There was a problem saving your chart.");
  } 

}

export const getClients = async (wallet_address) => {
  const arql = {
    op: "and",
    expr1: {
        op: "equals",
        expr1: "from",
        expr2: wallet_address
    },
    expr2: {
        op: "equals",
        expr1: "app",
        expr2: settings.APP_TAG
    }
  };

  // const txids = arweave.arql(arql);

  // const clients = await Promise.all(txids.map(async txid => {

  // }));

  const clients = [];
  for(let i = 0; i< 20; i++) {
    clients.push({
      txid: faker.random.uuid(),
      name: faker.company.companyName(),
      contact_name: faker.name.firstName() + " " + faker.name.lastName(),
      address: faker.address.streetAddress(),
      postcode: faker.address.zipCode(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      website: faker.internet.domainName(),
      outstanding_invoices: [],
      paid_invoices: []
    })
  }

  return clients;
}

export const createBlankClient = () => {
  return {
    txid: '',
    name: '',
    contact_name: '',
    address: '',
    postcode: '',
    email: '',
    phone: '',
    website: '',
    outstanding_invoices: [],
    paid_invoices: []
  };
}

export const saveNewClient = async (client) => {
  console.log(client);
}

export const updateClient = async (client) => {
  console.log(client);
}

export const updateInvoice = async (invoice) => {
  console.log(invoice);
}

export const getInvoices = async (wallet_address) => {
  const arql = {
        op: "and",
        expr1: {
            op: "equals",
            expr1: "from",
            expr2: wallet_address
        },
        expr2: {
            op: "equals",
            expr1: "app",
            expr2: settings.APP_TAG
        }
  };

  // const txids = arweave.arql(arql);

  // const invoices = await Promise.all(txids.map(async txid => {

  // }));

  const invoices = [];
  for(let i = 0; i< 20; i++) {
    invoices.push({
      txid: faker.random.uuid(),
      client_id: faker.random.uuid(),
      contact_name: faker.name.firstName() + " " + faker.name.lastName(),
      address: faker.fake("{{address.streetAddress}}, {{address.zipCode}}"),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      website: faker.internet.domainName(),
      outstanding_invoices: [],
      paid_invoices: []
    })
  }

  return invoices;
}