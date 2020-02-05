import React from 'react';

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

const Date = function(props) {
    const date_format = localStorage.getItem('evermore-invoice-date-format', null);

    let date = americanDate(props.date);
    if(date_format === 'dd/mm/yyyy') {
        date = englishDate(props.date);
    }

    return date;
}

export default Date;