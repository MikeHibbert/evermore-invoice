import React, {Component} from 'react';

class Settings extends Component {
    state = {
        name: '',
        api_key: '',
        email_from: '',
        currency_symbol: '$'
    }

    constructor(props) {
        super(props);
        this.OnChange.bind(this);
    }

    componentDidMount() {
        const name = localStorage.getItem('evermore-invoice-name', null);
        const api_key = localStorage.getItem('evermore-invoice-sendgrid-api-key', null);
        const email_from = localStorage.getItem('evermore-invoice-sendgrid-email-from', null);
        const currency_symbol = localStorage.getItem('evermore-invoice-sendgrid-currency-symbol', null);

        const state = {};

        if(name) state['name'] = name;
        if(api_key) state['api_key'] = api_key;
        if(email_from) state['email_from'] = email_from;
        if(currency_symbol) state['currency_symbol'] = currency_symbol;

        this.setState(state);
    }

    OnSave() {
        localStorage.setItem('evermore-invoice-name', this.state.name);
        localStorage.setItem('evermore-invoice-sendgrid-api-key', this.state.api_key);
        localStorage.setItem('evermore-invoice-sendgrid-email-from', this.state.email_from);
        localStorage.setItem('evermore-invoice-sendgrid-currency-symbol', this.state.currency_symbol);

        this.props.addSuccessAlert("You settings have been saved locally.");
    }

    OnChange(event) {
        const value = event.target.value;

        const state = {...this.state};

        state[event.target.name] = value;

        this.setState(state);
    }

    render() {
        return (
            <>
            <div className="main-content" style={{minHeight: "320px"}}>
                <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row justify-content-center gutters">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <form>
                                            <div className="form-block">
                                                <div className="form-block-header">
                                                    <h5>About You</h5>
                                                </div>
                                                <div className="form-block-body">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" 
                                                            id="name" name="name" placeholder="First & Last Name" 
                                                            required="" value={this.state.name} 
                                                            onChange={(e) => {this.OnChange(e)}}
                                                            />
                                                    </div>
                                                </div>
                                                <div className="form-block-header">
                                                    <h5>Sendgrid</h5>
                                                    <h6>Email your invoices to clients using Sendgrid</h6>
                                                </div>
                                                <div className="form-block-body">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" 
                                                            id="api_key" name="api_key" placeholder="API key" required="" value={this.state.api_key} 
                                                            onChange={(e) => {this.OnChange(e)}}
                                                            />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" 
                                                            id="email_from" name="email_from" placeholder="Email Address to send from" 
                                                            required="" value={this.state.email_from} 
                                                            onChange={(e) => {this.OnChange(e)}}
                                                            />
                                                    </div>
                                                </div>
                                                <div className="form-block-header">
                                                    <h5>Regional Settings</h5>
                                                    <h6>Choose your currency symbol</h6>
                                                </div>
                                                <div className="form-block-body">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" 
                                                            id="currency_symbol" name="currency_symbol" placeholder="API key" 
                                                            value={this.state.currency_symbol} 
                                                            onChange={(e) => {this.OnChange(e)}}
                                                            />
                                                    </div>  
                                                    <button type="button" id="submit" 
                                                        onClick={this.OnSave.bind(this)} name="submit" 
                                                        className="btn btn-primary pull-right">Update settings</button>                   
                                                </div>
                                                
                                            </div>
                                        </form>
                                    </div>
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

export default Settings;