import React from 'react';
import {Link} from 'react-router-dom';
import Date from '../../components/UI/Date';

function CheckBox(e) {

    const checked = e.target.value;

    if (checked == true) {
        console.log('checked box')
    } else {
        console.log('unchecked box')
    }
}

const TimesheetRow = function(props) {
    console.log(props.timesheet);

    let client_name = 'UNKNOWN';
    if(props.timesheet.hasOwnProperty('client')) {
        client_name = props.timesheet.client.name;
    }
    return(
        <tr>
            <td><input type="checkbox" id="myCheck" onClick={(e) => CheckBox(e)}/></td>
            <td><Date date={props.timesheet.start} /></td>
            <td><Date date={props.timesheet.finish} /></td>
            <td>{client_name}</td>
        </tr>
    )
}

export default TimesheetRow;