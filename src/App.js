import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import arweave from './arweave-config';
import { Link } from 'react-router-dom';
import UserMenu from './components/UI/nav/UserMenu';
import MainNav from './components/UI/nav/MainNav';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Dashboard from './containers/dashboard/Dashboard';
import Invoices from './containers/invoices/Invoices';
import InvoiceEdit from './containers/invoices/InvoiceEdit';
import InvoiceNew from './containers/invoices/InvoiceNew';
import Clients from './containers/clients/Clients';
import ClientEdit from './containers/clients/ClientEdit';
import Settings from './containers/settings/Settings';
import Reports from './containers/reports/Reports';
import { getClients, getFaqs, getInvoices } from './helpers';
import ClientNew from './containers/clients/ClientNew';
import Faqs from './containers/faq/Faqs Page';


class App extends Component {
  state = {
    isAuthenticated: null,
    balance: 0,
    currency_symbol: '$',
    loading: "",
    clients: [],
    invoices: [],
    faqs: []
  }

  constructor(props) {
    super(props);

    this.toggleContent.bind(this);
    this.explandContentArea.bind(this);
    this.addErrorAlert.bind(this);
    this.addSuccessAlert.bind(this);
  }

  componentDidMount() {
    const wallet_address = sessionStorage.getItem('AR_Wallet', null);
    const jwk = JSON.parse(sessionStorage.getItem('AR_jwk', null));  
    
    if(jwk !== null) {
      this.setState({isAuthenticated: true, wallet_address: wallet_address, jwk: jwk});
      this.loadWallet(wallet_address);
    }

    const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true' ? true : false;

    this.setState({isAuthenticated: isAuthenticated });

    const currency_symbol = localStorage.getItem('evermore-invoice-currency-symbol', null);

    if(currency_symbol) {
      this.setState({currency_symbol: currency_symbol});
    }

    if(isAuthenticated) {
      this.getUserData();
    }
    
    setInterval(() => {
      const transactions = JSON.parse(localStorage.getItem('evoice_clients'))
      const none_confirmed = [];
      if(transactions) {
        for(let i in transactions) {
          const transaction = transactions[i];
          arweave.transactions.getStatus(transaction.id).then(response => {
            if(response.hasOwnProperty('confirmed') && response.status === 200) {
              if(response.confirmed.number_of_confirmations > 4) {
                this.addSuccessAlert(`${transaction.name} has successfully mined!`)
              } else {
                none_confirmed.push(transaction);
              }
            } else {
              none_confirmed.push(transaction);
            }
          })
        }

        localStorage.setItem('evoice_clients', JSON.stringify(none_confirmed))
      }
    }, 5 * 60 * 1000)
  }

  componentDidUpdate(prevProps) {
    if(this.props.isAuthenticated !== undefined && this.props.isAuthenticated !== prevProps.isAuthenticated) {
      this.setState({isAuthenticated: this.props.isAuthenticated});

      if(this.props.isAuthenticated && !this.props.expand_content_area) {
        this.setState({contentStyle: {marginLeft: '0px'}});
      }
    }
  }

