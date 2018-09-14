import React from 'react'
import { storiesOf } from '@storybook/react'

import ResourceDisplay from './ResourceDisplay'

storiesOf('Game/Layout/Resource', module)
    .add('Current Gold', () => <ResourceDisplay type="gold" label="Gold" current="3560" />)
    .add('Current Wood', () => <ResourceDisplay type="wood" label="Wood" current="480" />)
    .add('Current Food', () => <ResourceDisplay type="food" label="Food" current="160" />)
