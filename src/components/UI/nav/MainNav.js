import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainNav extends Component {
  state = {
    nav_bar_classes: "collapse navbar-collapse",
    mobile_button_classes: "navbar-toggler"
  }

  getLiClass(path) {
    return this.props.location.pathname === path
      ? "nav-item dropdown active"
      : "nav-item dropdown";
  }

  getLinkClass(path) {
    return this.props.location.pathname === path
      ? "nav-link active"
      : "nav-link";
  }

  toggleMobile() {
    if(this.state.mobile_button_classes === "navbar-toggler") {
      this.setState({
        mobile_button_classes: "navbar-toggler collapsed",
        nav_bar_classes: "collapse navbar-collapse show"
      });
    } else {
      this.closeMobile();
    }
  }

  closeMobile() {
    this.setState({
      mobile_button_classes: "navbar-toggler",
      nav_bar_classes: "collapse navbar-collapse"
    });
  }

  render() {
    return(
        <nav className="navbar navbar-expand-lg navbar-menu">
        <button className={this.state.mobile_button_classes} 
            onClick={this.toggleMobile.bind(this)}
            type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
            <i className="icon-menu5"></i>
          </span>
        </button>
        <div className={this.state.nav_bar_classes} id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className={this.getLiClass("/")}>
              <Link className={this.getLinkClass("/")} to="/" 
                onClick={this.closeMobile.bind(this)} >
                <i className="nav-icon icon-blur_on"></i>
                <span className="nav-item">Dashboard</span>
              </Link>
            </li>
            <li className={this.getLiClass("/invoices")}>
              <Link className={this.getLinkClass("/invoices")} to="/invoices" 
                onClick={this.closeMobile.bind(this)} >
                <i className="nav-icon icon-document-text"></i>
                <span className="nav-item">Invoices</span>
              </Link>

            </li>
            <li className={this.getLiClass("/clients")}>
              <Link className={this.getLinkClass("/clients")} to="/clients" 
                onClick={this.closeMobile.bind(this)}>
                <i className="nav-icon icon-users"></i>
                <span className="nav-item">Clients</span>
              </Link>
            </li>
            <li className={this.getLiClass("/reports")}>
              <Link className={this.getLinkClass("/reports")} to="/reports" 
                onClick={this.closeMobile.bind(this)} >
                <i className="nav-icon icon-magnifying-glass"></i>
                <span className="nav-item">Reports</span>
              </Link>
            </li>
            <li className={this.getLiClass("/faq")}>
              <Link className={this.getLinkClass("/faq")} to="/faq"
                onClick={this.closeMobile.bind(this)}>
                <i className="nav-icon icon-lightbulb"></i>
                <span className="nav-item">FAQ</span>
              </Link>
            </li>
            <li className={this.getLiClass("/settings")}>
              <Link className={this.getLinkClass("/settings")} to="/settings" 
                onClick={this.closeMobile.bind(this)} >
                <i className="nav-icon icon-cog"></i>
                <span className="nav-item">Settings</span>
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    );
  }
}

export default MainNav;