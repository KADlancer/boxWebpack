import React from 'react'
import ReactDOM from 'react-dom'

import './css/styles.scss'

import Dashboard from './components/views/dashboard/Dashboard'

if (process.env.NODE_ENV !== 'production') {
    const { whyDidYouUpdate } = require('why-did-you-update')
    whyDidYouUpdate(React)
}

ReactDOM.render(<Dashboard />, document.getElementById('root'))
