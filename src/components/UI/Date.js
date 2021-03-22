import React from 'react';
import Moment from 'react-moment';


function englishDate(date) {
    var day = date.getDate();
    if(day < 10) day = "0" + day;

    var month = date.getMonth() + 1;
    if(month < 10) month = "0" + month;

    var year = date.getFullYear();

    return day + '/' + month + '/' + year;
}

function americanDate(date) {
    var day = date.getDate();
    if(day < 10) day = "0" + day;

    var month = date.getMonth() + 1;
    if(month < 10) month = "0" + month;

    var year = date.getFullYear();

    return month + '/' + day + '/' + year;
}

const DateElement = function(props) {
    const date_format = localStorage.getItem('evermore-invoice-date-format', null);

    const date = <Moment date={props.date} format={date_format}/>

    return date;
}

export default DateElement;