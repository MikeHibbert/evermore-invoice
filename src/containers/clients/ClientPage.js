import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ClientEdit from './ClientEdit';
import ClientNew from './ClientNew';
import ClientOriginList from './ClientOriginList';
import Clients from './Clients';


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

export default class ClientPage extends Component {

    state = {
      clients_paid_balance: 0,
      clients_unpaid_balance: 0,
      showclients: true,
      shownewclient: false,
      showeditclient: false,
      showclientoriginlist: false,
      selectedTxid: null,
    }

    constructor(props) {
        super(props)
    }

    PageSelector(value) {
        if(value == "clients") {
            this.setState({ showclients: true })
        } else {
            this.setState({ showclients: false})
        }
        if(value == "newclient") {
            this.setState({ shownewclient: true })
        } else {
            this.setState({ shownewclient: false})
        }
        if(value == "editclient") {
            this.setState({ showeditclient: true })
        } else {
            this.setState({ showeditclient: false})
        }
        if(value == "clientoriginlist") {
            this.setState({ showclientoriginlist: true })
        } else {
            this.setState({ showclientoriginlist: false})
        }
    }

    render() {
        const clientstyle = this.state.showclients ? customStyles: {};
        const newclientstyle = this.state.shownewclient ? customStyles: {};
        const editclientstyle = this.state.showeditclient ? customStyles: {};
        const clientoriginliststyle = this.state.showclientoriginlist ? customStyles: {};

        return (
            <>
                <header className="page-header">
                    <div className="container-fluid">
                    <button className="btn btn-primary pull-right" value="clients" style={{alignContent: "left", width: 150, marginBottom: 10, marginTop: 10}} onClick={() => {this.PageSelector("clients")}}>Client List</button>
                    <button className="btn btn-primary pull-right" value="newclient" style={{alignContent: "left", width: 150, marginBottom: 10, marginTop: 10}} onClick={() => {this.PageSelector("newclient")}}>Create A Client</button>
                    
                    <a className="btn btn-danger pull-left" style={{marginRight: "4px", alignContent: "right"}}>
                        <span>{this.props.currency_symbol}{this.state.clients_unpaid_balance}</span> Unpaid
                    </a>
                    <a className="btn btn-success" style={{ alignContent: "right" }}>
                        <span>{this.props.currency_symbol}{this.state.clients_paid_balance}</span> Paid
                    </a>
                    </div>
                </header>
                <div>
                    <Clients style={clientstyle} clients={this.props.clients} wallet_address={this.props.wallet_address} jwk={this.props.jwk} currency_symbol={this.props.currency_symbol}/>
                    <ClientNew style={newclientstyle} clients={this.props.clients} wallet_address={this.props.wallet_address} jwk={this.props.jwk} currency_symbol={this.props.currency_symbol}/>
                    <ClientEdit style={editclientstyle} selectedTxid={this.state.selectedTxid} clients={this.props.clients} wallet_address={this.props.wallet_address} jwk={this.props.jwk} currency_symbol={this.props.currency_symbol}/>
                    
                </div>
            </>
        );
    }
}