import React, { useState } from 'react';
import {useForm} from '../../components/UI/forms/userForm';
import Client from './Client';
import { saveNewClient, createBlankClient } from '../../helpers';


function ClientNew(props) {
    const [client, handleChange] = useForm(createBlankClient());

    const saveClient = function(e) {
        e.preventDefault();
        saveNewClient(client);       
    }

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
                                                <h5>Create New Client</h5>
                                            </div>
                                            <div className="form-block-body">

                                                <div className="form-group row gutters">
                                                    <label htmlFor="inputName" className="col-sm-3 col-form-label text-right">Client Name</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" value={client.name} name="name" onChange={handleChange} className="form-control" id="name" placeholder="Name" />
                                                    </div>
                                                </div>

                                                <div className="form-group row gutters">
                                                    <label htmlFor="inputSubject" className="col-sm-3 col-form-label text-right">Contact Name</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" value={client.contact_name} name="contact_name" onChange={handleChange} className="form-control" id="contact_name" placeholder="Contact Name" />
                                                    </div>
                                                </div>

                                                <div className="form-group row gutters">
                                                    <label htmlFor="inputMessage" className="col-sm-3 col-form-label text-right">Address</label>
                                                    <div className="col-sm-9">
                                                        <textarea className="form-control" name="address" value={client.address} onChange={handleChange} id="address" placeholder="Address" rows="4"></textarea>

                                                    </div>
                                                </div>

                                                <div className="form-group row gutters">
                                                    <label htmlFor="postcode" className="col-sm-3 col-form-label text-right">Postcode/Zipcode</label>
                                                    <div className="col-sm-9">
                                                        <input type="postcode" value={client.website} onChange={handleChange} name="postcode" className="form-control" id="postcode" placeholder="Mobile" />
                                                    </div>
                                                </div>
                                                
                                                <div className="form-group row gutters">
                                                    <label htmlFor="inputEmail" className="col-sm-3 col-form-label text-right">E-mail</label>
                                                    <div className="col-sm-9">
                                                        <input type="email" value={client.email} name="email" onChange={handleChange} className="form-control" id="email" placeholder="Email" />
                                                    </div>
                                                </div>
                                                
                                                <div className="form-group row gutters">
                                                    <label htmlFor="phone" className="col-sm-3 col-form-label text-right">Phone</label>
                                                    <div className="col-sm-9">
                                                        <input type="phone" value={client.phone} onChange={handleChange} value={client.phone} name="phone" className="form-control" id="phone" placeholder="Phone" />
                                                    </div>
                                                </div>

                                                <div className="form-group row gutters">
                                                    <label htmlFor="website" className="col-sm-3 col-form-label text-right">Website</label>
                                                    <div className="col-sm-9">
                                                        <input type="website" value={client.website} onChange={handleChange} name="website" className="form-control" id="website" placeholder="https://www.website.com" />
                                                    </div>
                                                </div>

                                                
                                                
                                                <div className="form-group row gutters">
                                                    <label className="col-sm-3 col-form-label"></label>
                                                    <div className="col-sm-9">
                                                        <button type="button" id="submit" onClick={e => saveClient(e)} name="submit" className="btn btn-primary pull-right">Submit Form</button>
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

export default ClientNew;