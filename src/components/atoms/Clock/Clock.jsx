import * as React from 'react'

import './Clock.scss'

const STATUS = {
    HOVERED: 'Clock hovered',
    NORMAL: 'Clock normal',
};

class Clock extends React.Component {
    constructor(props) {
        super(props)

        this._onMouseEnter = this._onMouseEnter.bind(this)
        this._onMouseLeave = this._onMouseLeave.bind(this)

        this.state = {
            class: STATUS.NORMAL,
            time: new Date().toLocaleTimeString(),
        }
    }

    _onMouseEnter() {
        this.setState({class: STATUS.HOVERED});
    }

    _onMouseLeave() {
        this.setState({class: STATUS.NORMAL});
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
        return (
            <p
                className={this.state.class}
                onMouseEnter={this._onMouseEnter}
                onMouseLeave={this._onMouseLeave}
            >
                {this.props.children}
                {time}
            </p>
        )
    }
}
export default Clock
