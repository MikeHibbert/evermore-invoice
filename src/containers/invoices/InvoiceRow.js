import React from 'react';
import {Link} from 'react-router-dom';
import Date from '../../components/UI/Date';

const InvoiceRow = function(props) {
    const url = "/invoice/edit/" + props.invoice.invoice_data.id;
    const tx_status_url = "https://www.arweave.net/tx/" + props.invoice.id + "/status";
    return(
        <tr>
            <td>{props.invoice.invoice_data.name}</td>
            <td><a target="_blank" href={tx_status_url}>{props.invoice.id}</a></td>
            <td><Date date={props.invoice.invoice_data.unixcreated} /></td>
            <td>{props.invoice.status}</td>
            <td>{props.invoice.invoice_data.totalvalue}</td>
            <td><Link className='btn btn-info bt-sm' to={url}>Edit</Link></td>
        </tr>
    )
}

export default InvoiceRow;