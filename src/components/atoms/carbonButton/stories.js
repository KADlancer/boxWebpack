import React from "react";
import { storiesOf } from "@storybook/react";

import { Button } from "carbon-components-react";
import CarbonButton from "./CarbonButton";

storiesOf("Atoms/CarbonButton", module)
    .add('default', () => (
        <Button className="some-class">
            Primary button
        </Button>
    ))
    .add('secondary', () => (
        <Button
            kind="secondary"
            className="some-class"
        >
            Secondary button
        </Button>
    ))
    .add('grouped', () => (
        <div>
            <Button
                kind="secondary"
                className="some-class"
            >
                Secondary button
            </Button>
            <Button className="some-class">
                Primary button
            </Button>
        </div>
    ))
    .add('primary with icon', () => (
        <CarbonButton buttonType="primary" iconType="v">
            Update
        </CarbonButton>
    ))
    .add('secondary with icon', () => (
        <CarbonButton buttonType="secondary" iconType="X">
            Cancel
        </CarbonButton>
    ));
