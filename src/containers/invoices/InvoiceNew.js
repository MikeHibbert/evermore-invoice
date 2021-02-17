import React, {Component} from 'react';
import TimeTable from './TimeTable';
import ClientField from './ClientField';
import CostRelatedStuff from './CostRelatedStuff';
import Moment from 'react-moment';
import { toast } from 'react-toastify';
import { getClientsGQL } from './helpers';


export default class InvoiceNew extends Component {
    state = {
        //clients_transactions: [],
        clientid: null,
        timesheets: [],
        otherinfo: []
    }

    /*async componentDidMount() {
        const that = this;
        const clients_transactions = await getClientsGQL();
        that.setState({clients_transactions: clients_transactions, selectedCompany: clients_transactions[0].id});
    }*/

    constructor(props) {
        super(props)
        this.onSelectClient.bind(this)
        this.onSendTimesheets.bind(this)
        this.onGotTheStuff.bind(this)
    }

    onSelectClient(clientid) {
        this.setState({ clientid: clientid })
    }

    onSendTimesheets(txid) {
        this.setState({ timesheets: txid })
    }

    onGotTheStuff(stuff_to_give) {
        this.setState({ otherinfo: stuff_to_give })
    }

    validateNewInvoice() {
        if(this.state.timesheets.length < 3 ) {
            toast("Please select some timesheets before submission!", { type: toast.TYPE.ERROR }); 
    
            return false;
        } else { 
            if(this.state.otherinfo.length < 3 ) {
                toast("Please fill in the other info before submission!", { type: toast.TYPE.ERROR });
            }
        }

        return true;
    }

    onSubmit(event) {
        event.preventDefault();

        if(this.validateNewInvoice() == true) {
            
            this.props.history.push('/invoices')
        }         
    }

    render() {
        const timesheets = this.state.timesheets.map(timesheet => {

            let client_name = 'UNKNOWN';
            if(timesheet.hasOwnProperty('client')) {
                client_name = timesheet.client.name;
            }
            return (
                <tr>
                    <td>{client_name}</td>
                    <td><Moment format="DD/MM/YYYY hh:mm:ss">{timesheet.start}</Moment></td>
                    <td><Moment format="DD/MM/YYYY hh:mm:ss">{timesheet.finish}</Moment></td>
                </tr>
            )
        })

        const cost_date_object = this.state.otherinfo.map(cost_date => {
            return (
                <tr>
                    <td><Moment format="DD/MM/YYYY">{cost_date.created}</Moment></td>
                    <td><Moment format="DD/MM/YYYY">{cost_date.duedate}</Moment></td>
                    <td>{cost_date.totalvalue}</td>
                </tr>
            )
        })

        const timesheet_table_data = this.state.timesheets.map(timesheet => {

            let client_name = 'UNKNOWN';
            if(timesheet.hasOwnProperty('client')) {
                client_name = timesheet.client.name;
            }
            return (
                <> 
                    {timesheets}
                    {cost_date_object}
                </>
            )
        })
        
        
        let timesheet_table = null;
        if(timesheet_table_data.length > 0) {
            timesheet_table = 
            <div className="card m-0">
                <div className="card-body">
                    <table className="table table-align-middle border-bottom mb-6">
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'center' }}>Invoice Preview</th>
                            </tr>
                            <tr>
                                <th>Client</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Created</th>
                                <th>Due Date</th>
                                <th>Total Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {timesheet_table_data}
                        </tbody>
                    </table>
                </div>
            </div>;              
        }
        return (
            <div className="main-content">
                <form style={{ width: '20%', display:'inline-block' }}>
                    <div className="card m-0">
                        <div className="card-body">
                            <ClientField clients={ this.props.clients } onSelectClient={ (clientid) => { this.onSelectClient(clientid) } } />
                            <TimeTable timesheets={ this.props.timesheets } onSendTimesheets={ (timesheets) => { this.onSendTimesheets(timesheets) }}/>
                            <CostRelatedStuff created={ this.props.created } duedate={ this.props.duedate } totalvalue={ this.props.totalvalue } onGotTheStuff={ (stuff_to_give) => { this.onGotTheStuff(stuff_to_give) }}/>
                            <button type="button" id="submit" name="submit" className="btn btn-primary float-right" onClick={(event) => { this.onSubmit(event) }}>Submit Form</button>
                        </div>
                    </div>
                </form>
                <div style={{ paddingLeft: 20 , display:'inline-table' }}>
                    {timesheet_table}
                </div>
            </div>
        );
    }
}