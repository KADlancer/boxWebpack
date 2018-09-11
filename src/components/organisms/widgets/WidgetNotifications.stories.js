import React from "react";
import { storiesOf } from "@storybook/react";

import WidgetNotifications from "./WidgetNotifications";

import data from "./WidgetNotifications.json";

storiesOf("Organisms/Widgets", module).add("notification", () => (
	<WidgetNotifications dataNotifications={data.notifications} />
));
