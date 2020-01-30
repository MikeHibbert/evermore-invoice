import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserMenu extends Component {
    state = {
        open: false,
        menuClasses: 'dropdown',
        panelClasses: 'dropdown-menu md dropdown-menu-right',
        name: "New User (Please update your name in Settings)"
    }

    componentDidMount() {
        const name = localStorage.getItem('evermore-invoice-name', null);

        if(name) {
            this.setState({name: name});
        }
    }

    OnClick() {
        const state = {...this.state};

        state.open = !state.open;

        if(state.open) {
            state.menuClasses = 'dropdown show';
            state.panelClasses = 'dropdown-menu md dropdown-menu-right show';
        } else {
            state.menuClasses = 'dropdown';
            state.panelClasses = 'dropdown-menu md dropdown-menu-right';
        }

        this.setState(state);
    }

    render() {
        let menu = (
            <div>
            <ul className="header-actions">
                <li className={this.state.menuClasses}>
                    <a href="#" id="userSettings" className="user-settings clearfix" data-toggle="dropdown" aria-haspopup="true">
                        <span className="user-name" onClick={this.OnClick.bind(this)}>{this.state.name} <i className="icon-chevron-small-down downarrow"></i></span>
                    </a>
                    <div className={this.state.panelClasses} aria-labelledby="userSettings">
                        <div className="admin-settings">
                            <ul class="admin-settings-list">
                                <li>
                                    <a href="">
                                        <span class="icon icon-wallet"></span>
                                        <span class="text-name">{this.props.current_balance} AR</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="actions ">
                                <Link to='/logout' className="btn btn-primary pull-right">Logout</Link>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            </div>);

        if(!this.props.isAuthenticated) menu = null;

        return menu;
    }
}

export default UserMenu;