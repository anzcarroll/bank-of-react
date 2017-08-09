import React, { Component } from 'react';

class DebitList extends Component {
    render() {
        return(
            <div>
            <h3>{this.props.description}</h3>
            <h6>{this.props.amount}</h6>
            <h6>{this.props.date}</h6>
            </div>
        )
    }
}

export default DebitList;