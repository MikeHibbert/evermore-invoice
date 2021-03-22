import React from 'react';
import {Link} from 'react-router-dom';
import DateElement from '../../components/UI/Date';

const InvoiceRow = function(props) {
    const url = "/invoice/edit/" + props.invoice.invoice_data.id;
    const tx_status_url = "https://www.arweave.net/tx/" + props.invoice.id + "/status";
    const created_date = new Date(props.invoice.invoice_data.hasOwnProperty('unixcreated') ? props.invoice.invoice_data.unixcreated:props.invoice.invoice_data.created);
    const due_date = new Date(props.invoice.invoice_data.hasOwnProperty('unixduedate') ? props.invoice.invoice_data.unixduedate:props.invoice.invoice_data.duedate);

    return(
        <tr>
            <td>{props.invoice.invoice_data.clientid}</td>
            <td><a target="_blank" href={tx_status_url}>{props.invoice.id}</a></td>
            <td><DateElement date={created_date} /></td>
            <td><DateElement date={due_date} /></td>
            <td>{props.invoice.invoice_data.totalvalue}</td>
            <td><Link className='btn btn-info bt-sm' to={url}>Edit</Link></td>
        </tr>
    )
}

export default InvoiceRow;