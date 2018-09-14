import * as React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date().toLocaleTimeString(),
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    tick() {
        this.setState({
            time: new Date().toLocaleTimeString(),
        })
    }

    render() {
        const { time } = this.state
        return <p className="App-clock">The time is : {time}</p>
    }
}
export default Clock