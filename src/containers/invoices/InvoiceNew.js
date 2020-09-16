import React from 'react';
import {useForm} from '../../components/UI/forms/useForm';
import {getUserInfo} from '../../helpers';
import {createNewInvoice} from './helpers';

const InvoiceEdit = (props) => {
    const invoice = createNewInvoice();

    const [values, handleChange] = useForm({...invoice});

    const user = getUserInfo();
    
    debugger;

    return (<>
        <header className="page-header">
            <div className="container-fluid">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="page-title">
                    <h3>Edit Invoice</h3>
                </div>
                </div>
            </div>
            </div>
        </header>

        <div className="main-content" style={{minHeight: "292px"}}>
            <div className="row gutters justify-content-center">
                <div className="col-xl-8 col-lg-9 col-md-10 col-sm-12">
                    <div className="invoice-container">

                        <div className="invoice-header">

                            <div className="row gutters">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <img src="img/logo.png" className="invoice-logo" alt="Bluemoon Admin" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="btn-group float-right">
                                        <a href="#" className="btn btn-outline-info btn-sm">
                                            <i className="icon-printer"></i> Export PDF
                                        </a>
                                        <a href="#" className="btn btn-outline-orange btn-sm ml-2">
                                            <i className="icon-printer"></i> Print
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="invoice-address">

                            <div className="row gutters">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <small>From,</small> <br/><br/>
                                    <h6>{user.name}</h6>
                                    <address>
                                        Street Address<br />
                                        City, Zip Code<br />
                                        Phone: 000-000-0000
                                    </address>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <small>To,</small><br /><br />
                                    <h6>{values.client.name}</h6>
                                    <address>
                                        Street Address<br />
                                        City, Zip Code<br />
                                        Phone: 000-000-0000
                                    </address>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="invoice-details">
                                        <small>Invoice / Month</small><br />
                                        <small>Invoice No - #56789</small><br />
                                        <small>March 30th 2017</small><br />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="invoice-body">


                            <div className="row gutters">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <p><b>Hello, Emily</b></p>
                                    <p>Thank you for shopping from our store and for your order.</p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    
                                </div>
                            </div>

                            <div className="row gutters">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Items</th>
                                                <th>Product ID</th>
                                                <th>Quantity</th>
                                                <th>Sub Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Bluemoon Monitor
                                                    <p className="m-0 text-muted">
                                                        <small>Reference site about Lorem Ipsum, giving information on its origins</small>
                                                    </p>
                                                </td>
                                                <td>#50000879</td>
                                                <td>2</td>
                                                <td>$1150.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Bluemoon Dashboard
                                                    <p className="m-0 text-muted">
                                                        <small>As well as a random Lipsum generator.</small>
                                                    </p>
                                                </td>
                                                <td>#50000871</td>
                                                <td>3</td>
                                                <td>$50.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Bluemoon Web App
                                                    <p className="m-0 text-muted">
                                                        <small>Lorem ipsum has become the industry standard.</small>
                                                    </p>
                                                </td>
                                                <td>#50000665</td>
                                                <td>2</td>
                                                <td>$49.99</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="invoice-payment">
                                <div className="row gutters">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 order-last">
                                        <table className="table no-border m-0">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            Subtotal<br />
                                                            Shipping &amp; Handling<br />
                                                            Tax<br />
                                                        </p>
                                                        <h5 className="text-danger"><strong>Grand Total</strong></h5>
                                                    </td>
                                                    <td>
                                                        <p>
                                                            $1170.00<br />
                                                            $30.00<br />
                                                            $50.00<br />
                                                        </p>
                                                        <h5 className="text-danger"><strong>$1250.00</strong></h5>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                        </div>

                        <div className="invoice-footer">
                            Thank you for your Business.
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default InvoiceEdit;