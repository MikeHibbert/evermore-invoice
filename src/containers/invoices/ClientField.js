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

    OnSetCompany(e) {
        this.setState({ selectedClient: e.target.value })
        this.props.onSelectClient(e.target.value)
    }
    
    render() {
        return (
            <div className="form-group">
                <h5>Client: </h5>
                <select className="form-control" value={this.state.selectedClient} onChange={(e) => { this.OnSetCompany(e) }}>
                    {this.props.clients.map(clients => {
                        return <option key={clients.txid} value={clients.txid}>{clients.name}</option>
                    })}
                </select>
            </div>
        );
    }
}