  getUserData() {
    const that = this;
    const clients = getClients(this.state.wallet_address).then((clients) => {
      that.setState({clients: clients});
      
      const invoices = getInvoices(this.state.wallet_address, clients).then((invoices) => {
        that.setState({invoices: invoices});
  
        this.setLoaded();
      });
    });
    const faqs = getFaqs(this.state.wallet_address).then(() => {
      that.setState({faqs: faqs});
    })    
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

  setLoading() {
    this.setState({loading:""});
  }

  setLoaded() {
    this.setState({loading:"loaded"});
  }

  render() {

    let header = null;

    let routes = [
      <Route key='dashboard' path="/" exact component={() => <Dashboard 
        currency_symbol={this.state.currency_symbol} 
        wallet_address={this.state.wallet_address} 
        jwk={this.state.jwk} 
      />} />,
      <Route key='invoices' path="/invoices" exact component={() => <Invoices 
        currency_symbol={this.state.currency_symbol}
        wallet_address={this.state.wallet_address} 
        invoices={this.state.invoices}
        clients={this.state.clients}
        jwk={this.state.jwk} 
      />} />,
      <Route key='invoice-new' path="/invoice/new" exact render={props => <InvoiceNew

        {...props}
        currency_symbol={this.state.currency_symbol}
        wallet_address={this.state.wallet_address} 
        invoices={this.state.invoices}
        clients={this.state.clients}
        jwk={this.state.jwk} 
      />} />,
      <Route key='invoice-edit' path="/invoice/edit/:txid" exact render={props => <InvoiceEdit 
        {...props}
        currency_symbol={this.state.currency_symbol}
        wallet_address={this.state.wallet_address} 
        invoices={this.state.invoices}
        clients={this.state.clients}
        jwk={this.state.jwk} 
      />} />,
      <Route key='clients' path="/clients" exact component={() => <Clients 
        clients={this.state.clients}
        wallet_address={this.state.wallet_address} 
        jwk={this.state.jwk} 
        currency_symbol={this.state.currency_symbol}
      />} />,
      <Route key='client-new' exact path="/client/new" exact render={props => <ClientNew
        {...props}
        clients={this.state.clients}
        wallet_address={this.state.wallet_address} 
        
        jwk={this.state.jwk} 
        currency_symbol={this.state.currency_symbol}
      />} />,
      <Route key='client-edit' exact path="/client/edit/:txid" exact render={props => <ClientEdit 
        {...props}
        clients={this.state.clients}
        wallet_address={this.state.wallet_address} 
        
        jwk={this.state.jwk} 
        currency_symbol={this.state.currency_symbol}
      />} />,
      <Route key='reports' path="/reports" exact component={() => <Reports 
        wallet_address={this.state.wallet_address} 
        jwk={this.state.jwk} 
        currency_symbol={this.state.currency_symbol}
      />} />,
      <Route key='settings' path="/settings" exact component={() => <Settings wallet_address={this.state.wallet_address} jwk={this.state.jwk} 
                                                                        addSuccessAlert={this.addSuccessAlert} />} />,
      <Route key='faq' path="/faq" exact component={() => <Faqs
        faqs={this.state.faqs}
      />} />,
      <Route key='logout' path="/logout" exact component={() => <Logout onLogout={this.disconnectWallet.bind(this)} addSuccessAlert={this.addSuccessAlert}
                                                                     explandContentArea={() => this.explandContentArea} />} />
    ];

    if(!this.state.isAuthenticated) {
      routes = [
        <Route key='login' path="/login" exact component={() => <Login 
              explandContentArea={() => this.explandContentArea} 
              setWalletAddress={this.setWalletAddress.bind(this)} 
              />} />,
      ];
      if(this.props.location !== '/login') routes.push(<Redirect key='redirect-to-login' to='/login' />);
      header = null;
      if(this.state.loading === '') {
        this.setLoaded();
      }
      
    }

    if(this.state.isAuthenticated && this.props.location.pathname === '/login') {
      routes = (
        <>
        <Redirect to='/' />
        </>
      );
    }

    let mainnav = null;
    let footer = null;

    const year = new Date().getFullYear();

    if(this.state.isAuthenticated) {
      mainnav = <MainNav location={this.props.location}/>;

      header = (
        <header className="app-header">
            <div className="container-fluid">

              <div className="row gutters">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                  
                  <div className="logo-block">
                    <Link to='/' className="logo">
                      <img src="img/logo.png" alt="Evermore Invoice" />
                    </Link>
                  </div>

                </div>
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                    <UserMenu 
                      username={"Mike Hibbert (needs linking properly)"}
                      wallet_address={this.state.wallet_address} 
                      history={this.props.history} 
                      current_balance={this.state.balance}
                      isAuthenticated={this.state.isAuthenticated}
                      />
                </div>
              </div>


            </div>
          </header>
      );

    footer = (<footer className="main-footer">© Evermore Invoice {year}</footer>);
    }
    
    return (
      

      <div className="App">
        <ToastContainer />
        <div id="loading-wrapper" className={this.state.loading}>
          <div id="loader"></div>
        </div>
          
        <div className="app-wrap">

          
          {header}

          <div className="app-container">
            {mainnav}
            
            {routes}
            

            {footer}


          </div>


        </div>

      </div>
    );
  }
}

export default withRouter(App);