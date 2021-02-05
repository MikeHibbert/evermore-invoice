import { company } from 'faker';
import React, { Component } from 'react';

class CheckBox extends Component {
    state = {
        isChecked: false
    }
    
    constructor(props) {
        super(props);

        this.toggleCheckbox.bind(this);
    }

    componentDidUpdate(prevProps) {
        if(this.props.checked != prevProps.checked) {
            this.setState({ isChecked: this.props.checked })
        }
    }

    toggleCheckbox() {
        const { handleCheckboxChange , txid } = this.props;
        this.setState({ isChecked: !this.state.isChecked })
        handleCheckboxChange(txid)
    }
    
    render() {
        return(
            <input type="checkbox" value={ this.props.txid } checked = { this.state.isChecked } onChange={() => { this.toggleCheckbox() } }/>
        ); 
    }
}

class SelectAll extends Component {
    state = {
        isChecked: false
    }

    constructor(props) {
        super(props);

        this.toggleAllCboxes.bind(this);
    }

    toggleAllCboxes() {
        const {selectAll} = this.props;
        this.setState({ isChecked: !this.state.isChecked });
        selectAll(!this.state.isChecked);
    }

    render() {
        return(
            <input type="checkbox" checked={ this.state.isChecked } onChange={() => {this.toggleAllCboxes() } }/> 
        );
    }
}

export {CheckBox, SelectAll};