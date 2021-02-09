import React, { Component } from 'react';

class Client extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.clients_transactions.client_data.name}</td>
                <td>{this.props.clients_transactions.client_data.email}</td>
                <td>{this.props.clients_transactions.client_data.address}</td>
            </tr>
        );
    };
}

export default class ClientField extends Component {
    render() {
        const clnts_html = [];

        const clnts = this.props.clients_transactions.filter((cl) => cl.clientid == this.props.selectedCompany);

        for(let i in clnts) {
            const clnt = clnts[i];

            const clnt_html = <Client key={i} clients_transactions={clnt} />

            clnts_html.push(clnt_html);
        }
        return (
            <div className="main-content">
                <div>
                    <table className="table table-align-middle border-bottom mb-6">
                        <thead>
                            <tr>
                                <th className="text-align" colSpan='3'>Client Info</th>
                            </tr>
                            <tr> 
                                <th>Client Name</th>
                                <th>Client Email</th>
                                <th>Client Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clnts_html}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}