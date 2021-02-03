import React from 'react';
import {Link} from 'react-router-dom';
import Date from '../../components/UI/Date';

function CheckBox(e) {

    const checked = e.target.value;

    if (checked == 'off') {
        document.getElementById("myCheck").value="on";
        console.log('checked box')
    } else {
        document.getElementById("myCheck").value="off";
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
            <td><input type="checkbox" value="off" id="myCheck" onClick={(e) => CheckBox(e)}/></td>
            <td><Date date={props.timesheet.start} /></td>
            <td><Date date={props.timesheet.finish} /></td>
            <td>{client_name}</td>
        </tr>
    )
}

export default TimesheetRow;