// import at the very top of everything.
import './ignoreWarnings';
import React from 'react';
import Navigators from './src/navigators';
import {enableFreeze} from 'react-native-screens';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import LazyloadView from 'react-native-lazyload-view';
enableScreens(true);
enableFreeze(true);
export default () => (
  <Provider store={store}>
    <Navigators />
  </Provider>
);
