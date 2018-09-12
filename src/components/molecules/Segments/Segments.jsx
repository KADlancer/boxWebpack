import React, { Component } from 'react';

import './Segments.scss';
import './Segments_custom.scss';

class Segments extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let className = 'ui segment';
        if (React.Children.count(this.props.children) > 1) {
            className += 's';
        }
        if (this.props.className) {
            className += ` ${this.props.className}`;
        }

        const children = this.props.children;
        return <div className={className}>{React.Children.map(children, (child, i) => child)}</div>;
    }
}

export default Segments;
