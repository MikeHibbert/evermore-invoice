import React, { Component } from 'react';


export default class CostRelatedStuff extends Component {
    state = {
        created: "",
        duedate: "",
        totalvalue: null,
    }

    dueDateMaker() {
        const today1 = new Date();
        const today2 = today1.getMonth();
        today1.setMonth(today1.getMonth()+1);

        if(today1.getMonth() == today2) { today1.setDate(0) }
        today1.setHours(0, 0, 0, 0);

        this.setState({duedate: today1})
    }

    giveTheStuff() {
        const stuff_to_give = [];
        const stuff_list = [this.state]
        stuff_to_give.push(stuff_list)

        this.props.onGotTheStuff(stuff_to_give)
    }
    
    render() {
        return(
            <div className="form-group">
                <button className="form-control" onClick={() => {this.setState({created: new Date()})}} onClick={() => {this.dueDateMaker()}}>Set Creation Date and Due Date</button>
                
            </div>
        )
    }
}