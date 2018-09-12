import React, { Component } from 'react'

import './WidgetHelp.css'
import PropTypes from 'prop-types'
import Segments from '../../molecules/Segments/Segments'

class WidgetNotifications extends Component {
    render() {
        const dataNotifications = this.props.dataNotifications
        const notifications = dataNotifications.map(item => (
            <Segments>
                <Segments className="segment__header--attention">
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
            <div className="WidgetNotifications">
                <h2>Notifications</h2>
                {notifications}
            </div>
        )
    }
}

WidgetNotifications.propTypes = {
    dataNotifications: PropTypes.object.isRequired,
}

export default WidgetNotifications
