import React, {Component} from 'react';
import TimeTable from './TimeTable';
import ClientField from './ClientField';
import Moment from 'react-moment';
import { toast } from 'react-toastify';
import { currencyFormatter, saveEverVoice } from './helpers';
import moment from 'moment';



export default class InvoiceNew extends Component {
    state = {
        clientid: null,
        timesheets: [],
        otherinfo: [],
        totalvalue: 0,
        costph:0,
        unixcreated: 0,
        unixduedate: 0
    }

    constructor(props) {
        super(props)
        this.onSelectClient.bind(this)
        this.onSendTimesheets.bind(this)
    }

    onSelectClient(clientid) {
        this.setState({ clientid: clientid })
    }

    onSendTimesheets(txid) {
        this.setState({ timesheets: txid })
    }

    componentDidMount() {
        const creationdate = new Date()
     
        const today1 = new Date();
        const today2 = moment(today1).add(30, "days");

        const unixcreated = creationdate.getTime();
        const unixduedate = moment(today2).unix()*1000

        debugger;
        this.setState({ otherinfo: {duedate: today2, created: creationdate}, unixcreated: unixcreated, unixduedate: unixduedate, clientid: this.props.clients[0].id })
    }
    
    totalValueCalculator(e) {
        let totalvalue = 0 
        if(e.target.value == "") {
            this.setState({totalvalue: 0})
            return; 
        }
        for(let i in this.state.timesheets) {
            const timesheet = this.state.timesheets[i];
            totalvalue += timesheet.totalTime * parseFloat(e.target.value); 
        }
        
        this.setState({totalvalue: totalvalue, costph: parseFloat(e.target.value)})
    }   

    validateNewInvoice() {
        if(this.state.timesheets.length < 1 ) {
            return false;
        }
        if(this.state.otherinfo.length < 1 ) {
            return false
        }
        if(this.state.costph <= 0) {
            return false
        }

        return true;
    }

    onSubmit(event) {
        event.preventDefault();

        if(this.validateNewInvoice() == true) {
            saveEverVoice(this.state.clientid, this.state.timesheets, this.state.unixcreated, this.state.unixduedate, this.state.costph, this.state.totalvalue);
            this.props.history.push('/invoices')
        } else {
            toast("Please Make Sure All Required Data Is Present Before Submission!", { type: toast.TYPE.ERROR });
        }
    }

    render() {
        const timesheet_table_data = this.state.timesheets.map(timesheet => {
            
            let client_name = 'UNKNOWN';
            if(timesheet.hasOwnProperty('client')) {
                client_name = timesheet.client.name;
            }
            let totalcost = timesheet.totalTime * this.state.costph;
            return (
                <tr>
                    <td>{client_name}</td>
                    <td><Moment format="DD/MM/YYYY hh:mm:ss">{timesheet.start}</Moment></td>
                    <td><Moment format="DD/MM/YYYY hh:mm:ss">{timesheet.finish}</Moment></td>
                    <td><Moment format="DD/MM/YYYY">{this.state.otherinfo.created}</Moment></td>
                    <td>{currencyFormatter(totalcost, {symbol: this.props.currency_symbol})}</td>
                </tr>
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
                                <th>Total Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {timesheet_table_data}
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>{currencyFormatter(this.state.totalvalue, {symbol: this.props.currency_symbol})}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>;              
        }
        return (
            <>
                <header className="page-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="page-title">
                                    <h3>&nbsp;</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                    <div className="main-content">
                        <div style={{ width: '20%', display:'inline-block' }}>
                            <div className="card m-0">
                                <div className="card-body">
                                    <div><h5>Invoice Due Date: </h5><h6><Moment format="DD/MM/YYYY">{this.state.otherinfo.duedate}</Moment></h6></div>
                                    <ClientField clients={ this.props.clients } onSelectClient={ (clientid) => { this.onSelectClient(clientid) }}/>
                                    <TimeTable timesheets={ this.props.timesheets } onSendTimesheets={ (timesheets) => { this.onSendTimesheets(timesheets) }}/>
                                    <div className="form-group">
                                    Cost Per Hour <input className="form-control" type="text" onChange={ (e) => {this.totalValueCalculator(e) }}/>
                                    </div>
                                    <button type="button" id="submit" name="submit" className="btn btn-primary float-right" onClick={ (event) => { this.onSubmit(event) }}>Submit Form</button>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingLeft: 20 , display:'inline-table' }}>
                            {timesheet_table}
                        </div>
                    </div>
            </>
        );
    }
}