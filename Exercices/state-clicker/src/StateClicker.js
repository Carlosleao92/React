import React, { Component } from 'react'

export default class StateClicker extends Component {
    constructor(props) {
        super(props)
        this.state = { number: 1, msg:`Your number: 1`}
    }

    changeNumber = (e) => {
        let newNumber = Math.floor(Math.random() * 10)
        this.setState({number: newNumber});
        this.setMsg(newNumber);
    }

    setMsg = (number) => {
        if (number === 7) {
            this.setState({msg: 'You won'});
        } else {
            let newMsg = `Your number: ${number}`
            this.setState({msg: newMsg});
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.changeNumber}></button>
            </div>
        )
    }
}
