import React, {Component} from 'react';
import { getTSheets } from './helpers';


class InvoiceNew extends Component {
    onImport () {
        getTSheets()
    }
       render() {
           return (
            <div className="main-content">

                <button className="btn btn-default form-control" onClick={() => {this.onImport()}}>Load Timelord Timesheets</button>
            </div>
           );
       }
}
export default InvoiceNew;