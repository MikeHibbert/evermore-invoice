import React, {Component} from 'react';
import {successMessage, errorMessage} from '../../helpers';
import { Link } from 'react-router-dom';
import Pagination from "react-js-pagination";

class Clients extends Component {
  state = {
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
    
    var clients = [];
    for(let i=start; i <= end; i++) {
      clients.push(this.props.clients[i]);
    }
    
    return clients;
  }

  render() {

    const clients = this.props.clients.map((c) => {
      return function Client(c) {
        let invoice_status = <span className="badge badge-pill badge-success">No outstanding invoices</span>;
      
        let last_invoice_date = "N/A";
      
        const edit = "/client/edit/" + c.id;
        const origins = "/client/history/" + c.client_data.Origin;
        return(
          <tr>
            <td>{c.client_data.name}</td>
            <td>{c.client_data.address}</td>
            <td>{invoice_status}</td>
            <td>{last_invoice_date}</td>
            <td><Link style={{ marginRight: "10px" }} className='btn btn-info bt-sm' to={edit}>Edit</Link><Link style={{ marginRight: "10px" }} className='btn btn-info bt-sm' to={origins}>History</Link></td>
          </tr>
        )
      };
    });

    

    return(
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
                </div>
              </div>
            </div>
          </div>                
        </div>
      </div>
    );
  }
}

export default Clients;