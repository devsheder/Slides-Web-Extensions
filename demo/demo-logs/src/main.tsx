import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import { store } from './store/store';
import { listenForBackgroundScriptMessages } from './background-script-bridge';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

listenForBackgroundScriptMessages();

// const timestamp = new Date().getTime();
// setInterval(() => {
//   store.dispatch(actions.addLogs({ logs: [
//     { level: 'LOG', message: 'verbose log', status: 'ERROR', timestamp },
//     { level: 'LOG', message: 'verbose log', status: 'OK', timestamp },
//     { level: 'INFO', message: 'info log', status: 'OK', timestamp: new Date().getTime() },
//     { level: 'WARN', message: 'warn log', status: 'OK', timestamp: new Date().getTime() },
//     { level: 'ERROR', message: 'error log', status: 'OK', timestamp: new Date().getTime() },
//   ]}));

// }, 2000)