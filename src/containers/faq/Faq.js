import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

const customStyles = {
    content: {
        display: 'none'
    }
}

class Faq extends Component {
    state = {
        switchState: 'off',

    }

    flipSwitch(e) {
        console.log('clickity clackity');
        if(this.state.switchState == 'off') {
            this.setState({switchState: 'on'})
        } else {
            this.setState({switchState: 'off'})
        }
    }

    render() {

        const visible_or_not = this.state.switchState == 'on' ? {} : customStyles.content;

        return(
            <Card onClick={(e) => {this.flipSwitch(e)}}>
                <Card.Body>
                    <Card.Text>Q: {this.props.faq.faq_data.question}</Card.Text>
                    <Card.Text style={visible_or_not}>A: {this.props.faq.faq_data.answer}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Faq;