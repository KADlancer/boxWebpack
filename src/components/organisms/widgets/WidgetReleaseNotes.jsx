import React, { Component } from "react";
import Segments from "../../molecules/Segments/Segments";

import "./WidgetHelp.css";

class WidgetReleaseNotes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const releaseNotes = this.props.dataReleaseNotes.map(item => (
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
        ));
        return (
            <div className="WidgetReleaseNotes">
                <h2>Release Notes</h2>
                {releaseNotes}
            </div>
        );
    }
}

export default WidgetReleaseNotes;
