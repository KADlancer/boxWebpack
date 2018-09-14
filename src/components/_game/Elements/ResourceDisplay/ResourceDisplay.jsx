import React from 'react'
import PropTypes from 'prop-types'

const ResourceDisplay = props => {
    const { type, label, current, max } = props
    return (
        <div className="ResourceDisplay">
            <span className="resource__icon" title={label}>
                [{type}]{' : '}
            </span>
            <span className="resource__current">
                {current}
                {'/'}
                {max}
            </span>
        </div>
    )
}

ResourceDisplay.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    current: PropTypes.number,
    max: PropTypes.number,
}
ResourceDisplay.defaultProps = {
    type: 'resourceType',
    label: 'Resource Name',
    current: 10,
    max: 10,
}
export default ResourceDisplay
