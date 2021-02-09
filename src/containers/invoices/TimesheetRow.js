import React from 'react';
import Date from '../../components/UI/Date';
import { CheckBox } from './CheckBox';

const TimesheetRow = function(props) {
    console.log(props.timesheet);

    let client_name = 'UNKNOWN';
    if(props.timesheet.hasOwnProperty('client')) {
        client_name = props.timesheet.client.name;
    }
    const { handleCheckboxChange , txid, checked } = props;
    return(
        <tr>
            <td><CheckBox txid={ txid } checked={checked} handleCheckboxChange={ handleCheckboxChange }/></td>
            <td><Date date={props.timesheet.start} /></td>
            <td><Date date={props.timesheet.finish} /></td>
            <td>{client_name}</td>
        </tr>
    )
}

export default TimesheetRow;