import React from 'react';
import {Link} from 'react-router-dom';
import Date from '../../components/UI/Date';

const InvoiceRow = function(props) {
    const url = "/invoice/edit/" + props.invoice.txid;
    const tx_status_url = "https://www.arweave.net/tx/" + props.invoice.txid + "/status";
    return(
        <tr>
            <td><a target="_blank" href={tx_status_url}>{props.invoice.txid}</a></td>
            <td><Date date={props.invoice.created_at} /></td>
            <td>{props.invoice.client.name}</td>
            <td>{props.invoice.status}</td>
            <td>{props.invoice.total_value}</td>
            <td><Link className='btn btn-info bt-sm' to={url}>Edit</Link></td>
        </tr>
    )
}

export default InvoiceRow;