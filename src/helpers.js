
import sendgrid from '@sendgrid/mail';
import arweave from './arweave-config';
import settings from './app-config';
import {toast} from 'react-toastify';

import faker from 'faker';
import { getEverVoicesGQL, getTimelordClientsGQL } from './containers/invoices/helpers';
import { getEverClientsGQL } from './containers/clients/helpers';

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

export const getClients = async (wallet_address) => {
  const timelord_clients = await getTimelordClientsGQL()
  const everclients = await getEverClientsGQL()
  const clients = []
  for(let i in timelord_clients) {
    clients.push(timelord_clients[i])
  }
  for(let i in everclients) {
    clients.push(everclients[i])
  }

  return clients;
}

export const getInvoices = async (wallet_address, clients) => {
  const imported_invoices = await getEverVoicesGQL()
  const invoices = []
  for(let i in imported_invoices) {
    invoices.push(imported_invoices[i])
  }
  return invoices;
}

export const saveLogo = async (data) => {
  const jwk = JSON.parse(sessionStorage.getItem('AR_jwk'));

  let transaction = await arweave.createTransaction({
    data: data
  }, jwk);

  transaction.addTag('app', settings.APP_TAG);
  transaction.addTag('data-type', 'logo');
  transaction.addTag('created', new Date().getTime());

  await arweave.transactions.sign(transaction, jwk);

  const response = await arweave.transactions.post(transaction);

  if(response.status === 200) {
    successMessage("Your logo was successfully saved and will be mined shortly.");
    console.log(transaction.id);
  } else if (response.status === 400) {
    errorMessage("There was a problem saving your logo.");
  } else {
    errorMessage("There was a problem saving your logo.");
  } 

}

export const getLogos = async () => {
  const wallet_address = sessionStorage.getItem('AR_Wallet');

  const txids = await arweave.arql({
    op: "and",
    expr1: {
      op: "equals",
      expr1: "from",
      expr2: wallet_address
    },
    expr2: {
      op: "equals",
      expr1: "data-type",
      expr2: 'logo'
    }
  });

  const logos = await Promise.all(txids.map(async txid => {

    const transaction = await arweave.transactions.get(txid);
    const tags = transaction.get('tags');
    const data = transaction.get('data', {decode: true, string: true});
    const logo_tx = {txid: txid, image: data};

    for(let i in tags) {
      const tag = tags[i];
      
      const name = tag.get('name', {decode: true, string: true}).replace('-', '_');
      let value = tag.get('value', {decode: true, string: true});

      if(name === "created") {
        value = parseInt(value);
      }

      logo_tx[name] = value;
    }

    

    return logo_tx; 
  }));

  return logos;
}

export const getUserInfo = () => {
  const name = localStorage.getItem('evermore-invoice-name', null);
  const address = localStorage.getItem('evermore-invoice-address', null);
  const api_key = localStorage.getItem('evermore-invoice-sendgrid-api-key', null);
  const email_from = localStorage.getItem('evermore-invoice-sendgrid-email-from', null);
  const currency_symbol = localStorage.getItem('evermore-invoice-currency-symbol', null);
  const currency_type = localStorage.getItem('evermore-invoice-currency-type', null);
  const date_format = localStorage.getItem('evermore-invoice-date-format', null);
  const invoice_note = localStorage.getItem('evermore-invoice-invoice-note', null);
  const tax_code = localStorage.getItem('evermore-invoice-tax-code', null);
  const tax_rate = localStorage.getItem('evermore-invoice-tax-rate', null);
  

  const user_info = {};

  if(name) user_info['name'] = name;
  if(address) user_info['address'] = address;
  if(api_key) user_info['api_key'] = api_key;
  if(email_from) user_info['email_from'] = email_from;
  if(currency_type) user_info['currency_type'] = currency_type;
  if(currency_symbol) user_info['currency_symbol'] = currency_symbol;
  if(date_format) user_info['date_format'] = date_format;
  if(invoice_note) user_info['invoice_note'] = invoice_note;
  if(tax_code) user_info['tax_code'] = tax_code;
  if(tax_rate) user_info['tax_rate'] = tax_rate;

  return user_info;
}

