import React from 'react';
import {Link} from 'react-router-dom';

const Client = function(props) {
    let invoice_status = <span className="badge badge-pill badge-success">No outstanding invoices</span>;

    let last_invoice_date = "N/A";

    const url = "/client/edit/" + props.client.id;
    return(
        <tr>
            <td>{props.client.client_data.name}</td>
            <td>{props.client.client_data.address}</td>
            <td>{invoice_status}</td>
            <td>{last_invoice_date}</td>
            <td><Link className='btn btn-info bt-sm' to={url}>Edit</Link></td>
        </tr>
    )
}

export default Client;