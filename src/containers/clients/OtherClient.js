import React from 'react';
import {Link} from 'react-router-dom';

const OtherClient = function(props) {
    let invoice_status = <span className="badge badge-pill badge-success">No outstanding invoices</span>;

    let last_invoice_date = "N/A";

    return(
        <tr>
            <td>{props.client.object_data.name}</td>
            <td>{props.client.object_data.address}</td>
            <td>{invoice_status}</td>
            <td>{last_invoice_date}</td>
        </tr>
    )
}

export default OtherClient;