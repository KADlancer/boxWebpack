import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import WidgetHelp from '../../organisms/widgets/WidgetHelp'
import WidgetNotifications from '../../organisms/widgets/WidgetNotifications'
import WidgetReleaseNotes from '../../organisms/widgets/WidgetReleaseNotes'
import TileSelector from '../../organisms/TileSelector/TileSelector'
import PageHeader from '../../organisms/PageHeader/PageHeader'

import data from './Dashboard.json'

class Dashboard extends Component {
    render() {
        return (
            <div className="Dashboard">
                <PageHeader />

                <TileSelector tiles={data.tiles} />

                <div className="bx--grid">
                    <div className="bx--row">
                        <div className="bx--col-xs-12 bx--col-md-6">
                            <WidgetHelp />

                            <WidgetNotifications dataNotifications={data.notifications} />
                        </div>
                        <div className="bx--col-xs-12 bx--col-md-6">
                            <WidgetReleaseNotes dataReleaseNotes={data.releaseNotes} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default hot(module)(Dashboard)
