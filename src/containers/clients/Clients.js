import React, {Component} from 'react';
import {successMessage, errorMessage} from '../../helpers';
import { Link } from 'react-router-dom';
import Client from './Client'
import Pagination from "react-js-pagination";



class Clients extends Component {
    state = {
        clients_paid_balance: 0,
        clients_unpaid_balance: 0,
        number_of_clients: 0,
        active_page: 1,
        clients: []
    }

    constructor(props) {
      super(props);

      this.handlePageChange = this._handlePageChange.bind(this);
      this.getPaginatedClients.bind(this);
    }

    componentDidMount() {
      const clients = this.getPaginatedClients(0, this.props.clients.length - 1);

      this.setState({clients: clients, active_page: 1})
    }

    _handlePageChange(active_page) {
      const start = (active_page - 1) * 10;
      const end = start + 9;

      const clients = this.getPaginatedClients(start, end);

      this.setState({clients: clients, active_page: active_page})
    }

    getPaginatedClients(start, end) {
      
      const clients = [];
      for(let i=start; i <= end; i++) {
        clients.push(this.props.clients[i]);
      }

      return clients;
    }

    render() {

        const clients = this.props.clients.map((c) => {
          return <Client key={c.id} client={c} />;
        });

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
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="right-stats">
                      <a className="btn btn-danger" style={{marginRight: "4px"}}>
                        <span>{this.props.currency_symbol}{this.state.clients_unpaid_balance}</span>Unpaid
                      </a>
                      <a  className="btn btn-success">
                        <span>{this.props.currency_symbol}{this.state.clients_paid_balance}</span>Paid
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div className="main-content">
              <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="card">
                    <div className="card-header">Clients</div>
                      <div className="card-body">
                        <div className="table-responsive" style={{height: '100%', minHeight: '600px'}}>
                          <table className="table m-0">
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Status</th>
                                <th>Last invoice due date</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {clients}
                            </tbody>
                          </table>
                          <Pagination
                            activePage={this.state.active_page}
                            itemsCountPerPage={10}
                            totalItemsCount={this.props.clients.length}
                            pageRangeDisplayed={5}
                            onChange={this.handlePageChange}
                            itemClass='page-item'
                            linkClass='page-link'
                            activeClass='active'
                            activeLinkClass=''
                          />
                          <Link to="/client/new" className="btn btn-success margin-top-20">Create New Client</Link>
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

export default Clients;