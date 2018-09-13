import React from 'react'
import Segments from '../../molecules/Segments/Segments.jsx'
import './Widgets.css'

const WidgetHelp = () => (
    <div className="WidgetHelp">
        <h2>Help</h2>
        <Segments>
            <Segments className="horizontal">
                <Segments>
                    <span>
                        <strong>User Manual</strong>
                        <br />
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                        ac turpis egestas.
                    </span>
                </Segments>
                <Segments>
                    <span>
                        <strong>Feedback</strong>
                        <br />
                        Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet,
                        ante. Donec eu
                    </span>
                </Segments>
                <Segments>
                    <span>
                        <strong>Shortcuts</strong>
                        <br />
                        libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
                        placerat eleifend leo.
                    </span>
                </Segments>
            </Segments>
        </Segments>
    </div>
)

export default WidgetHelp
