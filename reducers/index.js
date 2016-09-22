/**
 * Created by buhe on 16/9/18.
 */
import React, {
    Component,
} from 'react';
import {
    StyleSheet,
    AppRegistry,
    Dimensions,
    ScrollView
} from 'react-native';

import { combineReducers } from 'redux';
import routes from './routes';
import rooms from './rooms';
// ... other reducers

export default combineReducers({
  routes,
  rooms
  // ... other reducers
});