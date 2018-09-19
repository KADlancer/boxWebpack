import React from 'react'
import { storiesOf } from '@storybook/react'

import { withTests } from '@storybook/addon-jest';
import results from '../../../../.jest-test-results.json';




import Clock from './index'

storiesOf('Atoms/Clock', module)
    //.addDecorator(withTests({results,}))
    .add('default', () => <Clock>Storytime: </Clock>)
