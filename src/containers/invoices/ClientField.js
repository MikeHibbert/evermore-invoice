import React, { Component } from 'react';
import { toast } from 'react-toastify';

export default class ClientField extends Component {
    state = {
        selectedClient: "",
        clients: [],
    }
    
    componentDidMount() {
        this.setState({selectedClient:this.props.clients[0].txid})
    }

    onChange(event) {
        const name = event.target.name;
        const newValue = {};

        newValue[name] = event.target.value;

        this.setState(newValue);
    }

    validateClientField() {
        if(this.state.selectedClient.length < 0 )    {
            toast("Please select your client", { type: toast.TYPE.ERROR }); 
    
            return false;
        }

        return true;
    }

    OnSetCompany(e) {
        this.setState({ selectedCompany: e.target.value })
        this.props.onSelectClient(e.target.value)
    }
    
    onSubmit(event) {
        event.preventDefault();

        if(this.validateClientField() == true) {
            
            this.props.history.push('/invoices')
        }         
    }
    
    render() {
        return (
            <div className="form-group">
                Client:
                <select className="form-control" value={this.state.selectedCompany} onChange={(e) => { this.OnSetCompany(e) }} value={this.state.selectedCompany}>
                    {this.props.clients.map(clients => {
                        return <option key={clients.txid} value={clients.txid}>{clients.name}</option>
                    })}
                </select>
            </div>
        );
    }
}