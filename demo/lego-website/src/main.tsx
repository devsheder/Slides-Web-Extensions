import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Logger } from './logger'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)


setInterval(() => Logger.log('Everything is awesome!'), 2000);