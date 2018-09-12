import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from 'carbon-components-react'

storiesOf('Atoms/Button', module)
    .add('default', () => <Button className="some-class">Primary button</Button>)
    .add('secondary', () => (
        <Button kind="secondary" className="some-class">
            Secondary button
        </Button>
    ))
    .add('grouped', () => (
        <div>
            <Button kind="secondary" className="some-class">
                Secondary button
            </Button>
            <Button className="some-class">Primary button</Button>
        </div>
    ))
    .add('primary with icon', () => (
        <Button>
            <svg width="16" height="12" viewBox="0 0 16 12">
                <g fillRule="nonzero">
                    <path d="M8.05 2a2.5 2.5 0 0 1 4.9 0H16v1h-3.05a2.5 2.5 0 0 1-4.9 0H0V2h8.05zm2.45 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM3.05 9a2.5 2.5 0 0 1 4.9 0H16v1H7.95a2.5 2.5 0 0 1-4.9 0H0V9h3.05zm2.45 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                </g>
            </svg>
            {' '}
            Update
        </Button>
    ))
    .add('secondary with icon', () => (
        <Button kind="secondary">
            Cancel
            {' '}
            <svg width="16" height="12" viewBox="0 0 16 12">
                <g fillRule="nonzero">
                    <path d="M8.05 2a2.5 2.5 0 0 1 4.9 0H16v1h-3.05a2.5 2.5 0 0 1-4.9 0H0V2h8.05zm2.45 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM3.05 9a2.5 2.5 0 0 1 4.9 0H16v1H7.95a2.5 2.5 0 0 1-4.9 0H0V9h3.05zm2.45 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                </g>
            </svg>
        </Button>
    ))
