import React from 'react';
import {Link} from 'react-router-dom';
import Date from '../../components/UI/Date';

const InvoiceRow = function(props) {
    const url = "/invoice/edit/" + props.invoice.txid;
    const tx_status_url = "https://www.arweave.net/tx/" + props.invoice.invoice_data.txid + "/status";
    return(
        <tr>
            <td>{props.invoice.invoice_data.client.name}</td>
            <td><a target="_blank" href={tx_status_url}>{props.invoice.invoice_data.txid}</a></td>
            <td><Date date={props.invoice.invoice_data.created_at} /></td>
            <td>{props.invoice.invoice_data.status}</td>
            <td>{props.invoice.invoice_data.total_value}</td>
            <td><Link className='btn btn-info bt-sm' to={url}>Edit</Link></td>
        </tr>
    )
}

export default InvoiceRow;