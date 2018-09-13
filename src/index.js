import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from './components/views/dashboard'
import Utilities from './components/_utilities'
import './css/styles.scss'

const Check = new Utilities()
Check.run()

ReactDOM.render(React.createElement(Dashboard), document.getElementById('root'))
