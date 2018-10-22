import * as React from 'react'

// import './Clock.scss'

const STATUS = {
    HOVERED: 'Clock hovered',
    NORMAL: 'Clock normal',
}

class Clock extends React.Component {
    constructor(props) {
        super(props)

        this.onMouseEnter = this.onMouseEnter.bind(this)
        this.onMouseLeave = this.onMouseLeave.bind(this)

        this.state = {
            class: STATUS.NORMAL,
            time: new Date().toLocaleTimeString(),
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    onMouseEnter() {
        this.setState({ class: STATUS.HOVERED })
    }

    onMouseLeave() {
        this.setState({ class: STATUS.NORMAL })
    }

    tick() {
        this.setState({
            time: new Date().toLocaleTimeString(),
        })
    }

    render() {
        const { time } = this.state
        return (
            <p
                className={this.state.class}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                {this.props.children}
                {time}
            </p>
        )
    }
}
export default Clock
