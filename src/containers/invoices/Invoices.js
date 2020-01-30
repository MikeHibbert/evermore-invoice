import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Invoices extends Component {
    state = {
        invoices_paid_balance: 0,
        invoices_unpaid_balance: 0,
        number_of_invoices: 0
    }

    componentDidMount() {
        
    }

    render() {
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
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="mini-widget">								
                    <div className="mini-widget-body clearfix">
                      <img src="img/svg/purse.svg" className="icon" alt="Account Balance" />
                      <div className="float-right number">945k</div>
                      <h6>Account Balance</h6>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="mini-widget">
                    <div className="mini-widget-body clearfix">
                      <img src="img/svg/profit.svg" className="icon" alt="Overall Income" />
                      <div className="float-right number">790k</div>
                      <h6>Overall Income</h6>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="mini-widget red">
                    <div className="mini-widget-body clearfix">
                      <img src="img/svg/profits.svg" className="icon" alt="Rate of Return" />
                      <div className="float-right number">85%</div>
                      <h6>Rate of Return</h6>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="mini-widget grey">
                    <div className="mini-widget-body clearfix">
                      <img src="img/svg/lock.svg" className="icon" alt="Number of Trades" />
                      <div className="float-right number">185</div>
                      <h6>Number of Trades</h6>
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
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="card">
                    <div className="card-header">Expert Advice</div>
                    <div className="card-body height2">
                      <div className="chartist custom-one">
                        <div className="booking-source-donut"></div>
                      </div>
                      <div className="badge-group-chartist-shades text-center">
                        <span className="badge">Buy</span>
                        <span className="badge one">Keep</span>
                        <span className="badge two">Sell</span>
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