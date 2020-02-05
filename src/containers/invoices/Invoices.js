import React, {Component} from 'react';
import {successMessage, errorMessage} from '../../helpers';
import { Link } from 'react-router-dom';
import Pagination from "react-js-pagination";
import InvoiceRow from './InvoiceRow';
import NumberFormat from 'react-number-format';
import {profit_img, profits_img, purse_img} from '../../helpers';

class Invoices extends Component {
    state = {
        invoices_paid_balance: 0,
        invoices_unpaid_balance: 0,
        invoices_overdue_balance: 0,
        active_page: 1,
        invoices: [],

    }

    constructor(props) {
      super(props);

      this.handlePageChange = this._handlePageChange.bind(this);
      this.getPaginatedInvoices.bind(this);
    }

    componentDidMount() {
      const invoices = this.getPaginatedInvoices(0, 9);

      this.setState({invoices: invoices, active_page: 1})
    }

    _handlePageChange(active_page) {
      const start = (active_page - 1) * 10;
      const end = start + 9;

      const invoices = this.getPaginatedInvoices(start, end);

      this.setState({invoices: invoices, active_page: active_page})
    }

    getPaginatedInvoices(start, end) {
      
      const invoices = [];
      for(let i=start; i <= end; i++) {
        invoices.push(this.props.invoices[i]);
      }

      return invoices;
    }

    render() {
      const invoices = this.state.invoices.map(invoice => {
        return <InvoiceRow key={invoice.txid} invoice={invoice} />
      })

      return(
          <>
          <header className="page-header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="page-title">
                    <h3>Dashboard</h3>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="main-content">
            <div className="row gutters">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="mini-widget">								
                  <div className="mini-widget-body clearfix">
                    <img src={purse_img} className="icon" alt="Outstanding Payments" />
                    <div className="float-right number">
                      <NumberFormat value={this.state.invoices_unpaid_balance} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={this.props.currency_symbol} />
                    </div>
                    <h6>Outstanding Payments</h6>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="mini-widget red">								
                  <div className="mini-widget-body clearfix">
                    <img src={profits_img} className="icon" alt="Overdue Payments" />
                    <div className="float-right number">
                      <NumberFormat value={this.state.invoices_overdue_balance} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={this.props.currency_symbol} />
                      </div>
                    <h6>Overdue Payments</h6>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="mini-widget green">								
                  <div className="mini-widget-body clearfix">
                    <img src={profit_img} className="icon" alt="Recieved Payments" />
                    <div className="float-right number">
                      <NumberFormat value={this.state.invoices_paid_balance} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={this.props.currency_symbol} />
                    </div>
                    <h6>Recieved Payments</h6>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="card">
								<div className="card-header">Invoices</div>
								<div className="card-body">
									<div className="table-responsive">
										<table className="table m-0">
											<thead>
												<tr>
													<th>#TxID</th>
                          <th>Created</th>
													<th>Client</th>
													<th>Status</th>
                          <th>Total Value</th>
                          <th>Actions</th>
												</tr>
											</thead>
											<tbody>
												{invoices}
											</tbody>
										</table>
                    <Pagination
                      activePage={this.state.active_page}
                      itemsCountPerPage={10}
                      totalItemsCount={this.props.invoices.length}
                      pageRangeDisplayed={5}
                      onChange={this.handlePageChange}
                      itemClass='page-item'
                      linkClass='page-link'
                      activeClass='active'
                      activeLinkClass=''
                    />
                    <Link to="/invoice/new" className="btn btn-success margin-top-20">Create New Invoice</Link>
									</div>
								</div>
							</div>
              </div>
            </div>
          </div>
          </>
      );
    }
}

export default Invoices;