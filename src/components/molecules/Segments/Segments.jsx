import React from 'react'

import './Segments.scss'
import './Segments_custom.scss'
import PropTypes from 'prop-types'

const Segments = props => {
    const children = props.children
    let className = 'ui segment'
    if (React.Children.count(children) > 1) {
        className += 's'
    }
    if (props.className) {
        className += ` ${props.className}`
    }
    return <div className={className}>{React.Children.map(children, child => child)}</div>
}

Segments.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}
Segments.defaultProps = {
    className: '',
}

export default Segments
