import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from './components/views/dashboard'
import utilities from './components/_utilities'
import './css/styles.scss'

utilities()

ReactDOM.render(React.createElement(Dashboard), document.getElementById('root'))
