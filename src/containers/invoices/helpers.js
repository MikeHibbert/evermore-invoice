import arweave from '../../arweave-config';
import settings from '../../app-config';

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

    debugger;

    return tsheets;
}