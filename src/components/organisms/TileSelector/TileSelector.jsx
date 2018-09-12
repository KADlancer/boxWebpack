import React, { Component } from 'react';
import { Button, SelectableTile } from 'carbon-components-react';

import './TileSelector.css';
import CarbonButton from '_components/atoms/carbonButton/CarbonButton';

function handleClick() {
    console.log('handleClick TileSelector: ', this);
}
function onChange() {
    console.log('onChange TileSelector: ', this);
}

class TileSelector extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const listItems = this.props.tiles.map(item => (
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
        ));
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
                            <CarbonButton buttonType="primary" iconType="v">
                                Update
                            </CarbonButton>
                            <CarbonButton buttonType="secondary" iconType="X">
                                Cancel
                            </CarbonButton>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TileSelector;
