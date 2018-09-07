import React from 'react';
import { configure, addDecorator } from '@storybook/react'
import infoAddon, { withInfo, setDefaults } from '@storybook/addon-info'
import { setOptions } from '@storybook/addon-options'

setOptions({
	name: `KADlancers Sandbox`,
	url: 'https://github.com/KADlancer/boxWebpack',
});

import './style.css'


const req = require.context('../src/', true, /.*stor(y|ies)\.js$/);
function loadStories() {
	req.keys().forEach(filename => req(filename));
}

setDefaults({
	header: false, // Toggles display of header with component name and description
	inline: false, // Displays info inline vs click button to view
	source: true,  // Displays the source of story Component
	maxPropStringLength: 200, // Displays the first 200 characters in the default prop string
});

addDecorator((story, context) => withInfo(context.kind)(story)(context));
configure(loadStories, module);
