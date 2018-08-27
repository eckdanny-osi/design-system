import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import 'prismjs/themes/prism-tomorrow.css';
import App from './App';
import './config';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
