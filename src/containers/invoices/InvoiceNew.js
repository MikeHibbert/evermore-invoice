import React, {Component} from 'react';
import { getTSheetsGQL } from './helpers';


class InvoiceNew extends Component {
    state = {
        timesheets: null
    }
    async onImport () {
        this.setState({timesheets: await getTSheetsGQL()});
    }
       render() {
           return (
                <div className="main-content">
                    <button className="btn btn-default form-control" onClick={() => {this.onImport()}}>Load Timelord Timesheets</button>
                    <table className="table table-align-middle border-bottom mb-6">
                        <thead>
                            <tr>
                                <th colSpan='3'>Timesheet Collection</th>
                            </tr>
                            <tr>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Client</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.timesheets}
                        </tbody>
                    </table>
                </div>
           );
       }
}
export default InvoiceNew;