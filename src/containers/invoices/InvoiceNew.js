import React, {Component} from 'react';
import TimeTable from './TimeTable';
import ClientField from './ClientField';
import { getClientsGQL } from './helpers';

export default class InvoiceNew extends Component {
    state = {
        //clients_transactions: [],
        clientid: null,
    }

    /*async componentDidMount() {
        const that = this;
        const clients_transactions = await getClientsGQL();
        that.setState({clients_transactions: clients_transactions, selectedCompany: clients_transactions[0].id});
    }*/

    constructor(props) {
        super(props)
        this.onSelectClient.bind(this)
    }

    onSelectClient(clientid) {
        this.setState({ clientid: clientid })
    }

    render() {    
        return (
            <div className="main-content">
                <form style={{ width: '20%' }}>
                    <div className="card m-0">
                        <div className="card-body">
                            <ClientField clients={ this.props.clients } onSelectClient={ (clientid) => { this.onSelectClient(clientid) } } />
                            <TimeTable/>
                            <button type="button" id="submit" name="submit" className="btn btn-primary float-right">Submit Form</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}