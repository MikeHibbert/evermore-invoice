import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ClientEdit from './ClientEdit';
import ClientNew from './ClientNew';
import ClientOriginList from './ClientOriginList';
import Clients from './Clients';
import { PageSelector } from './helpers';


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

    Page(value) {
        return <PageSelector value={value}/>
    }

    render() {
        
        const componentswitcher = () => {
            switch (this.state.selected) {
                case 1: return <Clients clients={this.props.clients} wallet_address={this.props.wallet_address} jwk={this.props.jwk} currency_symbol={this.props.currency_symbol}/>;
                case 2: return <ClientNew clients={this.props.clients} wallet_address={this.props.wallet_address} jwk={this.props.jwk} currency_symbol={this.props.currency_symbol}/>;
                case 3: return <ClientEdit selectedTxid={this.state.selectedTxid} clients={this.props.clients} wallet_address={this.props.wallet_address} jwk={this.props.jwk} currency_symbol={this.props.currency_symbol}/>;
                case 4: return <ClientOriginList selectedTxid={this.state.selectedTxid} wallet_address={this.props.wallet_address} jwk={this.props.jwk} currency_symbol={this.props.currency_symbol}/>;

                default: return <Clients clients={this.props.clients} wallet_address={this.props.wallet_address} jwk={this.props.jwk} currency_symbol={this.props.currency_symbol}/>;
            }
        }

        return (
            <>
                <header className="page-header">
                    <div className="container-fluid">
                        <button className="btn btn-primary" value="clients" style={{alignContent: "left", width: 150, marginBottom: 10, marginTop: 10, marginRight: 10}} onClick={() => {this.Page("clients")}}>Client List</button>
                        <button className="btn btn-primary" value="newclient" style={{alignContent: "left", width: 150, marginBottom: 10, marginTop: 10, marginRight: 10}} onClick={() => {this.Page("newclient")}}>Create A Client</button>
                        
                        <a className="btn btn-danger pull-left" style={{marginRight: "4px", alignContent: "right"}}>
                            <span>{this.props.currency_symbol}{this.state.clients_unpaid_balance}</span> Unpaid
                        </a>
                        <a className="btn btn-success pull-left" style={{ alignContent: "right" }}>
                            <span>{this.props.currency_symbol}{this.state.clients_paid_balance}</span> Paid
                        </a>
                    </div>
                </header>
                <div className="main-content">
                    { componentswitcher() }
                </div>
            </>
        );
    }
}