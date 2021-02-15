import React, { Component } from 'react';

class Client extends Component {
    render() {
        return (
            <form>
                <div className="card m-0">
                    <div className="card-body">
                        <div className="form-group">
                            Client Name:
                            <input className="form-control" type="text" name="name"/>
                        </div>
                        <div className="form-group">
                            Client Email:
                            <input className="form-control" type="text" name="email"/>
                        </div>
                        <div className="form-group">
                            Client Address:
                            <input className="form-control" type="text" name="address"/>
                        </div>
                        <button type="button" id="submit" name="submit" className="btn btn-primary float-right">Submit Form</button>
                    </div>
                </div>
            </form>
        );
    };
}

export default class ClientField extends Component {
    render() {
        return (
            <div className="main-content">
                <div>
                    <Client/>
                </div>
            </div>
        );
    }
}