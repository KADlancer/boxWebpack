import React from 'react'
import PropTypes from 'prop-types'
import Segments from '../../molecules/Segments'
import './Widgets.css'

const WidgetReleaseNotes = props => {
    const { dataReleaseNotes } = props
    const releaseNotes = dataReleaseNotes.map(item => (
        <Segments>
            <Segments className="segment__header--success">
                <p>
                    {item.label}
                    <span className="segment__header__date">{item.date}</span>
                </p>
            </Segments>
            <Segments>
                <div dangerouslySetInnerHTML={{ __html: item.text }} />
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
