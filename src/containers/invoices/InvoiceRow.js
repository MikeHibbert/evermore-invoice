import React from 'react';
import {Link} from 'react-router-dom';
import Date from '../../components/UI/Date';

const InvoiceRow = function(props) {
    const url = "/invoice/edit/" + props.invoices.invoice_data.id;
    const tx_status_url = "https://www.arweave.net/tx/" + props.invoices.id + "/status";
    return(
        <tr>
            <td>{props.invoices.invoice_data.name}</td>
            <td><a target="_blank" href={tx_status_url}>{props.invoices.id}</a></td>
            <td><Date date={props.invoices.invoice_data.unixcreated} /></td>
            <td>{props.invoices.status}</td>
            <td>{props.invoices.invoice_data.totalvalue}</td>
            <td><Link className='btn btn-info bt-sm' to={url}>Edit</Link></td>
        </tr>
    )
}

export default InvoiceRow;