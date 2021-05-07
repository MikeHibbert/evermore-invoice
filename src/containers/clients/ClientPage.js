import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ClientNew from './ClientNew';
import Clients from './Clients';


export default class ClientPage extends Component {

    state = {
      clients_paid_balance: 0,
      clients_unpaid_balance: 0,
      selected: null,
      selectedTxid: null,
    }

    constructor(props) {
        super(props);
    }

    PageSelector(value) {
        if(value == "clients") {
            this.setState({selected: 1});
        }
        if(value == "newclient") {
            this.setState({selected: 2});
        }
    }

    render() {
        
        const componentswitcher = () => {
            switch(this.state.selected) {
                case 1: return <Clients clients={this.props.clients} wallet_address={this.props.wallet_address} jwk={this.props.jwk} currency_symbol={this.props.currency_symbol}/>;
                case 2: return <ClientNew clients={this.props.clients} wallet_address={this.props.wallet_address} jwk={this.props.jwk} currency_symbol={this.props.currency_symbol}/>;

                default: return <Clients clients={this.props.clients} wallet_address={this.props.wallet_address} jwk={this.props.jwk} currency_symbol={this.props.currency_symbol}/>;
            }
        }

        return (
            <>  
                <header className="page-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="page-title">
                                    <button className="btn btn-primary" value="clients" style={{alignContent: "left", width: 150, marginRight: 10}} onClick={() => {this.PageSelector("clients")}}>Client List</button>
                                    <button className="btn btn-primary" value="newclient" style={{alignContent: "left", width: 150, marginRight: 10}} onClick={() => {this.PageSelector("newclient")}}>Create A Client</button>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="right-stats">
                                    <a className="btn btn-danger pull-left" style={{marginRight: "4px", alignContent: "right"}}>
                                        <span>{this.props.currency_symbol}{this.state.clients_unpaid_balance}</span> Unpaid
                                    </a>
                                    <a className="btn btn-success pull-left" style={{ alignContent: "right" }}>
                                        <span>{this.props.currency_symbol}{this.state.clients_paid_balance}</span> Paid
                                    </a>
                                </div>    
                            </div>
                        </div>
                    </div>
                </header>
                <div className="main-content">
                    { componentswitcher() }
                </div>
            </>
        );
    }
}