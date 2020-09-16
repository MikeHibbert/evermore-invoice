import React from 'react';
import {Link} from 'react-router-dom';
import Date from '../../components/UI/Date';
import { format } from "d3-format";

const InvoiceRow = function(props) {
    const url = "/invoice/edit/" + props.invoice.txid;
    const tx_status_url = "https://www.arweave.net/tx/" + props.invoice.txid + "/status";
    const currency_decimal_places = localStorage.getItem('evermore-invoice-currency-decimal-places');
    const format_mask = currency_decimal_places != null ? '.' + currency_decimal_places + 'f': '.2f';
    return(
        <tr>
            <td><a target="_blank" rel="noopener noreferrer" href={tx_status_url}>{props.invoice.txid}</a></td>
            <td><Date date={props.invoice.created_at} /></td>
            <td>{props.invoice.client.name}</td>
            <td>{props.invoice.status}</td>
            <td>{props.currency_symbol}{format(format_mask)(props.invoice.total_value)}</td>
            <td><Link className='btn btn-info bt-sm' to={url}>Edit</Link></td>
        </tr>
    )
}

export default InvoiceRow;