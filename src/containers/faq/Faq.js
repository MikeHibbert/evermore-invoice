import React from 'react';

const Faq = function(props) {
    return(
        <tr>
            <td>{props.faq.faq_data.qname}</td>
            <td>{props.faq.faq_data.question}</td>
            <td>{props.faq.faq_data.aname}</td>
            <td>{props.faq.faq_data.answer}</td>
        </tr>
    )
}

export default Faq;