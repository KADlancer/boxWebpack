import React from 'react'
import { storiesOf } from '@storybook/react'

import WidgetReleaseNotes from './WidgetReleaseNotes'

import data from './WidgetReleaseNotes.json'

storiesOf('Organisms/Widgets', module).add('release notes', () => (
    <WidgetReleaseNotes dataReleaseNotes={data.releaseNotes} />
))
