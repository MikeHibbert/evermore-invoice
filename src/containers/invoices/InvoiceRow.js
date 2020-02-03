import React from 'react';
import {Link} from 'react-router-dom';

const InvoiceRow = function(props) {
    const url = "/invoice/edit/" + props.invoice.txid;
    return(
        <tr>
            <td>{props.invoice.txid}</td>
            <td>{props.invoice.created}</td>
            <td>{props.invoice.client.name}</td>
            <td>{props.invoice.status}</td>
            <td>{props.invoice.total_value}</td>
            <td><Link className='btn btn-info bt-sm' to={url}>Edit</Link></td>
        </tr>
    )
}

export default InvoiceRow;