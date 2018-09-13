import React from 'react'

import './Segments.scss'
import './Segments_custom.scss'
import PropTypes from 'prop-types'

const Segments = props => {
    const { children, className } = props
    let classString = 'ui segment'
    if (React.Children.count(children) > 1) {
        classString += 's'
    }
    if (className) {
        classString += ` ${props.className}`
    }
    return <div className={classString}>{React.Children.map(children, child => child)}</div>
}

Segments.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}
Segments.defaultProps = {
    className: '',
}

export default Segments
