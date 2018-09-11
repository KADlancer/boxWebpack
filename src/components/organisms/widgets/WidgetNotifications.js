import React, { Component } from "react";
import Segments from "../../molecules/Segments/Segments";

import "./WidgetHelp.css";

class WidgetNotifications extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let notifications = this.props.dataNotifications.map(item => (
            <Segments>
                <Segments className="segment__header--attention">
                    <p>
                        {item.label}
                        <span className="segment__header__date">
                            {item.date}
                        </span>
                    </p>
                </Segments>
                <Segments>
                    <div dangerouslySetInnerHTML={{__html: item.text}} />
                </Segments>
            </Segments>
        ));
        return (
            <div className="WidgetNotifications">
                <h2>Notifications</h2>
                {notifications}
            </div>
        );
    }
}

export default WidgetNotifications;
