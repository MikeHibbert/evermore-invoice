import React from 'react';
import Card from 'react-bootstrap/Card'

const Faq = function(props) {
    return(
        <Card>
            <Card.Body>
                <Card.Text>Q: {props.faq.faq_data.question}</Card.Text><br/>
                <Card.Text>A: {props.faq.faq_data.answer}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Faq;