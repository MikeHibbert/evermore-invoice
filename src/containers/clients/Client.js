import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Client extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let invoice_status = <span className="badge badge-pill badge-success">No outstanding invoices</span>;
        let last_invoice_date = "N/A";
        const edit = "/client/edit/" + this.props.client.id;
        const origins = "/client/history/" + this.props.client.client_data.Origin;
        return (
            <tr>
                <td>{this.props.client.client_data.name}</td>
                <td>{this.props.client.client_data.address}</td>
                <td>{invoice_status}</td>
                <td>{last_invoice_date}</td>
                <td><Link style={{ marginRight: "10px" }} className='btn btn-info bt-sm' to={edit}>Edit</Link><Link style={{ marginRight: "10px" }} className='btn btn-info bt-sm' to={origins}>History</Link></td>
            </tr>
        )
    } 
}