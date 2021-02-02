import React, {Component} from 'react';
import TimesheetRow from './TimesheetRow';
import { getTSheetsGQL } from './helpers';

function CheckBox(e) {

    const checked = e.target.value;

    debugger;
    if (checked == true) {
        console.log('checked box')
    } else {
        console.log('unchecked box')
    }
}

export default class InvoiceNew extends Component {
    state = {
        timesheets: []
    }
    async onImport () {
        this.setState({timesheets: await getTSheetsGQL()});
    }
    
    render() {
        const timesheets = this.state.timesheets.map(timesheet => {
            return <TimesheetRow key={timesheet.id} timesheet={timesheet} />
        })
    
        return (
            <div className="main-content">
                <button className="btn btn-default form-control" onClick={() => {this.onImport()}}>Load Timelord Timesheets</button>
                <table className="table table-align-middle border-bottom mb-6">
                    <thead>
                        <tr>
                            <th className="text-align" colSpan='3'>Timesheet Selection</th>
                        </tr>
                        <tr> 
                            <th><input type="checkbox" id="myCheck" onClick={(e) => CheckBox(e)}/> Select All</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Client</th>
                        </tr>
                    </thead>
                    <tbody>
                        {timesheets}
                    </tbody>
                </table>
            </div>
        );
    }
}