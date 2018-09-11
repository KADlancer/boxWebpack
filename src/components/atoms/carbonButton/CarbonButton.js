import React, { Component } from "react";
import { Button } from "carbon-components-react";

class CarbonButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let type = "";
        if (this.props.buttonType) {
            type = this.props.buttonType;
        }

        const children = this.props.children;

        return (
            <Button kind={type} className={this.props.className}>
                {this.props.iconType ? `[${this.props.iconType}] ` : ""}
                {children}
            </Button>
        );
    }
}

export default CarbonButton;
