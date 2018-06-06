import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App';
import { AppBarConfig } from '@cwds/components/lib/AppBar';
import Logo from '@cwds/components/lib/Logo';
import registerServiceWorker from './registerServiceWorker';

AppBarConfig.brand = () => (
  <Link to="/">
    <Logo />
  </Link>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
