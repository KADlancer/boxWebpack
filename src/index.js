import React from 'react'
import ReactDOM from 'react-dom'

import './index.css';
import './css/app.css';

import App from './App'


require('./js/login');

require('./js/demo/tictactoe/game');

ReactDOM.render(<App />, document.getElementById('root'))


