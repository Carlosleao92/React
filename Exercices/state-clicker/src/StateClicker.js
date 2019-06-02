import React, { Component } from 'react'

export default class StateClicker extends Component {
    constructor(props) {
        super(props)
        this.state = { number: 1}
    }

    changeNumber = (e) => {
        let newNumber = Math.floor(Math.random() * 10)
        this.setState({number: newNumber});
    }

 
    render() {
        return (
            <div>
                <h1> Your Number: {this.state.number}</h1>
                {this.state.number === 7 
                    ? <h1>You won</h1> 
                    :<button onClick={this.changeNumber}></button>
                }
            </div>
        )
    }
}
