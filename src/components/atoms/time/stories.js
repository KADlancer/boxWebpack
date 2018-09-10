import React from 'react'
import { storiesOf } from '@storybook/react'

import Clock from './index'

storiesOf('Atoms/Time', module).add('default', () => <Clock>It is: </Clock>)
