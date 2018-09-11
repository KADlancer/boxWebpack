import React, { Component} from "react";
import {hot} from "react-hot-loader";
import PageHeader from '../../organisms/PageHeader/PageHeader'
import TileSelector from '../../organisms/TileSelector/TileSelector'

import {
	InlineNotification,
} from 'carbon-components-react';
import WidgetHelp from "_components/organisms/widgets/WidgetHelp";
import WidgetNotifications from "_components/organisms/widgets/WidgetNotifications";
import WidgetReleaseNotes from "_components/organisms/widgets/WidgetReleaseNotes";


import data from './Dashboard.json'


class Dashboard extends Component{
	render(){
		return(
			<div className="Dashboard">

				<PageHeader />

				<TileSelector tiles={data.tiles}/>

				<div className="bx--grid">
					<div className="bx--row">
						<div className="bx--col-xs-12 bx--col-md-6">
							<WidgetHelp/>

							<WidgetNotifications dataNotifications={data.notifications}/>
						</div>
						<div className="bx--col-xs-12 bx--col-md-6">
							<WidgetReleaseNotes dataReleaseNotes={data.releaseNotes}/>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default hot(module)(Dashboard);
