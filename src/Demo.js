import React, { Component } from 'react';

import './demo.css';

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }
    render() {
        const { counter } = this.state;
        return (
            <div>
                <div>{counter}</div>
                <div>{counter === 0 ? 'zero' : counter.toString()}</div>
                <button
                    onClick={() => this.setState({ counter: counter + 1 })}
                >+</button>
            </div>
        );
    }
}
export default Demo;