export const purse_img = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wMDEgNTEyLjAwMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMSA1MTIuMDAxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDg5LjUwMiwyMTguNDkyaC03LjQ5NnYtMjIuNTA0di04MGMwLTI2LjE5Mi0yMS4zMDktNDcuNTAxLTQ3LjUtNDcuNTAxSDIyOC41MjdMODkuNTY0LDI4Ljc4MyAgICBjLTAuMDQtMC4wMTEtMC4wODEtMC4wMTctMC4xMjEtMC4wMjhjLTAuMDQxLTAuMDExLTAuMDgtMC4wMjctMC4xMjEtMC4wMzdjLTAuMDg0LTAuMDIxLTAuMTY3LTAuMDMxLTAuMjUtMC4wNDkgICAgYy0wLjEyOS0wLjAyNy0wLjI1OC0wLjA1NS0wLjM4Ny0wLjA3NmMtMC4xMTctMC4wMTktMC4yMzItMC4wMzEtMC4zNDktMC4wNDVjLTAuMTM2LTAuMDE2LTAuMjcxLTAuMDMtMC40MDYtMC4wMzggICAgYy0wLjExLTAuMDA2LTAuMjE5LTAuMDA3LTAuMzI5LTAuMDA5Yy0wLjE0LTAuMDAyLTAuMjc5LTAuMDAzLTAuNDE4LDAuMDAzYy0wLjEwMywwLjAwNC0wLjIwNiwwLjAxNC0wLjMwOCwwLjAyMiAgICBjLTAuMTQzLDAuMDEyLTAuMjg2LDAuMDI1LTAuNDI3LDAuMDQ2Yy0wLjA5NiwwLjAxNC0wLjE5MSwwLjAzMi0wLjI4NiwwLjA0OWMtMC4xNDYsMC4wMjYtMC4yOSwwLjA1NC0wLjQzMywwLjA4OSAgICBjLTAuMDg5LDAuMDIyLTAuMTc2LDAuMDQ3LTAuMjY0LDAuMDcyYy0wLjE0NiwwLjA0Mi0wLjI5LDAuMDg1LTAuNDM0LDAuMTM1Yy0wLjA4MSwwLjAyOS0wLjE2MSwwLjA2LTAuMjQyLDAuMDkyICAgIGMtMC4xNDUsMC4wNTYtMC4yODksMC4xMTUtMC40MywwLjE4Yy0wLjA3NSwwLjAzNS0wLjE0OCwwLjA3My0wLjIyMiwwLjExYy0wLjE0MSwwLjA3MS0wLjI4LDAuMTQzLTAuNDE2LDAuMjI0ICAgIGMtMC4wNzEsMC4wNDEtMC4xMzksMC4wODUtMC4yMDksMC4xMjljLTAuMTM0LDAuMDg0LTAuMjY2LDAuMTctMC4zOTQsMC4yNjNjLTAuMDY3LDAuMDQ4LTAuMTMyLDAuMS0wLjE5OCwwLjE1MSAgICBjLTAuMTIzLDAuMDk1LTAuMjQ1LDAuMTkyLTAuMzYyLDAuMjk1Yy0wLjA2NiwwLjA1OC0wLjEyOSwwLjExOS0wLjE5MywwLjE3OWMtMC4xMSwwLjEwNC0wLjIxOSwwLjIwOC0wLjMyMywwLjMxOCAgICBjLTAuMDY1LDAuMDY5LTAuMTI2LDAuMTQxLTAuMTg5LDAuMjEzYy0wLjA5NSwwLjEwOS0wLjE4OSwwLjIxOS0wLjI3OCwwLjMzNGMtMC4wNjQsMC4wODMtMC4xMjQsMC4xNjgtMC4xODUsMC4yNTMgICAgYy0wLjA3OSwwLjExMS0wLjE1NywwLjIyMy0wLjIyOSwwLjMzOGMtMC4wNjIsMC4wOTgtMC4xMTksMC4yLTAuMTc2LDAuMzAxYy0wLjA2MywwLjExMS0wLjEyNiwwLjIyMy0wLjE4MywwLjMzOCAgICBjLTAuMDU2LDAuMTEyLTAuMTA2LDAuMjI3LTAuMTU3LDAuMzQyYy0wLjA1LDAuMTEzLTAuMDk5LDAuMjI2LTAuMTQzLDAuMzQyYy0wLjA0NiwwLjEyMi0wLjA4NiwwLjI0Ny0wLjEyNywwLjM3MyAgICBjLTAuMDI2LDAuMDgxLTAuMDU4LDAuMTU3LTAuMDgyLDAuMjM5Yy0wLjAxMiwwLjA0MS0wLjAxNywwLjA4MS0wLjAyOCwwLjEyMWMtMC4wMTEsMC4wNDEtMC4wMjcsMC4wOC0wLjAzNywwLjEyMWwtOC41NzYsMzQuMzEyICAgIEg0Ny41MDVjLTI2LjEzOSwwLTQ3LjQxMSwyMS4yMjMtNDcuNDk3LDQ3LjM0M0MwLjAwNywxMTUuODgyLDAsMTE1LjkzMywwLDExNS45ODZ2MjYwYzAsNC4xNCwzLjM3LDcuNSw3LjUsNy41ICAgIGM0LjE0LDAsNy41LTMuMzYsNy41LTcuNVYxNTAuNTc5YzguNTA0LDcuOTk2LDE5LjkzOCwxMi45MSwzMi41MDUsMTIuOTFoMzg3LjAwMWMwLjAwOSwwLDAuMDE3LTAuMDAxLDAuMDI2LTAuMDAxICAgIGMxNy45MDgsMC4wMTQsMzIuNDc0LDE0LjU4OCwzMi40NzQsMzIuNTAxdjUyLjUwNGgtODIuNTEyYy0wLjAwNSwwLTAuMDA5LDAuMDAxLTAuMDE0LDAuMDAxYy0wLjIxNywwLTAuNDMzLDAuMDEzLTAuNjQ4LDAuMDMyICAgIGMtMC4yMzksMC4wMjEtMC40NzUsMC4wNTUtMC43MDcsMC4wOThjLTAuMDM1LDAuMDA2LTAuMDY5LDAuMDA5LTAuMTA0LDAuMDE2Yy0wLjE5NiwwLjAzOS0wLjM4OCwwLjA5MS0wLjU3OSwwLjE0NSAgICBjLTAuMDQyLDAuMDEyLTAuMDg1LDAuMDItMC4xMjYsMC4wMzNjLTAuMTcsMC4wNTItMC4zMzUsMC4xMTQtMC41LDAuMTc3Yy0wLjA2MywwLjAyNC0wLjEyNywwLjA0NC0wLjE5LDAuMDcgICAgYy0wLjEzOCwwLjA1Ny0wLjI3MSwwLjEyNC0wLjQwNCwwLjE4OWMtMC4wODgsMC4wNDItMC4xNzcsMC4wODEtMC4yNjMsMC4xMjZjLTAuMTA0LDAuMDU1LTAuMjAyLDAuMTE4LTAuMzAyLDAuMTc4ICAgIGMtMC4xMTEsMC4wNjYtMC4yMjQsMC4xMy0wLjMzMiwwLjIwMmMtMC4wNzMsMC4wNDgtMC4xNCwwLjEwMy0wLjIxLDAuMTU0Yy0wLjEyOCwwLjA5Mi0wLjI1NywwLjE4My0wLjM3OSwwLjI4NCAgICBjLTAuMDUzLDAuMDQ0LTAuMTAyLDAuMDkzLTAuMTUzLDAuMTM4Yy0wLjEzMSwwLjExNC0wLjI2MiwwLjIyNy0wLjM4NiwwLjM1MWMtMC4wNzMsMC4wNzMtMC4xMzksMC4xNTMtMC4yMDgsMC4yMjkgICAgYy0wLjA5NywwLjEwNS0wLjE5NywwLjIwOC0wLjI4OSwwLjMyYy0wLjE1NSwwLjE4OS0wLjMsMC4zODUtMC40MzYsMC41ODhjLTAuMDAzLDAuMDAzLTAuMDA2LDAuMDA3LTAuMDA4LDAuMDExbC0zOS45OTgsNjAuMDAxICAgIGMtMC4yNzksMC40MTgtMC41MTUsMC44NjEtMC43MDIsMS4zMjJjLTAuMDcxLDAuMTcyLTAuMTI4LDAuMzQ3LTAuMTg1LDAuNTIxYy0wLjAxNywwLjA1My0wLjAzOSwwLjEwNC0wLjA1NSwwLjE1NyAgICBjLTAuMDU2LDAuMTg1LTAuMDk5LDAuMzcyLTAuMTQsMC41NThjLTAuMDExLDAuMDQ5LTAuMDI1LDAuMDk3LTAuMDM1LDAuMTQ2Yy0wLjAzMywwLjE2OC0wLjA1NSwwLjMzNy0wLjA3NiwwLjUwNiAgICBjLTAuMDA5LDAuMDcyLTAuMDIzLDAuMTQ0LTAuMDMsMC4yMTdjLTAuMDE0LDAuMTM5LTAuMDE3LDAuMjc3LTAuMDIyLDAuNDE2Yy0wLjAwNSwwLjEwNi0wLjAxNCwwLjIxMi0wLjAxNCwwLjMxOSAgICBjMCwwLjEwMywwLjAwOSwwLjIwNiwwLjAxMywwLjMwOWMwLjAwNSwwLjE0MiwwLjAwOSwwLjI4NSwwLjAyMywwLjQyN2MwLjAwNywwLjA2OSwwLjAyLDAuMTM4LDAuMDI5LDAuMjA3ICAgIGMwLjAyMiwwLjE3MiwwLjA0NCwwLjM0NCwwLjA3OCwwLjUxNWMwLjAwOSwwLjA0NywwLjAyMywwLjA5MywwLjAzNCwwLjE0YzAuMDQxLDAuMTg4LDAuMDg1LDAuMzc2LDAuMTQxLDAuNTYzICAgIGMwLjAxNiwwLjA1MywwLjAzOCwwLjEwNCwwLjA1NSwwLjE1OGMwLjA1NywwLjE3NCwwLjExNCwwLjM0OSwwLjE4NSwwLjUyMWMwLjE4OCwwLjQ2LDAuNDI0LDAuOTA0LDAuNzA0LDEuMzIzbDM5Ljk5Nyw1OS45OTIgICAgYzAuMDAyLDAuMDAzLDAuMDA0LDAuMDA1LDAuMDA2LDAuMDA4YzAuMTYxLDAuMjM5LDAuMzM3LDAuNDY3LDAuNTIzLDAuNjg2YzAuMDYxLDAuMDcyLDAuMTI2LDAuMTM5LDAuMTg5LDAuMjA3ICAgIGMwLjEyNywwLjEzOSwwLjI1OSwwLjI3MywwLjM5NiwwLjQwMmMwLjA4MSwwLjA3NiwwLjE2MSwwLjE1LDAuMjQzLDAuMjIxYzAuMTQ2LDAuMTI1LDAuMjk3LDAuMjQyLDAuNDUyLDAuMzU2ICAgIGMwLjA3LDAuMDUxLDAuMTM3LDAuMTA3LDAuMjA4LDAuMTU1YzAuMjI1LDAuMTUzLDAuNDU4LDAuMjk0LDAuNjk5LDAuNDIyYzAuMDYxLDAuMDMyLDAuMTI0LDAuMDU5LDAuMTg1LDAuMDg5ICAgIGMwLjE5MiwwLjA5NiwwLjM4OCwwLjE4NSwwLjU4OSwwLjI2NGMwLjA3OCwwLjAzMSwwLjE1NiwwLjA1OSwwLjIzNSwwLjA4N2MwLjE5MSwwLjA2OCwwLjM4NSwwLjEyOCwwLjU4MywwLjE4MSAgICBjMC4wODEsMC4wMjEsMC4xNjEsMC4wNDMsMC4yNDMsMC4wNjNjMC4yMDMsMC4wNDcsMC40MDksMC4wODMsMC42MTgsMC4xMTNjMC4wNzYsMC4wMTEsMC4xNTEsMC4wMjYsMC4yMjcsMC4wMzUgICAgYzAuMjU4LDAuMDI5LDAuNTIsMC4wNDUsMC43ODYsMC4wNDdjMC4wMjEsMCwwLjA0MiwwLjAwNCwwLjA2NCwwLjAwNGMwLjAwNCwwLDAuMDA5LTAuMDAxLDAuMDE0LTAuMDAxaDgyLjQ5MVY0MzYgICAgYzAsMTcuOTIyLTE0LjU4LDMyLjUwMi0zMi41LDMyLjUwMmgtMzg3Yy0xNy45MiwwLTMyLjUtMTQuNTgtMzIuNS0zMi41MDJjMC0wLjAzOS0wLjAwNS0wLjA3Ny0wLjAwNi0wLjExNlY0MDUuOTkgICAgYzAtNC4xMy0zLjM2LTcuNS03LjUtNy41Yy00LjEzLDAtNy41LDMuMzctNy41LDcuNVY0MzZjMCwwLjA3OCwwLjAwOSwwLjE1NCwwLjAxMiwwLjIzMWMwLjEyNSwyNi4wODYsMjEuMzgsNDcuMjcxLDQ3LjQ5NCw0Ny4yNzEgICAgaDM4N2MyNi4xODksMCw0Ny40OTYtMjEuMzA1LDQ3LjUtNDcuNDk0YzAtMC4wMDEsMC0wLjAwMiwwLTAuMDA0di01Mi41MTJoNy40OTZjMTIuNDA0LDAsMjIuNDk2LTEwLjA5MiwyMi40OTYtMjIuNDk2VjI0MC45ODggICAgQzUxMS45OTgsMjI4LjU4NCw1MDEuOTA2LDIxOC40OTIsNDg5LjUwMiwyMTguNDkyeiBNOTIuOSw0NS4zMzZsMTMyLjMzOSwzNy44MTNjMC4wMDYsMC4wMDIsMC4wMTMsMC4wMDMsMC4wMTksMC4wMDUgICAgbDg4LjY5NiwyNS4zNDJINzcuMTE0TDkyLjksNDUuMzM2eiBNNDY3LjAwNSwxNjEuMzk0Yy04LjUwMy03Ljk5NC0xOS45MzUtMTIuOTA3LTMyLjQ5OS0xMi45MDdjLTAuMDEzLDAtMC4wMjUsMC4wMDItMC4wMzksMC4wMDIgICAgSDQ3LjUwNWMtMTcuOTIxLDAtMzIuNTAxLTE0LjU4LTMyLjUwMS0zMi41MDFjMC0xNy45MjEsMTQuNTgtMzIuNTAxLDMyLjUwMS0zMi41MDFoMjAuMzk4bC02LjI1LDI1LjAwOUg0Ny41MDcgICAgYy00LjE0MiwwLTcuNSwzLjM1OC03LjUsNy41YzAsNC4xNDIsMy4zNTgsNy41LDcuNSw3LjVoMTkuOTc2YzAuMDEsMCwwLjAyMSwwLjAwMiwwLjAzMiwwLjAwMmMwLjAwOCwwLDAuMDE2LTAuMDAyLDAuMDIzLTAuMDAyICAgIGgyOTkuOTQxYzAuMDEsMCwwLjAxOSwwLjAwMiwwLjAyOCwwLjAwMmMwLjAwOCwwLDAuMDE2LTAuMDAyLDAuMDI0LTAuMDAyaDU2Ljk2NmM0LjE0MiwwLDcuNS0zLjM1OCw3LjUtNy41ICAgIGMwLTQuMTQyLTMuMzU4LTcuNS03LjUtNy41aC01NS45NDNsLTg3LjUyOS0yNS4wMDloMTUzLjQ4YzE3LjkyLDAsMzIuNSwxNC41OCwzMi41LDMyLjUwMVYxNjEuMzk0eiBNNDk2Ljk5OCwzNjAuOTkyICAgIEw0OTYuOTk4LDM2MC45OTJjMCw0LjEzMy0zLjM2Myw3LjQ5Ni03LjQ5Niw3LjQ5NkgzODguNTA4bC0zNC45OTktNTIuNDk0bDM0Ljk5OS01Mi41MDJoMTAwLjk5NGMwLjEwNSwwLDAuMjA3LTAuMDEyLDAuMzExLTAuMDE2ICAgIGMyLjUxNi0wLjAzNSw0LjkzMi0wLjQ4Myw3LjE4NS0xLjI4MVYzNjAuOTkyeiBNNDg5LjUwMiwyNDguNDg0Yy0wLjA1MiwwLTAuMTAzLDAuMDA3LTAuMTU1LDAuMDA4aC03LjM0MXYtMTVoNy40OTYgICAgYzQuMTMzLDAsNy40OTYsMy4zNjMsNy40OTYsNy40OTZTNDkzLjYzNSwyNDguNDg0LDQ4OS41MDIsMjQ4LjQ4NHoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00MTQuNDk5LDI4OC40OTNjLTE1LjE2NCwwLTI3LjUsMTIuMzM3LTI3LjUsMjcuNTAxczEyLjMzNiwyNy41LDI3LjUsMjcuNXMyNy41LTEyLjMzNiwyNy41LTI3LjUgICAgQzQ0MS45OTksMzAwLjgzLDQyOS42NjMsMjg4LjQ5Myw0MTQuNDk5LDI4OC40OTN6IE00MTQuNDk5LDMyOC40OTRjLTYuODkzLDAtMTIuNS01LjYwNy0xMi41LTEyLjVzNS42MDctMTIuNTAxLDEyLjUtMTIuNTAxICAgIHMxMi41LDUuNjA4LDEyLjUsMTIuNTAxUzQyMS4zOTIsMzI4LjQ5NCw0MTQuNDk5LDMyOC40OTR6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==";
export const profits_img = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00MTYuMjA1LDgzLjc1OWwtNS4zNzUtMzguMzkyYy0wLjI3MS0xLjkzMy0xLjMwNC0zLjY3Ny0yLjg3LTQuODQzYy0xLjU2NS0xLjE2NS0zLjUzMS0xLjY1NS01LjQ2Mi0xLjM1OWwtNDIuMjk2LDYuNDc4ICAgIGMtMy45ODUsMC42MS02LjcyLDQuMzM1LTYuMTEsOC4zMTljMC42MSwzLjk4NSw0LjMzNyw2LjcyMiw4LjMxOSw2LjExbDI0LjY0Ny0zLjc3NWMtMzIuOTYsNDAuNzQ5LTY4LjQwOSw3NS40NTktMTA1LjUzOCwxMDMuMjcgICAgYy0zMi4zMDgsMjQuMi02NS45NTEsNDMuMjc0LTk5Ljk5NCw1Ni42OTRDMTIzLjU4NywyMzkuMSw4NC4wMjMsMjM3LjYsODMuNjM0LDIzNy41ODZjLTQuMDM0LTAuMjA0LTcuNDM3LDIuOTE0LTcuNjMyLDYuOTM2ICAgIGMtMC4xOTYsNC4wMjYsMi45MDksNy40NDgsNi45MzUsNy42NDRjMC4yMzgsMC4wMTEsMS4yMzQsMC4wNTQsMi45NDIsMC4wNTRjMTAuNTE2LDAsNDcuOTI4LTEuNjE0LDEwMC4wODUtMjIuMDIxICAgIGMzNS4zNjgtMTMuODM4LDcwLjI3MS0zMy41MjksMTAzLjc0MS01OC41MjdjMzguNDYyLTI4LjcyNyw3NS4xMjItNjQuNTk4LDEwOS4xMjgtMTA2LjcyMWwyLjkxNiwyMC44MzIgICAgYzAuNTExLDMuNjQ5LDMuNjM3LDYuMjg3LDcuMjE5LDYuMjg3YzAuMzM2LDAsMC42NzgtMC4wMjMsMS4wMjEtMC4wNzFDNDEzLjk4MSw5MS40NCw0MTYuNzY0LDg3Ljc1MSw0MTYuMjA1LDgzLjc1OXoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00OTguNTMzLDQzMi43NDRoLTU4Ljk3OWM0Ljg1NS0zLjIyOCw5LjQyNy02Ljk1OCwxMy42NDMtMTEuMTc1YzE2LjYxOS0xNi42MTksMjUuNzcxLTM4LjcxNSwyNS43NzEtNjIuMjE3ICAgIGMwLTIzLjUwMy05LjE1Mi00NS41OTktMjUuNzcxLTYyLjIxN2MtNS45Mi01LjkyLTEyLjQ5Mi0xMC43OTQtMTkuNDcyLTE0LjY3MVYyNTNjMC00LjAzMS0zLjI2OC03LjI5OC03LjI5OC03LjI5OCAgICBjLTQuMDMxLDAtNy4yOTgsMy4yNjgtNy4yOTgsNy4yOTh2MjIuOTgyYy0xOS45NzctNi43NjMtNDEuNjY5LTYuMTE5LTYxLjE3NiwxLjc5OXYtODkuNjQ4YzAtMC45NDQsMC43NjgtMS43MTIsMS43MTItMS43MTIgICAgaDU3Ljc1MmMwLjk0NCwwLDEuNzEyLDAuNzY4LDEuNzEyLDEuNzEydjE4LjExNWMwLDQuMDMxLDMuMjY4LDcuMjk4LDcuMjk4LDcuMjk4YzQuMDMxLDAsNy4yOTgtMy4yNjgsNy4yOTgtNy4yOTh2LTE4LjExNSAgICBjMC04Ljk5My03LjMxNi0xNi4zMDktMTYuMzA5LTE2LjMwOWgtNTcuNzUyYy04Ljk5MywwLTE2LjMwOSw3LjMxNi0xNi4zMDksMTYuMzA5djk3LjI0MmMtNS4xNywzLjMyOS0xMC4wNzIsNy4yMzctMTQuNTkyLDExLjc1OCAgICBjLTE2LjYxOSwxNi42MTktMjUuNzcxLDM4LjcxNS0yNS43NzEsNjIuMjE3YzAsMjMuNTAzLDkuMTUyLDQ1LjU5OSwyNS43NzEsNjIuMjE3YzQuMjE2LDQuMjE2LDguNzg4LDcuOTQ3LDEzLjY0MywxMS4xNzVoLTQ2LjA4NyAgICBWMjU0LjM1NmMwLTguOTkzLTcuMzE2LTE2LjMwOS0xNi4zMDktMTYuMzA5aC01Ny43NTFjLTguOTkzLDAtMTYuMzA5LDcuMzE2LTE2LjMwOSwxNi4zMDl2MTc4LjM4OGgtNDcuMDM3VjMxNC4zOTMgICAgYzAtOC45OTMtNy4zMTYtMTYuMzA5LTE2LjMwOS0xNi4zMDlIODQuODUyYy04Ljk5MywwLTE2LjMwOSw3LjMxNi0xNi4zMDksMTYuMzA5djExOC4zNTFIMzguNDhWNTcuNDA4ICAgIGMwLTcuNDI2LTYuMDQxLTEzLjQ2Ny0xMy40NjctMTMuNDY3SDEzLjQ2N0M2LjA0MSw0My45NDEsMCw0OS45ODIsMCw1Ny40MDh2NTEuODE0YzAsNC4wMzEsMy4yNjgsNy4yOTgsNy4yOTgsNy4yOTggICAgYzQuMDMsMCw3LjI5OC0zLjI2OCw3LjI5OC03LjI5OFY1OC41MzhoOS4yODZ2Mzc1LjMzNmMwLDcuNDI2LDYuMDQyLDEzLjQ2NywxMy40NjcsMTMuNDY3aDQ2MC4wNTN2MTAuOTgzSDE0LjU5N1YxNTUuMzQyICAgIGMwLTQuMDMxLTMuMjY4LTcuMjk4LTcuMjk4LTcuMjk4Yy00LjAzLDAtNy4yOTksMy4yNjctNy4yOTksNy4yOTh2MzA0LjExMWMwLDcuNDI2LDYuMDQxLDEzLjQ2NywxMy40NjcsMTMuNDY3aDQ4NS4wNjYgICAgYzcuNDI2LDAsMTMuNDY3LTYuMDQxLDEzLjQ2Ny0xMy40NjdWNDQ2LjIxQzUxMiw0MzguNzg1LDUwNS45NTksNDMyLjc0NCw0OTguNTMzLDQzMi43NDR6IE0xNDQuMzE2LDQzMi43NDRMMTQ0LjMxNiw0MzIuNzQ0ICAgIEg4My4xNFYzMTQuMzkzYzAtMC45NDQsMC43NjgtMS43MTIsMS43MTItMS43MTJoNTcuNzUyYzAuOTQ0LDAsMS43MTIsMC43NjgsMS43MTIsMS43MTJWNDMyLjc0NHogTTIyMC41NDYsNDMyLjc0NFYyNTQuMzU2ICAgIGMwLTAuOTQ0LDAuNzY4LTEuNzEyLDEuNzEyLTEuNzEyaDU3Ljc1MWMwLjk0NCwwLDEuNzEyLDAuNzY4LDEuNzEyLDEuNzEydjE3OC4zODhIMjIwLjU0NnogTTQyMy4yMjEsNDI1LjI4MiAgICBjLTcuMzkyLDMuNjE1LTE1LjQyNCw1Ljk2NC0yMy42MDUsNi45NDJjLTAuMTM4LDAuMDE2LTAuMjc1LDAuMDM1LTAuNDEzLDAuMDUxYy0wLjU1OSwwLjA2NC0xLjExOCwwLjExOC0xLjY3OCwwLjE2OSAgICBjLTAuODU0LDAuMDc1LTEuNzA5LDAuMTQzLTIuNTY4LDAuMTg4Yy0wLjI3MSwwLjAxNS0wLjU0MiwwLjAyMy0wLjgxMywwLjAzNWMtMS4wNTEsMC4wNDQtMi4xMDUsMC4wNzctMy4xNjQsMC4wNzcgICAgYy0xLjA2MiwwLTIuMTE4LTAuMDMzLTMuMTcyLTAuMDc3Yy0wLjMzMy0wLjAxNC0wLjY2Ny0wLjAzLTAuOTk5LTAuMDQ5Yy0wLjc5NS0wLjA0NC0xLjU4Ny0wLjEwNS0yLjM3OC0wLjE3NCAgICBjLTAuNjU2LTAuMDU5LTEuMzExLTAuMTI4LTEuOTY1LTAuMjA1Yy0wLjQ2OC0wLjA1NC0wLjkzNS0wLjEwOS0xLjQtMC4xNzJjLTAuNjY1LTAuMDkxLTEuMzI4LTAuMTg3LTEuOTktMC4yOTYgICAgYy0wLjA4Ni0wLjAxNC0wLjE3Mi0wLjAzLTAuMjU4LTAuMDQ1Yy04LjYxMS0xLjQ0Ni0xNi45MjctNC40MTUtMjQuNTE0LTguNzk4Yy0wLjA0LTAuMDIzLTAuMDgyLTAuMDM4LTAuMTIyLTAuMDYgICAgYy01LjQ0Ni0zLjE2Ny0xMC41MjUtNy4wNDctMTUuMDk4LTExLjYyMWMtMTMuODYyLTEzLjg2Mi0yMS40OTYtMzIuMjkyLTIxLjQ5Ni01MS44OTZzNy42MzQtMzguMDM0LDIxLjQ5Ni01MS44OTYgICAgYzUuMzA4LTUuMzA4LDExLjIzNi05LjYyNiwxNy41NS0xMi45NjVjMC4xNzgtMC4wOTUsMC4zNTgtMC4xODUsMC41MzctMC4yNzhjMTAuNTYzLTUuNDc0LDIyLjE4NC04LjIxOCwzMy44MDktOC4yMTggICAgYzkuMjkzLDAsMTguNTg1LDEuNzU2LDI3LjMzNSw1LjI1NGMwLjE1MiwwLjA2MSwwLjMwNSwwLjExOSwwLjQ1NiwwLjE4MWMwLjkwOSwwLjM3LDEuODEsMC43NjUsMi43MDYsMS4xNzMgICAgYzAuMzU3LDAuMTYzLDAuNzEzLDAuMzMzLDEuMDY4LDAuNTAyYzcuMzU2LDMuNDk2LDE0LjI1MSw4LjI3MSwyMC4zMywxNC4zNWMyOC42MTUsMjguNjE2LDI4LjYxNSw3NS4xNzYsMCwxMDMuNzkyICAgIGMtNS43NTMsNS43NTYtMTIuMzAzLDEwLjQxOC0xOS4zODgsMTMuOTI2QzQyMy4zOTksNDI1LjIxMSw0MjMuMzA4LDQyNS4yMzksNDIzLjIyMSw0MjUuMjgyeiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM5NC4zNzIsMzUyLjI4NnYtMjUuOTk1YzguOTY0LDAuNjQsMTIuMjk0LDQuNzM4LDE1LjM2Nyw0LjczOGMzLjg0MiwwLDUuNjM1LTQuODY2LDUuNjM1LTcuMjk5ICAgIGMwLTYuMjc1LTEyLjI5My04Ljk2NC0yMS4wMDEtOS4yMnYtMy40NThjMC0xLjUzNy0xLjkyLTIuOTQ1LTMuODQxLTIuOTQ1Yy0yLjE3NywwLTMuNzE0LDEuNDA4LTMuNzE0LDIuOTQ1djMuNzE0ICAgIGMtMTIuMTY2LDEuMjgxLTI0LjMzMSw3LjY4NC0yNC4zMzEsMjMuODE5YzAsMTYuMzkxLDEyLjgwNiwyMS4wMDEsMjQuMzMxLDI1LjA5OXYzMC4wOTNjLTEzLjA2Mi0xLjAyNC0xNi41MTktOS45ODgtMjAuNzQ1LTkuOTg4ICAgIGMtMy4yMDIsMC01Ljg5MSw0LjIyNS01Ljg5MSw3LjI5OWMwLDYuMjc1LDEwLjc1NywxNC44NTUsMjYuNjM2LDE1LjExMWgtMC4wMDF2My45NjljMCwxLjUzNywxLjUzNywyLjk0NSwzLjcxNCwyLjk0NSAgICBjMS45MiwwLDMuODQxLTEuNDA4LDMuODQxLTIuOTQ1di00LjM1NGMxMy44My0xLjkyMSwyMy4zMDYtMTAuNjI5LDIzLjMwNi0yNi4zOEM0MTcuNjc4LDM2Mi4wMTgsNDA1LjUxMywzNTYuMzg0LDM5NC4zNzIsMzUyLjI4NiAgICB6IE0zODcuNTg3LDM0OS44NTNjLTYuNzg4LTIuNTYxLTEyLjI5NC01LjI1LTEyLjI5My0xMi41NDljMC02LjY2LDUuMTIyLTkuODYxLDEyLjI5My0xMC43NTdWMzQ5Ljg1M3ogTTM5My42MDUsMzkzLjUyMXYtMjcuMDIgICAgYzYuMjc1LDIuNjg5LDExLjI2OSw2LjI3NCwxMS4yNjksMTQuMzQyQzQwNC44NzQsMzg4LjE0Myw0MDAuNTIsMzkyLjI0MSwzOTMuNjA1LDM5My41MjF6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==";
export const profit_img = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIGNsYXNzPSIiPjxnPjxnPgoJPHBhdGggZD0iTTU0Ljc1NCwxNDkuNjJoODcuMzI2bC0yOS42MzMsNDMuNzQxYy0yLjMyMywzLjQyOS0xLjQyNiw4LjA5MiwyLjAwMywxMC40MTVjMy40MywyLjMyMiw4LjA5MywxLjQyNywxMC40MTYtMi4wMDMgICBsMzUuMzMyLTUyLjE1M2g0OC43MzFsODEuNCwxMjAuMTU1YzEuNDUsMi4xNCwzLjgxMiwzLjI5NCw2LjIxNiwzLjI5NGMxLjQ0OCwwLDIuOTExLTAuNDE5LDQuMi0xLjI5MiAgIGMzLjQyOS0yLjMyMyw0LjMyNi02Ljk4NiwyLjAwMy0xMC40MTVsLTgwLjc1MS0xMTkuMTk2bDQ4LjI1Mi02OS42OTdjNi41NS05LjQ2Miw3LjMwMS0yMS42NzEsMS45Ni0zMS44NjQgICBTMjU2LjQwMiwyNC4wOCwyNDQuODk1LDI0LjA4SDEyNC4yMzJjLTExLjUwOCwwLTIxLjk3NCw2LjMzMi0yNy4zMTUsMTYuNTI1cy00LjU5LDIyLjQwMiwxLjk2LDMxLjg2NWwzMS42NjMsNDUuNzM0TDY2LjY2NCw4MC4zOTYgICBjLTMuNTY1LTIuMTA5LTguMTY0LTAuOTMtMTAuMjc0LDIuNjM0Yy0yLjExLDMuNTY0LTAuOTMxLDguMTY1LDIuNjM0LDEwLjI3NGw2OS44MDEsNDEuMzE1aC03NC4wN2MtNC4xNDIsMC03LjUsMy4zNTctNy41LDcuNSAgIFM1MC42MTIsMTQ5LjYyLDU0Ljc1NCwxNDkuNjJ6IE0xMTAuMjA0LDQ3LjU2N2MyLjc4NS01LjMxNCw4LjAyOS04LjQ4NywxNC4wMjgtOC40ODdoMTIwLjY2MmM2LDAsMTEuMjQ0LDMuMTczLDE0LjAyOCw4LjQ4NyAgIGMyLjc4NSw1LjMxMywyLjQwOCwxMS40MzItMS4wMDcsMTYuMzY0bC00OC45MzgsNzAuNjg4aC00OC44MjhsLTQ4LjkzOC03MC42ODhDMTA3Ljc5Niw1OC45OTksMTA3LjQxOSw1Mi44ODEsMTEwLjIwNCw0Ny41Njd6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjRkNGQUZBIiBmaWxsPSIjRkZGRkZGIi8+Cgk8cGF0aCBkPSJNMzkzLjA4MywyNTAuMDg3Yy02NS41NzEsMC0xMTguOTE3LDUzLjM0Ni0xMTguOTE3LDExOC45MTdjMCwzNi4yMDksMTYuMjczLDY4LjY4NSw0MS44ODMsOTAuNTE0ICAgYy0xMy40MjcsOC42ODMtMjkuMTk4LDEzLjQwMi00NS4zMDksMTMuNDAySDk4LjM5Yy0yMi4yNzYsMC00My4yMTctOC42NzQtNTguOTY3LTI0LjQyNEMyMy42NzQsNDMyLjc0NywxNSw0MTEuODA2LDE1LDM4OS41MyAgIGMwLTE2LjczNyw0Ljk2Mi0zMi45MDgsMTQuMzQ5LTQ2Ljc2NGw3OC41Mi0xMTUuODk5YzIuMzIzLTMuNDMsMS40MjctOC4wOTMtMi4wMDItMTAuNDE2Yy0zLjQyOS0yLjMyMi04LjA5My0xLjQyNy0xMC40MTYsMi4wMDIgICBsLTc4LjUyLDExNS44OTlDNS44NTQsMzUwLjcwMSwwLDM2OS43ODEsMCwzODkuNTNjMCwyNi4yODIsMTAuMjM0LDUwLjk5LDI4LjgxNyw2OS41NzNjMTguNTgyLDE4LjU4Miw0My4yOTEsMjguODE2LDY5LjU3MywyOC44MTYgICBoMTcyLjM1YzIwLjg2MiwwLDQxLjI0NS02LjcwMyw1OC4wMTUtMTguOTQ1YzE4LjU1NywxMS45ODIsNDAuNjQ0LDE4Ljk0NSw2NC4zMjgsMTguOTQ1QzQ1OC42NTQsNDg3LjkyLDUxMiw0MzQuNTc0LDUxMiwzNjkuMDA0ICAgQzUxMiwzMDMuNDMzLDQ1OC42NTQsMjUwLjA4NywzOTMuMDgzLDI1MC4wODd6IE0zOTMuMDgzLDQ3Mi45MmMtNTcuMywwLTEwMy45MTctNDYuNjE2LTEwMy45MTctMTAzLjkxNiAgIHM0Ni42MTctMTAzLjkxNywxMDMuOTE3LTEwMy45MTdTNDk3LDMxMS43MDQsNDk3LDM2OS4wMDRTNDUwLjM4Myw0NzIuOTIsMzkzLjA4Myw0NzIuOTJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjRkNGQUZBIiBmaWxsPSIjRkZGRkZGIi8+Cgk8cGF0aCBkPSJNNDcwLjA3NCwzMjcuMDMyYy0xLjk4Ni0zLjYzNS02LjU0Mi00Ljk3Mi0xMC4xNzctMi45ODZjLTMuNjM1LDEuOTg1LTQuOTczLDYuNTQyLTIuOTg3LDEwLjE3OCAgIGM1Ljc4NywxMC41OTUsOC44NDYsMjIuNjIxLDguODQ2LDM0Ljc4YzAsNDAuMDcyLTMyLjYwMSw3Mi42NzMtNzIuNjczLDcyLjY3M3MtNzIuNjczLTMyLjYwMS03Mi42NzMtNzIuNjczICAgczMyLjYwMS03Mi42NzMsNzIuNjczLTcyLjY3M2MxNi45NzksMCwzMy40OTcsNS45NzgsNDYuNTEyLDE2LjgzMWMzLjE4MSwyLjY1Myw3LjkxMSwyLjIyNCwxMC41NjMtMC45NTYgICBjMi42NTMtMy4xODIsMi4yMjUtNy45MTEtMC45NTYtMTAuNTYzYy0xNS43MDYtMTMuMDk4LTM1LjYzNi0yMC4zMTItNTYuMTE5LTIwLjMxMmMtNDguMzQzLDAtODcuNjczLDM5LjMzLTg3LjY3Myw4Ny42NzMgICBzMzkuMzMsODcuNjczLDg3LjY3Myw4Ny42NzNzODcuNjczLTM5LjMzLDg3LjY3My04Ny42NzNDNDgwLjc1NiwzNTQuMzQsNDc3LjA2MywzMzkuODI2LDQ3MC4wNzQsMzI3LjAzMnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiNGQ0ZBRkEiIGZpbGw9IiNGRkZGRkYiLz4KCTxwYXRoIGQ9Ik0zOTMuMDgzLDQyNi45MDZjNC4xNDIsMCw3LjUtMy4zNTcsNy41LTcuNXYtNy44MjdoMi40NTRjMTMuODA2LDAsMjUuMDM4LTExLjIzMiwyNS4wMzgtMjUuMDM4ICAgcy0xMS4yMzItMjUuMDM3LTI1LjAzOC0yNS4wMzdoLTE5LjkwOGMtNS41MzUsMC0xMC4wMzgtNC41MDMtMTAuMDM4LTEwLjAzOHM0LjUwMy0xMC4wMzgsMTAuMDM4LTEwLjAzOGgyOS4xOTIgICBjNC4xNDIsMCw3LjUtMy4zNTcsNy41LTcuNXMtMy4zNTgtNy41LTcuNS03LjVoLTExLjczOHYtNy44MjdjMC00LjE0My0zLjM1OC03LjUtNy41LTcuNXMtNy41LDMuMzU3LTcuNSw3LjV2Ny44MjdoLTIuNDU0ICAgYy0xMy44MDYsMC0yNS4wMzgsMTEuMjMyLTI1LjAzOCwyNS4wMzhzMTEuMjMyLDI1LjAzOCwyNS4wMzgsMjUuMDM4aDE5LjkwOGM1LjUzNSwwLDEwLjAzOCw0LjUwMywxMC4wMzgsMTAuMDM3ICAgYzAsNS41MzUtNC41MDMsMTAuMDM4LTEwLjAzOCwxMC4wMzhoLTI5LjE5MmMtNC4xNDIsMC03LjUsMy4zNTctNy41LDcuNXMzLjM1OCw3LjUsNy41LDcuNWgxMS43Mzl2Ny44MjcgICBDMzg1LjU4Myw0MjMuNTQ5LDM4OC45NDEsNDI2LjkwNiwzOTMuMDgzLDQyNi45MDZ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjRkNGQUZBIiBmaWxsPSIjRkZGRkZGIi8+Cgk8cGF0aCBkPSJNMzMyLjU3OCwxNTYuOTM1bDUuODYxLTQuNjg4djY4Ljc2YzAsNC4xNDMsMy4zNTgsNy41LDcuNSw3LjVzNy41LTMuMzU3LDcuNS03LjV2LTY4Ljc2bDUuODYxLDQuNjg4ICAgYzEuMzgzLDEuMTA2LDMuMDM3LDEuNjQ0LDQuNjgsMS42NDRjMi4yLDAsNC4zOC0wLjk2Myw1Ljg2MS0yLjgxNGMyLjU4OC0zLjIzNSwyLjA2My03Ljk1NC0xLjE3MS0xMC41NDJsLTE4LjA0Ni0xNC40MzcgICBjLTAuMDE5LTAuMDE2LTAuMDQyLTAuMDI1LTAuMDYxLTAuMDQxYy0wLjMxNS0wLjI0OC0wLjY0OC0wLjQ3My0xLjAwMS0wLjY2OGMtMC4wMDctMC4wMDMtMC4wMTMtMC4wMDgtMC4wMi0wLjAxMiAgIGMtMC4zMzktMC4xODYtMC42OTYtMC4zMzktMS4wNjQtMC40NzJjLTAuMDUtMC4wMTgtMC4xLTAuMDM4LTAuMTUtMC4wNTVjLTAuMzQ3LTAuMTE2LTAuNzA0LTAuMjA3LTEuMDcxLTAuMjcyICAgYy0wLjA2NS0wLjAxMS0wLjEyOS0wLjAyLTAuMTkzLTAuMDI5Yy0wLjM2OC0wLjA1Ni0wLjc0MS0wLjA5My0xLjEyNC0wLjA5M3MtMC43NTYsMC4wMzgtMS4xMjQsMC4wOTMgICBjLTAuMDY1LDAuMDEtMC4xMjksMC4wMTgtMC4xOTMsMC4wMjljLTAuMzY3LDAuMDY1LTAuNzI1LDAuMTU2LTEuMDcxLDAuMjcyYy0wLjA1MSwwLjAxNy0wLjEsMC4wMzctMC4xNSwwLjA1NSAgIGMtMC4zNjgsMC4xMzItMC43MjUsMC4yODYtMS4wNjQsMC40NzJjLTAuMDA3LDAuMDA0LTAuMDEzLDAuMDA5LTAuMDIsMC4wMTJjLTAuMzUzLDAuMTk1LTAuNjg2LDAuNDIxLTEuMDAxLDAuNjY4ICAgYy0wLjAyLDAuMDE2LTAuMDQyLDAuMDI1LTAuMDYxLDAuMDQxbC0xOC4wNDYsMTQuNDM3Yy0zLjIzNCwyLjU4OC0zLjc1OSw3LjMwNy0xLjE3MSwxMC41NDIgICBDMzI0LjYyNCwxNTguOTk3LDMyOS4zNDIsMTU5LjUyMiwzMzIuNTc4LDE1Ni45MzV6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjRkNGQUZBIiBmaWxsPSIjRkZGRkZGIi8+Cgk8cGF0aCBkPSJNNDI2Ljg2NywxMTYuNzEybDUuODYxLTQuNjg4djY4Ljc2YzAsNC4xNDMsMy4zNTgsNy41LDcuNSw3LjVzNy41LTMuMzU3LDcuNS03LjV2LTY4Ljc2bDUuODYxLDQuNjg4ICAgYzEuMzgzLDEuMTA2LDMuMDM3LDEuNjQ0LDQuNjgsMS42NDRjMi4yLDAsNC4zOC0wLjk2Myw1Ljg2MS0yLjgxNGMyLjU4OC0zLjIzNSwyLjA2My03Ljk1NC0xLjE3MS0xMC41NDJsLTE4LjA0Ni0xNC40MzcgICBjLTAuMDE5LTAuMDE2LTAuMDQyLTAuMDI1LTAuMDYxLTAuMDQxYy0wLjMxNS0wLjI0OC0wLjY0OC0wLjQ3My0xLjAwMS0wLjY2OGMtMC4wMDctMC4wMDMtMC4wMTMtMC4wMDgtMC4wMi0wLjAxMiAgIGMtMC4zMzktMC4xODYtMC42OTYtMC4zMzktMS4wNjQtMC40NzJjLTAuMDUtMC4wMTgtMC4xLTAuMDM4LTAuMTUtMC4wNTVjLTAuMzQ3LTAuMTE2LTAuNzA0LTAuMjA3LTEuMDcxLTAuMjcyICAgYy0wLjA2NS0wLjAxMS0wLjEyOS0wLjAyLTAuMTkzLTAuMDI5Yy0wLjM2OC0wLjA1Ni0wLjc0MS0wLjA5My0xLjEyNC0wLjA5M3MtMC43NTYsMC4wMzgtMS4xMjQsMC4wOTMgICBjLTAuMDY1LDAuMDEtMC4xMjksMC4wMTgtMC4xOTMsMC4wMjljLTAuMzY3LDAuMDY1LTAuNzI1LDAuMTU2LTEuMDcxLDAuMjcyYy0wLjA1MSwwLjAxNy0wLjEsMC4wMzctMC4xNSwwLjA1NSAgIGMtMC4zNjgsMC4xMzItMC43MjUsMC4yODYtMS4wNjQsMC40NzJjLTAuMDA3LDAuMDA0LTAuMDEzLDAuMDA5LTAuMDIsMC4wMTJjLTAuMzUzLDAuMTk1LTAuNjg2LDAuNDIxLTEuMDAxLDAuNjY4ICAgYy0wLjAyLDAuMDE2LTAuMDQyLDAuMDI1LTAuMDYxLDAuMDQxbC0xOC4wNDYsMTQuNDM3Yy0zLjIzNCwyLjU4OC0zLjc1OSw3LjMwNy0xLjE3MSwxMC41NDIgICBDNDE4LjkxMywxMTguNzc0LDQyMy42MzIsMTE5LjI5OSw0MjYuODY3LDExNi43MTJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjRkNGQUZBIiBmaWxsPSIjRkZGRkZGIi8+CjwvZz48L2c+IDwvc3ZnPgo=";
