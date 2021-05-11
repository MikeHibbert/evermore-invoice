import React, {Component} from 'react';
import arweave from '../../arweave-config';
import {saveLogo, getLogos, successMessage, errorMessage} from '../../helpers';
import { magicDownload } from './helpers';

class Settings extends Component {
    state = {
        name: '',
        address: '',
        api_key: '',
        email_from: '',
        currency_type: 'Dollars',
        currency_symbol: '$',
        date_format: 'DD/MM/YYYY',
        invoice_note: '',
        tax_code: '',
        tax_rate: 0.0,
        logo: null
    }

    constructor(props) {
        super(props);
        this.OnChange.bind(this);
        this.onImageChange.bind(this);
    }

    componentDidMount() {
        const name = localStorage.getItem('evermore-invoice-name', null);
        const address = localStorage.getItem('evermore-invoice-address', null);
        const api_key = localStorage.getItem('evermore-invoice-sendgrid-api-key', null);
        const email_from = localStorage.getItem('evermore-invoice-sendgrid-email-from', null);
        const currency_symbol = localStorage.getItem('evermore-invoice-currency-symbol', null);
        const currency_type = localStorage.getItem('evermore-invoice-currency-type', null);
        const date_format = localStorage.getItem('evermore-invoice-date-format', null);
        const invoice_note = localStorage.getItem('evermore-invoice-invoice-note', null);
        const tax_code = localStorage.getItem('evermore-invoice-tax-code', null);
        const tax_rate = localStorage.getItem('evermore-invoice-tax-rate', null);
        

        const state = {};

        if(name) state['name'] = name;
        if(address) state['address'] = address;
        if(api_key) state['api_key'] = api_key;
        if(email_from) state['email_from'] = email_from;
        if(currency_type) state['currency_type'] = currency_type;
        if(currency_symbol) state['currency_symbol'] = currency_symbol;
        if(date_format) state['date_format'] = date_format;
        if(invoice_note) state['invoice_note'] = invoice_note;
        if(tax_code) state['tax_code'] = tax_code;
        if(tax_rate) state['tax_rate'] = tax_rate;


        this.setState(state);

        const that = this;

        getLogos().then(logos => {
            const logo = logos.find((a, b) => {return a.created > b.created});
            that.setState({logo: logos[0]});
        });

        
    }

    OnSave() {
        localStorage.setItem('evermore-invoice-name', this.state.name);
        localStorage.setItem('evermore-invoice-address', this.state.address);
        localStorage.setItem('evermore-invoice-sendgrid-api-key', this.state.api_key);
        localStorage.setItem('evermore-invoice-sendgrid-email-from', this.state.email_from);
        localStorage.setItem('evermore-invoice-currency-type', this.state.currency_type);
        localStorage.setItem('evermore-invoice-currency-symbol', this.state.currency_symbol);
        localStorage.setItem('evermore-invoice-date-format', this.state.date_format);
        localStorage.setItem('evermore-invoice-tax-code', this.state.tax_code);
        localStorage.setItem('evermore-invoice-tax-rate', this.state.tax_rate);
        localStorage.setItem('evermore-invoice-invoice-note', this.state.invoice_note);

        this.props.addSuccessAlert("You settings have been saved locally.");
    }

    OnExport() {
        const settings = JSON.stringify(this.state);
        magicDownload(settings, "EverVoice_UserSettings.json", "application/json")
        console.log(settings);
    }

    OnImport(e) {
        e.preventDefault();
        const that = this;

        const reader = new FileReader();
        reader.onload = function() {
            //const text = reader.result
            const settings = JSON.parse(reader.result);
            
            console.log(settings)        
            that.setState(settings);
            that.OnSave();
        };

        reader.readAsText(e.target.files[0]);
        
    }

    OnChange(event) {
        const value = event.target.value;

        const state = {...this.state};

        state[event.target.name] = value;

        this.setState(state);
    }

