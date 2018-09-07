import { configure, addDecorator } from '@storybook/react'
import { withInfo, setDefaults } from '@storybook/addon-info'

import './style.css'


const req = require.context('../src/', true, /.*stor(y|ies)\.js$/);
function loadStories() {
	req.keys().forEach(req)
}

setDefaults({
  inline: true,
})

addDecorator((story, context) => withInfo(context.kind)(story)(context))
configure(loadStories, module);
