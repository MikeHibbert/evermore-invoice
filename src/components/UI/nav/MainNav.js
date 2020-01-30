import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MainNav extends Component {
  getNavLinkClass(path) {
    return this.props.location.pathname === path
      ? "nav-item dropdown active"
      : "nav-item dropdown";
  }

  render() {
    return(
        <nav className="navbar navbar-expand-lg navbar-menu">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
            <i className="icon-menu5"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className={this.getNavLinkClass("/")}>
              <NavLink className="nav-link" to="/" id="bluemoon-dashboards" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="nav-icon icon-blur_on"></i>
                <span className="nav-item">Dashboard</span>
              </NavLink>
            </li>
            <li className={this.getNavLinkClass("/invoices")}>
              <NavLink className="nav-link" to="/invoices" id="bluemoon-apps" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="nav-icon icon-document-text"></i>
                <span className="nav-item">Invoices</span>
              </NavLink>

            </li>
            <li className={this.getNavLinkClass("/reports")}>
              <NavLink className="nav-link" to="/reports" id="bluemoon-layouts" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="nav-icon icon-magnifying-glass"></i>
                <span className="nav-item">Reports</span>
              </NavLink>
            </li>
            <li className={this.getNavLinkClass("/settings")}>
              <NavLink className="nav-link" to="/settings" id="bluemoon-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="nav-icon icon-cog"></i>
                <span className="nav-item">Settings</span>
              </NavLink>
            </li>
            
          </ul>
        </div>
      </nav>
    );
  }
}

export default MainNav;