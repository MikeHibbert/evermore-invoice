import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import {profit_img, profits_img, purse_img} from '../../helpers';
import RecentActivity from './Recent';


class Dashboard extends Component {
    state = {
        invoices_paid_balance: 0,
        invoices_unpaid_balance: 0,
        invoices_overdue_balance: 0,
        number_of_invoices: 0
    }

    componentDidMount() {
        
    }

    render() {
        return(
            <>
            <header className="page-header">             <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="page-title">
                      <h3>&nbsp;</h3>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div className="main-content">
              <div className="row gutters">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="mini-widget">								
                    <div className="mini-widget-body clearfix">
                      <img src={purse_img} className="icon" alt="Account Balance" />
                      <div className="float-right number">
                        <NumberFormat 
                          value={this.state.invoices_unpaid_balance} 
                          decimalScale={2} 
                          fixedDecimalScale={true} 
                          displayType={'text'} 
                          thousandSeparator={true} 
                          prefix={this.props.currency_symbol} />
                      </div>
                      <h6>Outstanding Payments</h6>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="mini-widget red">
                    <div className="mini-widget-body clearfix">
                      <img src={profit_img} className="icon" alt="Overall Income" />
                      <div className="float-right number">
                        <NumberFormat 
                          value={this.state.invoices_overdue_balance} 
                          decimalScale={2} 
                          fixedDecimalScale={true} 
                          displayType={'text'} 
                          thousandSeparator={true} 
                          prefix={this.props.currency_symbol} />
                      </div>
                      <h6>Overdue Payments</h6>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="mini-widget green">
                    <div className="mini-widget-body clearfix">
                      <img src={profits_img} className="icon" alt="Rate of Return" />
                      <div className="float-right number">
                      <NumberFormat 
                          value={this.state.invoices_paid_balance} 
                          decimalScale={2} 
                          fixedDecimalScale={true} 
                          displayType={'text'} 
                          thousandSeparator={true} 
                          prefix={this.props.currency_symbol} />
                      </div>
                      <h6>Recieved Payments</h6>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="mini-widget grey">
                    <div className="mini-widget-body clearfix">
                      <span class="icon icon-file-text" style={{fontSize: "44px"}}></span>
                      <div className="float-right number">
                      <NumberFormat 
                          value={this.state.invoices_paid_balance} 
                          displayType={'text'} 
                          thousandSeparator={true}  />
                      </div>
                      <h6 style={{marginTop: "14px"}}>Number of Invoices</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row gutters">						
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="card">
                    <div className="card-header">Total Income Floating Trend</div>
                    <div className="toggle-switch tr">
                      <input type="checkbox" className="check" />
                      <b className="b switch"></b>
                      <b className="b track"></b>
                    </div>
                    <div className="card-body height2">
                      <div className="chartist custom-area-blue">
                        <div className="lineArea"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="card">
                    <div className="card-header">Weekly Income</div>
                    <div className="card-body height2">
                      <div className="chartist custom-one">
                        <div className="barHorizontal"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <RecentActivity {...this.props} />
              </div>
                          
      
              
            </div>
            </>
        );
    }
}

export default Dashboard;