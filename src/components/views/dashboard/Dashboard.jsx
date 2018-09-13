import React from 'react'
import { hot } from 'react-hot-loader'
import { WidgetHelp, WidgetNotifications, WidgetReleaseNotes } from '../../organisms/widgets'
import TileSelector from '../../organisms/TileSelector/TileSelector'
import PageHeader from '../../organisms/PageHeader/PageHeader'

import data from './Dashboard.json'

const Dashboard = () => (
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

export default hot(module)(Dashboard)
