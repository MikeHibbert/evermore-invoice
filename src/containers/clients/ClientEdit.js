import React, { Component } from 'react';
import arweave from 'arweave';
import indexOf from 'index-of-x';
import { toast } from 'react-toastify';
import { isValid } from 'postcode';
import { validate } from 'react-email-validator';
import { updateEverClient } from './helpers';


export default class ClientEdit extends Component {
    state = {
        clients: [],
        name: "",
        contact_name: "",
        address: "",
        postcode: "",
        email: "",
        phone: "",
        website: ""
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.selectedClient()
    }

    selectedClient() {
        this.setState({ clients: this.props.clients })
        const web_sections = this.props.location.pathname.split("/")
        const txid = web_sections[4]
        const selected_client = indexOf(this.state.clients, txid, 0, 'SameValue')
        console.log(selected_client)
        this.setState(this.state.clients[selected_client]);
    }

    handleChange(e) {
        const value = e.target.value;
        const id = e.target.id;

        const state = {...this.state};

        state[id] = value;

        this.setState(state);
    }

    validatePhoneNumber() {
        if(this.state.phone.length < 5 || this.state.phone.length > 15) {
            return false;
        }
        return true;
    }

    validateNewClient() {
        if(this.state.name.length <= 0) {
            return false;
        }
        if(this.state.contact_name.length <= 0) {
            return false;
        }
        if(this.state.address.length <= 0) {
            return false;
        }
        if(isValid(this.state.postcode) == false) {
            return false;
        }
        if(validate(this.state.email) == false) {
            return false;
        }
        if(this.validatePhoneNumber() == false) {
            return false;
        }

        return true;
    }

    onSubmit(e) {
        e.preventDefault();
        
        if(this.validateNewClient() == true) {
            updateEverClient(this.state.name, this.state.contact_name, this.state.address, this.state.postcode, this.state.email, this.state.phone, this.state.website);
            this.props.history.push('/clients')
        } else {
            toast("Please Make Sure All Required Data Is Present Before Submission!", { type: toast.TYPE.ERROR });
        }
    }

    render() {
        return(
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

            <div className="main-content">
                <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">

                        <div className="card">
                            <div className="card-body">

                                <div className="row justify-content-center gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-10 col-sm-12">
                                        <form>
                                            <div className="form-block">
                                                <div className="form-block-header left">
                                                    <h5>Edit Client</h5>
                                                </div>
                                                <div className="form-block-body">

                                                    <div className="form-group row gutters">
                                                        <label htmlFor="inputName" className="col-sm-3 col-form-label text-right">Client Name</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" value={this.state.name} name="name" onChange={(e) => {this.handleChange(e)}} className="form-control" id="name" placeholder="Name" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row gutters">
                                                        <label htmlFor="inputSubject" className="col-sm-3 col-form-label text-right">Contact Name</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" value={this.state.contact_name} name="contact_name" onChange={(e) => {this.handleChange(e)}} className="form-control" id="contact_name" placeholder="Contact Name" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row gutters">
                                                        <label htmlFor="inputMessage" className="col-sm-3 col-form-label text-right">Address</label>
                                                        <div className="col-sm-9">
                                                            <textarea className="form-control" name="address" value={this.state.address} onChange={(e) => {this.handleChange(e)}} id="address" placeholder="Address" rows="4"></textarea>

                                                        </div>
                                                    </div>

                                                    <div className="form-group row gutters">
                                                        <label htmlFor="postcode" className="col-sm-3 col-form-label text-right">Postcode/Zipcode</label>
                                                        <div className="col-sm-9">
                                                            <input type="postcode" value={this.state.website} onChange={(e) => {this.handleChange(e)}} name="postcode" className="form-control" id="postcode" placeholder="Mobile" />
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="form-group row gutters">
                                                        <label htmlFor="inputEmail" className="col-sm-3 col-form-label text-right">E-mail</label>
                                                        <div className="col-sm-9">
                                                            <input type="email" value={this.state.email} name="email" onChange={(e) => {this.handleChange(e)}} className="form-control" id="email" placeholder="Email" />
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="form-group row gutters">
                                                        <label htmlFor="phone" className="col-sm-3 col-form-label text-right">Phone</label>
                                                        <div className="col-sm-9">
                                                            <input type="phone" value={this.state.phone} onChange={(e) => {this.handleChange(e)}} name="phone" className="form-control" id="phone" placeholder="Phone" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row gutters">
                                                        <label htmlFor="website" className="col-sm-3 col-form-label text-right">Website</label>
                                                        <div className="col-sm-9">
                                                            <input type="website" value={this.state.website} onChange={(e) => {this.handleChange(e)}} name="website" className="form-control" id="website" placeholder="Mobile" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row gutters">
                                                        <label className="col-sm-3 col-form-label"></label>
                                                        <div className="col-sm-9">
                                                            <button type="button" id="submit" onClick={(e) => {this.onSubmit(e)}} name="submit" className="btn btn-primary pull-right">Update Client</button>
                                                        </div>
                                                    </div>
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