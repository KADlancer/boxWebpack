import React, { Component } from 'react'
import { DropdownV2, DropdownSkeleton, TooltipIcon } from 'carbon-components-react'

import data from './PageHeader.json'
import './PageHeader.css'

class PageHeader extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className="PageHeader">
				<div className="PageHeader__Brackets">
					<span>Content Edit</span>

					<div style={{width: 180}}>
						<DropdownV2
							label="Dashboard"
							items={data.DDitemsDashboard}
							itemToString={item => (item ? item.text : '')}
						/>
					</div>

					<div style={{width: 180}}>
						<DropdownV2
							label="User"
							items={data.DDitemsUser}
							itemToString={item => (item ? item.text : '')}
						/>
					</div>
				</div>

				<div className="PageHeader__Brackets">
					<TooltipIcon tooltipText="Download Manual">
						<svg className="icon" width="16" height="12" viewBox="0 0 16 12" xmlns="http://www.w3.org/2000/svg">
							<use xlinkHref="document.svg"/>
						</svg>
					</TooltipIcon>
					<TooltipIcon tooltipText="Support">
						<svg className="icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
							<use xlinkHref="chat.svg"/>
						</svg>
					</TooltipIcon>
					<TooltipIcon tooltipText="Keyboard Shortcuts">
						<svg className="icon" width="16" height="12" viewBox="0 0 16 12" xmlns="http://www.w3.org/2000/svg">
							<use xlinkHref="filter.svg"/>
						</svg>
					</TooltipIcon>
					<div>
						<span>Logo</span>
					</div>
				</div>
			</div>
		);
	}
}

export default PageHeader;
