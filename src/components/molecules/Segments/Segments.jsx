import React, { Component } from 'react'

import './Segments.scss'
import './Segments_custom.scss'
import PropTypes from 'prop-types'

class Segments extends Component {
    render() {
        const children = this.props.children
        let className = 'ui segment'
        if (React.Children.count(children) > 1) {
            className += 's'
        }
        if (this.props.className) {
            className += ` ${this.props.className}`
        }
        return <div className={className}>{React.Children.map(children, child => child)}</div>
    }
}

Segments.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}
Segments.defaultProps = {
    className: '',
}

export default Segments