    onImageChange(event) {
        if(window.confirm("Are you sure you want to save this file permanetly to the blockchain?")) {
            const logo_image_file = event.target.files;

            const that = this;

            const reader = new FileReader();
            reader.onload = function() {
                const text = reader.result;

                saveLogo(text);                
            }
            reader.readAsDataURL(logo_image_file[0]);
        }
    }

    render() {
        let logo_img = (
            <div className="media comments">
                <div className="mr-3">
                    <a>
                        <span className="empty-avatar bg-success">LOGO</span>
                    </a>
                </div>
            </div>);

        let logo_img_name = 'Current Logo (none selected).';

        if(this.state.logo) {
            const image_url = this.state.logo.image;
            const transaction_url = `https://arweave.net/${this.state.logo.txid}`;
            logo_img = <a href={transaction_url} target="_blank"><img width="200px" src={image_url} style={{marginBottom: "10px"}}/></a>;
            logo_img_name = '';
        }

        

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
                                            <div className="form-block margin-bottom-20">
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
                                                    <div className="form-group">
                                                        <textarea type="text" className="form-control" 
                                                            id="address" name="address" placeholder="Address Details" 
                                                            value={this.state.address} 
                                                            onChange={(e) => {this.OnChange(e)}}
                                                            ></textarea>
                                                    </div>  
                                                </div>
                                            </div>
                                            <div className="form-block margin-bottom-20">
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
                                            </div>
                                            <div className="form-block margin-bottom-20">
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
                                                    <div className="form-group">
                                                        <label>Date format</label>
                                                        <select 
                                                            value={this.state.date_format} 
                                                            name="date_format"
                                                            onChange={(e) => {this.OnChange(e)}} 
                                                            className="form-control">
                                                            <option value="MM/DD/YYYY" >mm/dd/yyyy</option>
                                                            <option value="DD/MM/YYYY" >dd/mm/yyyy</option>
                                                        </select>
                                                    </div>  
                                                    

                                                                    
                                                </div>
                                            </div>
                                            <div className="form-block margin-bottom-20">
                                                <div className="form-block-header">
                                                    <h5>Invoice Settings</h5>
                                                </div>
                                                <div className="form-block-body">
                                                    <div className="form-group">
                                                        <textarea type="text" className="form-control" 
                                                            id="invoice_note" name="invoice_note" placeholder="Default Invoice Note (things to remind your client about)" 
                                                            value={this.state.invoice_note} 
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
                                            </div>
                                            <div className="form-block margin-bottom-20">
                                                <div className="form-block-header">
                                                    <h5>Company Logo</h5>
                                                    <h6>Select a logo to be uploaded to the blockchain that will be included in all your invoices.</h6>
                                                </div>
                                                <div className="form-block-body">
                                                    <div>
                                                        {logo_img}
                                                        <label className="margin-bottom-20" >{logo_img_name}</label>
                                                    </div>
                                                    <div className="custom-file">
                                                        <input type="file" name="keyfile" className="custom-file-input" onChange={(e) => this.onImageChange(e)} />
                                                        <label className="custom-file-label custom-file-label-primary" htmlFor="customFile2">Choose an image to upload</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-block margin-bottom-20">
                                                <div className="form-block-header">
                                                    <h5>Options</h5>
                                                </div>
                                                <div className="form-block-body">
                                                    <button type="button" id="submit" 
                                                            onClick={this.OnSave.bind(this)} name="submit" 
                                                            className="btn btn-primary ">Update settings</button>

                                                    <div className="custom-file" style={{ width: "200px", float: "right", height: "36px" }}>
                                                        <input type="file" onChange={(e) => {this.OnImport(e)}} name="keyfile" className="custom-file-input"/>
                                                        <label className="custom-file-label custom-file-label-primary">Insert Settings File</label>
                                                    </div>
                                                    <button type="button" id="submit" 
                                                            style={{float: "right", marginRight: '5px'}}
                                                            onClick={this.OnExport.bind(this)} name="submit" 
                                                            className="btn btn-warning" >Export settings</button>  
                                                    
                                                             
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