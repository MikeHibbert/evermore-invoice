import React, { Component } from 'react';

class UserMenu extends Component {
    state = {
        open: false,
        menuClasses: 'dropdown',
        panelClasses: 'dropdown-menu md dropdown-menu-right'
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
        return (
            <ul className="header-actions">
                <li className={this.state.menuClasses}>
                    <a href="#" id="userSettings" className="user-settings clearfix" data-toggle="dropdown" aria-haspopup="true">
                        <span className="user-name" onClick={this.OnClick.bind(this)}>{this.props.username} <i className="icon-chevron-small-down downarrow"></i></span>
                    </a>
                    <div className={this.state.panelClasses} aria-labelledby="userSettings">
                        <div className="admin-settings">
                        
                        <div className="actions ">
                            <a href="/logout" className="btn btn-primary pull-right">Logout</a>
                        </div>
                        </div>
                    </div>
                </li>
            </ul>

        );
    }
}

export default UserMenu;