import React, {Component} from 'react';
import TimesheetRow from './TimesheetRow';
import { getTSheetsGQL } from './helpers';
import { SelectAll } from './CheckBox';

export default class TimeTable extends Component {
    state = {
        timesheets: [],
        selectedCheckboxes: new Set()
    }
    async onImport () {
        this.setState({ timesheets: await getTSheetsGQL() });
    }

    constructor(props) {
        super(props);
        this.handleCheckboxChange.bind(this);
    }

    handleCheckboxChange(txid) {
        if(this.state.selectedCheckboxes.has(txid)){
            this.state.selectedCheckboxes.delete(txid)
        } else {
            this.state.selectedCheckboxes.add(txid)
        }
    }

    selectAll(checked) {
        if(checked) {
            const selected = new Set()
            for(let i in this.state.timesheets) {
                const timesheet = this.state.timesheets[i];
                selected.add(timesheet.id)
            }
            this.setState({ selectedCheckboxes: selected })
        } else {
            this.setState({ selectedCheckboxes: new Set() })
        }
    }

    render () {
        const timesheets = this.state.timesheets.map(timesheet => {
            const checked = this.state.selectedCheckboxes.has(timesheet.id);
            return <TimesheetRow key={timesheet.id} txid={timesheet.id} checked={checked} handleCheckboxChange={(txid) => {this.handleCheckboxChange(txid)}} timesheet={timesheet} />
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
                            <th><SelectAll selectAll={(checked) => {this.selectAll(checked)} }/> Select All</th>
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
        )
    }
}