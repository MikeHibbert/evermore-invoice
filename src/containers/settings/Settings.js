import React, {Component} from 'react';

class Settings extends Component {
    state = {
        name: '',
        api_key: '',
        email_from: '',
        currency_type: 'Dollars',
        currency_symbol: '$',
        default_invoice_note: '',
        tax_code: '',
        tax_rate: 0.0
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
        const currency_type = localStorage.getItem('evermore-invoice-sendgrid-currency-type', null);
        const default_invoice_note = localStorage.getItem('evermore-invoice-default-invoice-note', null);
        const tax_code = localStorage.getItem('evermore-invoice-default-tax-code', null);
        const tax_rate = localStorage.getItem('evermore-invoice-default-tax-rate', null);

        const state = {};

        if(name) state['name'] = name;
        if(api_key) state['api_key'] = api_key;
        if(email_from) state['email_from'] = email_from;
        if(currency_type) state['currency_type'] = currency_type;
        if(currency_symbol) state['currency_symbol'] = currency_symbol;
        if(default_invoice_note) state['default_invoice_note'] = default_invoice_note;
        if(tax_code) state['tax_code'] = tax_code;
        if(tax_rate) state['tax_rate'] = tax_rate;


        this.setState(state);
    }

    OnSave() {
        localStorage.setItem('evermore-invoice-name', this.state.name);
        localStorage.setItem('evermore-invoice-sendgrid-api-key', this.state.api_key);
        localStorage.setItem('evermore-invoice-sendgrid-email-from', this.state.email_from);
        localStorage.setItem('evermore-invoice-sendgrid-currency-type', this.state.currency_type);
        localStorage.setItem('evermore-invoice-sendgrid-currency-symbol', this.state.currency_symbol);
        localStorage.setItem('evermore-invoice-sendgrid-tax-code', this.state.tax_code);
        localStorage.setItem('evermore-invoice-sendgrid-tax-rate', this.state.tax_rate);

        this.props.addSuccessAlert("You settings have been saved locally.");
    }

    OnExport() {
        const settings = JSON.stringify(this.state);

        console.log(settings);
    }

    OnImport() {
        const state = '';
        const settings = JSON.parse(state);

        this.setState(settings);

        this.OnSave();
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
            <header className="page-header">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="page-title">
                      <h3>&nbsp;</h3>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className="main-content" style={{minHeight: "320px"}}>
                <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row justify-content-center gutters">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                            <p><span className="icon-info2"></span> All settings are save locally in your browser and will <strong>NOT</strong> be stored in the blockchain. 
                                            Only Invoices and Client information are encrypted and stored, and only someone with your wallet credentials can access them.</p>
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
                                                            id="currency_type" name="currency_type" placeholder="Currency Type" 
                                                            value={this.state.currency_type} 
                                                            onChange={(e) => {this.OnChange(e)}}
                                                            />
                                                    </div>  
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" 
                                                            id="currency_symbol" name="currency_symbol" placeholder="Currency Symbol" 
                                                            value={this.state.currency_symbol} 
                                                            onChange={(e) => {this.OnChange(e)}}
                                                            />
                                                    </div>  
                                                                    
                                                </div>
                                                <div className="form-block-header">
                                                    <h5>Invoice Settings</h5>
                                                </div>
                                                <div className="form-block-body">
                                                    <div className="form-group">
                                                        <textarea type="text" className="form-control" 
                                                            id="currency_symbol" name="currency_symbol" placeholder="Default Invoice Note (things to remind your client about)" 
                                                            value={this.state.default_invoice_note} 
                                                            onChange={(e) => {this.OnChange(e)}}
                                                            ></textarea>
                                                    </div>  
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" 
                                                                id="tax_code" name="tax_code" placeholder="Tax Code/Number" 
                                                                value={this.state.tax_code} 
                                                                onChange={(e) => {this.OnChange(e)}}
                                                                />   
                                                        <label style={{marginTop: '5px'}}>Tax Rate</label>    
                                                        <input type="number" className="form-control" 
                                                                id="tax_rate" name="tax_rate" placeholder="Rate of tax (default 0.00%)" 
                                                                pattern="([0-9]{1,3}).([0-9]{1,3})"
                                                                step='0.01'
                                                                value={this.state.tax_rate} 
                                                                onChange={(e) => {this.OnChange(e)}}
                                                                />       
                                                    </div>
                                                </div>
                                                <div className="form-block-body">
                                                    <button type="button" id="submit" 
                                                            onClick={this.OnSave.bind(this)} name="submit" 
                                                            className="btn btn-primary ">Update settings</button>  
                                                             
                                                </div>

                                                <div className="form-block-header">
                                                    <h5>Options</h5>
                                                </div>
                                                <div className="form-block-body">
                                                    <button type="button" id="submit" 
                                                            onClick={this.OnExport.bind(this)} name="submit" 
                                                            className="btn btn-warning" style={{marginRight: '5px'}}>Export settings</button>  
                                                    <button type="button" id="submit" 
                                                            onClick={this.OnImport.bind(this)} name="submit" 
                                                            className="btn btn-success ">Import settings</button> 
                                                             
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