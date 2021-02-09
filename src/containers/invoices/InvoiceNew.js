import React, {Component} from 'react';
import TimeTable from './TimeTable';
import ClientField from './ClientField';
import { getClientsGQL } from './helpers';

export default class InvoiceNew extends Component {
    state = {
        selectedCompany: 'company1',
        clients_transactions: []
    }

    async componentDidMount() {
        const that = this;
        const clients_transactions = await getClientsGQL();
        that.setState({clients_transactions: clients_transactions, selectedCompany: clients_transactions[0].id});
    }
    
    OnSetCompany(e) {
        this.setState({ selectedCompany: e.target.value })
    }

    render() {    
        return (
            <div className="main-content">
                <select style={{fontSizeAdjust: "100%"}} className="form-control col-3" onChange={(e) => { this.OnSetCompany(e) }} value={this.state.selectedCompany}>
                {this.state.clients_transactions.map(transaction => {
                    console.log(transaction);
                    return <option key={transaction.id} value={transaction.id}>{transaction.client_data.name}</option>
                })}
                </select>
                <ClientField clients_transactions={this.state.clients_transactions} selectedCompany={this.state.selectedCompany}></ClientField>
            </div>
            
        );
    }
}