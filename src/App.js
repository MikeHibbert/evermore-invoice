import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import arweave from './arweave-config';
import UserMenu from './components/UI/nav/UserMenu';
import MainNav from './components/UI/nav/MainNav';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    isAuthenticated: null,
    balance: 0
  }

  constructor(props) {
    super(props);

    this.toggleContent.bind(this);
    this.explandContentArea.bind(this);
    this.addErrorAlert.bind(this);
    this.addSuccessAlert.bind(this);
  }

  toggleContent() {
    if(this.state.contentToggled) {
      this.setState({contentToggled: false, contentStyle: null});
    } else {
      this.setState({contentToggled: true, contentStyle: {marginLeft: '0px'}});
    }
  }

  explandContentArea() {
    this.setState({contentToggled: true, contentStyle: {marginLeft: '0px'}});
  }

  loadWallet(wallet_address) {
    const that = this;

    if(wallet_address) {
        arweave.wallets.getBalance(wallet_address).then((balance) => {
            let ar = arweave.ar.winstonToAr(balance);

            const state = {balance: ar};

            that.setState(state);
        });   
    }     
  }

  setWalletAddress(wallet_address_files) {
      const that = this;

      const reader = new FileReader();
      reader.onload = function() {
          const text = reader.result;
          const jwk = JSON.parse(text);

          arweave.wallets.jwkToAddress(jwk).then((wallet_address) => {                
              that.setState({wallet_address: wallet_address, jwk: jwk});
              sessionStorage.setItem('AR_Wallet', wallet_address);
              sessionStorage.setItem('AR_jwk', JSON.stringify(jwk));
          
              that.loadWallet(wallet_address);

              that.setState({isAuthenticated: true});
              sessionStorage.setItem('isAuthenticated', true);

              that.addSuccessAlert("You have successfully connected.");
          });
          
      }
      reader.readAsText(wallet_address_files[0]);

  }

  disconnectWallet() {
    sessionStorage.removeItem('AR_Wallet');
    sessionStorage.removeItem('AR_jwk');
    sessionStorage.removeItem('isAuthenticated');
    sessionStorage.removeItem('exchange');
    sessionStorage.removeItem('coinpair');

    this.setState({isAuthenticated: false, wallet_address: null, jwk: null, balance: 0});

    this.addSuccessAlert("Your wallet is now disconnected");
}

  addSuccessAlert(message)  {
    toast(message, { type: toast.TYPE.SUCCESS });     
  }

  addErrorAlert(message) {
    toast(message, { type: toast.TYPE.ERROR });  
  }

  render() {

    let routes = [
      <Route key='home' path="/" exact component={() => <HomePage wallet_address={this.state.wallet_address} jwk={this.state.jwk} />} />,
      <Route key='charts' path="/charts" exact component={() => <ChartingPage 
                                                                    addErrorAlert={this.addErrorAlert} 
                                                                    addSuccessAlert={this.addSuccessAlert} 
                                                                    wallet_address={this.state.wallet_address} 
                                                                    {...this.props}
                                                                    jwk={this.state.jwk} />} />,
      <Route key='search' path="/search" exact component={() => <SearchPage wallet_address={this.state.wallet_address} jwk={this.state.jwk} />} />,
      <Route key='logout' path="/logout" exact component={() => <Logout onLogout={this.disconnectWallet.bind(this)} addSuccessAlert={this.addSuccessAlert} explandContentArea={() => this.explandContentArea} />} />
    ];

    if(!this.state.isAuthenticated) {
      routes = [
        <Route key='login' path="/login" exact component={() => <Login explandContentArea={() => this.explandContentArea} setWalletAddress={this.setWalletAddress.bind(this)} />} />,
      ];
      if(this.props.location !== '/login') routes.push(<Redirect key='redirect-to-login' to='/login' />);
      header = null;
    }
    
    return (
      <div className="App">
        <ToastContainer />
        <div id="loading-wrapper" style={{display: 'none'}}>
          <div id="loader"></div>
        </div>
          
        <div className="app-wrap">

          <header className="app-header">
            <div className="container-fluid">

              <div className="row gutters">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                  
                  <div className="logo-block">
                    <a href="index.html" className="logo">
                      <img src="img/logo.png" alt="Bluemoon Admin Dashboard" />
                    </a>
                  </div>

                </div>
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                    <UserMenu username={"Mike Hibbert (needs linking properly)"}/>
                </div>
              </div>


            </div>
          </header>


          <div className="app-container">
            <MainNav />
            

            <header className="page-header">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="page-title">
                      <h3>Trading Dashboard</h3>
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

            <footer className="main-footer">© Bluemoon 2013 - 2018</footer>


          </div>


        </div>

      </div>
    );
  }
}

export default withRouter(App);