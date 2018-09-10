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

					<div style={{width: 300}}>
						<DropdownV2
							label="Dashboard"
							items={data.DDitemsDashboard}
							itemToString={item => (item ? item.text : '')}
						/>
					</div>

					<div style={{width: 300}}>
						<DropdownV2
							label="User"
							items={data.DDitemsUser}
							itemToString={item => (item ? item.text : '')}
						/>
					</div>
				</div>

				<div className="PageHeader__Brackets">
					<TooltipIcon tooltipText="Download Manual">
						<svg width="16" height="12" viewBox="0 0 16 12">
							<g fillRule="nonzero">
								<path d="M8.05 2a2.5 2.5 0 0 1 4.9 0H16v1h-3.05a2.5 2.5 0 0 1-4.9 0H0V2h8.05zm2.45 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM3.05 9a2.5 2.5 0 0 1 4.9 0H16v1H7.95a2.5 2.5 0 0 1-4.9 0H0V9h3.05zm2.45 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
							</g>
						</svg>
					</TooltipIcon>
					<TooltipIcon tooltipText="Support">
						<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
							<g fill-rule="evenodd">
								<path
									d="M8 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
									fill-rule="nonzero"/>
								<path fill-rule="nonzero" d="M9 13H7V7h2z"/>
								<circle cx="8" cy="4" r="1"/>
							</g>
						</svg>
					</TooltipIcon>
					<TooltipIcon tooltipText="Keyboard Shortcuts">
						<svg width="16" height="12" viewBox="0 0 16 12">
							<g fillRule="nonzero">
								<path d="M8.05 2a2.5 2.5 0 0 1 4.9 0H16v1h-3.05a2.5 2.5 0 0 1-4.9 0H0V2h8.05zm2.45 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM3.05 9a2.5 2.5 0 0 1 4.9 0H16v1H7.95a2.5 2.5 0 0 1-4.9 0H0V9h3.05zm2.45 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
							</g>
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
