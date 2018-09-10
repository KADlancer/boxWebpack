import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { SelectableTile } from 'carbon-components-react'

import data from './TileSelector.json'
import './TileSelector.css'

function handleClick() {
	console.log("handleClick TileSelector: ", this)
}
function onChange() {
	console.log("onChange TileSelector: ", this)
}

const listItems = data.tiles.map((item) =>
	<SelectableTile
		key={item.id}
		id={item.id}
		name="tiles"
		selected={item.isSelected}
		onChange={onChange}
		handleClick={handleClick}
	>
		{item.text}
	</SelectableTile>
);

ReactDOM.render(
	<ul>{listItems}</ul>,
	document.getElementById('root')
);

class TileSelector extends Component {
	constructor(props) {
		super(props);
	}



	render() {
		return (
			<div className="TileSelector">
				{listItems}
			</div>
		);
	}
}

export default TileSelector;
