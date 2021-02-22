import React, { Component } from 'react';
import TimesheetRow from './TimesheetRow';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { getTSheetsGQL } from './helpers';
import { SelectAll } from './CheckBox';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('body');

export default class TimeTable extends Component {
    state = {
        timesheets: [],
        selectedCheckboxes: new Set(),
        dialog_open: false
    }

    componentDidMount() {
        this.onImport()
    }

    modalIsOpen() {
        return this.state.dialog_open;
    }

    setIsOpen(open) {
        this.setState({dialog_open: open})
    }

    openModal() {
        this.setIsOpen(true);
    }
 
    closeModal() {
        this.setIsOpen(false);
    }

    sendData() {
        const select_timesheet_objects = [];
        const selected_array = Array.from(this.state.selectedCheckboxes);

        for(let i in selected_array) {
            const timesheet_id = selected_array[i];

            const matches = this.state.timesheets.filter(ts => ts.id == timesheet_id);

            if(matches.length > 0) {
                select_timesheet_objects.push(matches[0]);
            }
        }
        this.props.onSendTimesheets(select_timesheet_objects)
        this.setIsOpen(false);
        toast("Your selected Timesheets have been imported to the form!", { type: toast.TYPE.SUCCESS });

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

        
        const current_styles = this.state.dialog_open ? customStyles: {};

        return (
            <div>
                <div className="form-group">
                    <button className="form-control" onClick={() => { this.openModal() }}>Open Timesheet Selection</button>
                </div>
                <Modal
                isOpen={this.state.dialog_open}
                onRequestClose={() => {this.closeModal()}}
                style={current_styles}
                contentLabel="Example Modal"
                >
                    <div>
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
                    <div className="modal-footer custom">
                        <div className="left-side">
                            <button type="button" className="btn btn-link danger" onClick={() => {this.closeModal()}} >Cancel</button>
                        </div>
                        <div className="right-side">
                            <button type="button" className="btn btn-link success" onClick={() => { this.sendData() }}>Send Selected</button>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}