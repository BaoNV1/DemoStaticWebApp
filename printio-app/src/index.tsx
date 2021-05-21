import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from "./serviceWorker";
import { Provider } from 'react-redux';
import store from './configs/configureStore';
import setTitle from 'setTitle';
import { Home } from 'components/Home';
import { initializeIcons } from '@fluentui/react/lib/Icons';

initializeIcons()

setTitle();
ReactDOM.render(
  <Provider store={store}>
    <Home/>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
