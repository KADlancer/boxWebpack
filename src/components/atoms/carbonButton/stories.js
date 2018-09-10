import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from 'carbon-components-react';

storiesOf('Atoms/CarbonButton', module)
  .add('default', () => (
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
  )
)
