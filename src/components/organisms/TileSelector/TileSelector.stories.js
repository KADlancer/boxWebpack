import React from "react";
import { storiesOf } from "@storybook/react";

import data from "./TileSelector.json";
import TileSelector from "./TileSelector";

storiesOf("Organisms/TileSelector", module).add("default", () => (
    <TileSelector tiles={data.tiles} />
));
