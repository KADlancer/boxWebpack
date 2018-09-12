import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Segments from '../../molecules/Segments/Segments'

import './WidgetHelp.css'

class WidgetReleaseNotes extends Component {
    render() {
        const dataReleasNotes = this.props.dataReleaseNotes
        const releaseNotes = dataReleasNotes.map(item => (
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
}

WidgetReleaseNotes.propTypes = {
    dataReleaseNotes: PropTypes.object.isRequired,
}

export default WidgetReleaseNotes
