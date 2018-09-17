import React from 'react'
import PropTypes from 'prop-types'
import Segments from '../../molecules/Segments'
import tempHtmlToReactParser from '../../_utilities/htmlToReactParser'
import './Widgets.css'

const WidgetNotifications = props => {
    const { dataNotifications } = props
    const notifications = dataNotifications.map(item => (
        <Segments key={item.id}>
            <Segments className="segment__header--attention">
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
        <div className="WidgetNotifications">
            <h2>Notifications</h2>
            {notifications}
        </div>
    )
}

WidgetNotifications.propTypes = {
    dataNotifications: PropTypes.array.isRequired,
}

export default WidgetNotifications
