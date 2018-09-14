import React from 'react'
import PropTypes from 'prop-types'

import './Card.scss'
import Segments from '../Segments'

const Card = props => {
    const { cardHeader, cardBody, cardFooter } = props

    return (
        <div className="Card">
            <Segments className="compact">
                <Segments>{cardHeader}</Segments>
                <Segments>{cardBody}</Segments>
                <Segments>{cardFooter}</Segments>
            </Segments>
        </div>
    )
}

Card.propTypes = {
    cardHeader: PropTypes.node,
    cardBody: PropTypes.node,
    cardFooter: PropTypes.node,
}
Card.defaultProps = {
    cardHeader: <div>Header</div>,
    cardBody: <div>Body</div>,
    cardFooter: <div>Footer</div>,
}

export default Card
