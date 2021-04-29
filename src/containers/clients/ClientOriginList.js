import React, {Component} from 'react';
import {successMessage, errorMessage} from '../../helpers';
import arweave from '../../arweave-config';
import { Link } from 'react-router-dom';
import OtherClient from './OtherClient'
import Pagination from "react-js-pagination";
import { selectedObjects } from '../../helpers'


export default class ClientOriginList extends Component {
    state = {
        clients_paid_balance: 0,
        clients_unpaid_balance: 0,
        number_of_clients: 0,
        active_page: 1,
        clients: [],
        Origin: null,

    }

    constructor(props) {
      super(props);

      this.handlePageChange = this._handlePageChange.bind(this);
      this.getPaginatedClients.bind(this);
    }

    componentDidMount() {
      const clients = this.getPaginatedClients(0, 9);

      this.setState({clients: clients, active_page: 1})
    }

    

    _handlePageChange(active_page) {
      const start = (active_page - 1) * 10;
      const end = start + 9;

      const clients = this.getPaginatedClients(start, end)

      this.setState({ clients: clients, active_page: active_page })
    }

    async getPaginatedClients(start, end) {
      debugger;
      const web_sections = this.props.location.pathname.split("/")
      const txid = web_sections[web_sections.length-1]
      const type = web_sections[web_sections.length-3]
      
      var clients = [];
      var objects = await selectedObjects(type, txid)
      for(let i=start; i <= end; i++) {
        clients.push(objects);
      }
      
      return clients;
    }

    render() {
      if(this.state.ready == "true") {
        const list = this.state.clients.map((c) => {
          return <OtherClient key={c.id} client={c} />
        });
        return list;
      } else {
        console.log("not ready yet! :P")
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
                        <button className="form-control" style={{alignContent: "left", width: 200, marginBottom: 20}} onClick={() => { this.props.history.push('/clients') }}>Back to Client List</button>
                          <div className="table-responsive" style={{height: '100%', minHeight: '600px'}}>
                            <table className="table m-0">
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Address</th>
                                  <th>Status</th>
                                  <th>Last invoice due date</th>
                                </tr>
                              </thead>
                              <tbody>
                                {list}
                              </tbody>
                            </table>
                            <Pagination
                              activePage={this.state.active_page}
                              itemsCountPerPage={10}
                              totalItemsCount={this.state.clients.length}
                              pageRangeDisplayed={5}
                              onChange={this.handlePageChange}
                              itemClass='page-item'
                              linkClass='page-link'
                              activeClass='active'
                              activeLinkClass=''
                            />
                        </div>
                      </div>
                    </div>
                  </div>                
                </div>
              </div>
            </>
        );
    }
};