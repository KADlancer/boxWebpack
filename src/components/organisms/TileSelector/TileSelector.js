import React, { Component } from 'react'
import { SelectableTile } from 'carbon-components-react'

import styles from './TileSelector.css'

class TileSelector extends Component {
	constructor(props) {
		super(props);
	}

	handleClick() {
		console.log("handleClick TileSelector: ", this)
	};

	render() {
		return (
			<div className="TileSelector">
				<SelectableTile
					id="tile-1"
					name="tiles"
					selected
					handleClick={this.handleClick}
				>
					Multi-select Tile
				</SelectableTile>
				<SelectableTile
					id="tile-2"
					name="tiles"
					handleClick={this.handleClick}
				>
					Multi-select Tile
				</SelectableTile>
				<SelectableTile
					id="tile-3"
					name="tiles"
					selected
					handleClick={this.handleClick}
				>
					Multi-select Tile
				</SelectableTile>
			</div>
		);
	}
}

export default TileSelector;
