import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Segments } from '../../molecules/Segments/Segments';

import './WidgetHelp.css';

class WidgetHelp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="WidgetHelp">
                <h2>Help</h2>
                <div className="ui segments">
                    <div className="ui horizontal segments">
                        <div className="ui segment">
                            <a href="#">
                                <strong>User Manual</strong>
                                <br />
                                Pellentesque habitant morbi tristique senectus et netus et malesuada
                                fames ac turpis egestas.
                            </a>
                        </div>
                        <div className="ui segment">
                            <a href="#">
                                <strong>Feedback</strong>
                                <br />
                                Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit
                                amet, ante. Donec eu
                            </a>
                        </div>
                        <div className="ui segment">
                            <a href="#">
                                <strong>Shortcuts</strong>
                                <br />
                                libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
                                Mauris placerat eleifend leo.
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WidgetHelp;
