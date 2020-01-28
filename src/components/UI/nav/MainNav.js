import React, { Component } from 'react';

class MainNav extends Component {
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
                <li className="nav-item dropdown active">
                  <a className="nav-link" href="#" id="bluemoon-dashboards" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="nav-icon icon-blur_on"></i>
                    <span className="nav-item">Dashboard</span>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" href="#" id="bluemoon-apps" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="nav-icon icon-document-text"></i>
                    <span className="nav-item">Invoices</span>
                  </a>

                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" href="#" id="bluemoon-layouts" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="nav-icon icon-magnifying-glass"></i>
                    <span className="nav-item">Reports</span>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="bluemoon-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="nav-icon icon-business_center"></i>
                    <span className="nav-item">Pages</span>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="blog.html">Blog</a>
                    <a className="dropdown-item" href="profile.html">Profile</a>
                    <a className="dropdown-item" href="contacts.html">Contacts</a>
                    <a className="dropdown-item" href="calendar.html">Calendar</a>
                    <a className="dropdown-item" href="invoice.html">Invoice</a>
                    <a className="dropdown-item" href="timeline.html">Timeline</a>
                    <a className="dropdown-item" href="pricing.html">Pricing</a>
                    <a className="dropdown-item" href="faq.html">Faq's</a>
                    <a className="dropdown-item" href="search.html">Search Results</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="bluemoon-forms" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="nav-icon icon-business_center"></i>
                    <span className="nav-item">Forms</span>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="bs-select.html">BS Select</a>
                    <a className="dropdown-item" href="range-sliders.html">Range Sliders</a>
                    <a className="dropdown-item" href="form-inputs.html">Form Inputs</a>
                    <a className="dropdown-item" href="input-groups.html">Inputs Groups</a>
                    <a className="dropdown-item" href="checkbox-radio.html">Checkbox &amp; Radio</a>
                    <a className="dropdown-item" href="contact.html">Contact Form</a>
                    <a className="dropdown-item" href="contact2.html">Contact Form #2</a>
                    <a className="dropdown-item" href="contact3.html">Contact Form #3</a>
                    <a className="dropdown-item" href="contact4.html">Contact Form #4</a>
                    <a className="dropdown-item" href="subscribe-form.html">Subscribe Form</a>
                    <a className="dropdown-item" href="checkout-form.html">Checkout Form</a>
                    <a className="dropdown-item" href="summernote-editor.html">Editor</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="bluemoon-ui-elements" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="nav-icon icon-style"></i>
                    <span className="nav-item">UI Elements</span>									
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="general-elements.html">General Elements</a>
                    <a className="dropdown-item" href="buttons.html">Buttons</a>
                    <a className="dropdown-item" href="button-groups.html">Button Groups</a>
                    <a className="dropdown-item" href="tabs.html">Tabs</a>
                    <a className="dropdown-item" href="modals.html">Modals</a>
                    <a className="dropdown-item" href="accordion.html">Accordion</a>
                    <a className="dropdown-item" href="labels-badges.html">Labels &amp; Badges</a>
                    <a className="dropdown-item" href="notifications.html">Notifications</a>
                    <a className="dropdown-item" href="carousel.html">Carousels</a>
                    <a className="dropdown-item" href="list-items.html">List Items</a>
                    <a className="dropdown-item" href="cards.html">Cards</a>
                    <a className="dropdown-item" href="navbars.html">Navbars</a>
                    <a className="dropdown-item" href="popovers-tooltips.html">Popovers &amp; Tooltips</a>
                    <a className="dropdown-item" href="progress.html">Progress Bars</a>
                    <a className="dropdown-item" href="pagination.html">Pagination</a>
                    <a className="dropdown-item" href="typography.html">Typography</a>
                    <a className="dropdown-item" href="media-objects.html">Media Objects</a>
                    <a className="dropdown-item" href="icons.html">Icons</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="bluemoon-tables" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="nav-icon icon-view_week"></i>
                    <span className="nav-item">Tables</span>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="custom-tables.html">Custom Tables</a>
                    <a className="dropdown-item" href="tables.html">Tables</a>
                    <a className="dropdown-item" href="datatables.html">Data Tables</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="bluemoon-graphs" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="nav-icon icon-terrain"></i>
                    <span className="nav-item">Graphs</span>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="c3-graphs.html">C3 Graphs</a>
                    <a className="dropdown-item" href="flot.html">Flot Graphs</a>
                    <a className="dropdown-item" href="morris.html">Morris Graphs</a>
                    <a className="dropdown-item" href="google-maps.html">Google Maps</a>
                    <a className="dropdown-item" href="vector-maps.html">Vector Maps</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="bluemoon-authentication" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="nav-icon icon-lock-open"></i>
                    <span className="nav-item">Login</span>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="login.html">Login</a>
                    <a className="dropdown-item" href="signup.html">Signup</a>
                    <a className="dropdown-item" href="forgot-pwd.html">Forgot Password</a>
                    <a className="dropdown-item" href="locked-screen.html">Locked Screen</a>
                    <a className="dropdown-item" href="error404.html">Error 404</a>
                    <a className="dropdown-item" href="error505.html">Error 505</a>
                    <a className="dropdown-item" href="secure.html">Secure Account</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        );
    }
}

export default MainNav;