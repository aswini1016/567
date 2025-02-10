import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'I am '
        }

    }
    render() {
        return (
            <div>
                <h1 className='heading1'>{this.state.message}</h1>
                <button onClick={this.change}</button>
            </div>
        );
    }
}

export default ClassComponent