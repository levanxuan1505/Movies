// import at the very top of everything.
import './ignoreWarnings';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Navigators from './src/navigators';
//
export default () => (
  <Provider store={store}>
    <Navigators />
  </Provider>
);
