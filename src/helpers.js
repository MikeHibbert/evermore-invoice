
import sendgrid from '@sendgrid/mail';
import arweave from '../../arweave-config';
import settings from '../../app-config';
import {toastr} from 'react-toastify';

const successMessage = (message) => {
  toast(message, { type: toast.TYPE.SUCCESS }); 
}

const errorMessage = (message) => {
  toast(message, { type: toast.TYPE.SUCCESS }); 
}

const encryptData = (data) => {

}

const decryptData = (encrypted_data) => {

}

export const sendInvoice = (api_key) => {
  // "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"
  sendgrid.setApiKey(api_key);

  const msg = {
    to: 'hibbert.michael@gmail.com',
    from: 'admin@quick.build',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sendgrid.send(msg);
}

export const saveInvoice = async (data) {
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
      },
      "my_ideas"
    };

    const txids = arweave.arql(arql);

    const invoices = await Promise.all(txids.map(async txid => {

    }));

    return invoices;
}