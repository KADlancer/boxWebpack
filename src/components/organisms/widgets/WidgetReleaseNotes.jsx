import React from 'react'
import PropTypes from 'prop-types'
import Segments from '../../molecules/Segments'
import './Widgets.css'
import tempHtmlToReactParser from '../../_utilities/htmlToReactParser'

const WidgetReleaseNotes = props => {
    const { dataReleaseNotes } = props
    const releaseNotes = dataReleaseNotes.map(item => (
        <Segments key={item.id}>
            <Segments className="segment__header--success">
                <p>
                    {item.label}
                    <span className="segment__header__date">{item.date}</span>
                </p>
            </Segments>
            <Segments>
                <div>{tempHtmlToReactParser(item.text)}</div>
            </Segments>
        </Segments>
    ))

    return (
        <div className="WidgetReleaseNotes">
            <h2>Release Notes</h2>
            {releaseNotes}
        </div>
    )
}

WidgetReleaseNotes.propTypes = {
    dataReleaseNotes: PropTypes.array.isRequired,
}

export default WidgetReleaseNotes
