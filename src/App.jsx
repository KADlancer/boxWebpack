import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1> Hello, World! </h1>

                <div>
                    <b>test</b>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>
            </div>
        )
    }
}

export default hot(module)(App)
