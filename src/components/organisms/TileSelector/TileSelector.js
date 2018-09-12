import React, { Component } from 'react'
import { SelectableTile, Button } from 'carbon-components-react'

import './TileSelector.css'
import PropTypes from 'prop-types'

function handleClick() {
    console.log('handleClick TileSelector: ', this)
}
function onChange() {
    console.log('onChange TileSelector: ', this)
}

class TileSelector extends Component {
    render() {
        const tiles = this.props.tiles
        const listItems = tiles.map(item => (
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
        ))
        return (
            <div className="TileSelector">
                <div className="bx--grid">
                    <div className="bx--row">
                        <div className="bx--col-xs-10 bx--col-md-11">
                            <ul>{listItems}</ul>
                        </div>
                        <div className="bx--col-xs-2 bx--col-md-1">
                            <div className="button--edit">edit</div>
                        </div>
                        <div className="bx--col-xs-12">
                            <Button>[v] Update</Button>
                            <Button kind="secondary">[X] Cancel</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

TileSelector.propTypes = {
    tiles: PropTypes.object.isRequired,
}

export default TileSelector
