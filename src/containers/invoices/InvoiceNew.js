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
                <form>
                    <label>
                        <ClientField/>
                    </label>
                </form>
            </div>
        );
    }
}