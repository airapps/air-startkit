/**
 * Created by buhe on 16/9/18.
 */

import React, {
    Component,
} from 'react';

import {
    View
} from 'react-native';

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Scene, Router } from 'react-native-router-flux'

import reducers from './reducers';

const logger = createLogger();

const middleware = [thunk, logger];
const store = compose(
    applyMiddleware(...middleware)
)(createStore)(reducers);

const RouterWithRedux = connect()(Router);

import RoomsView from './components/RoomsView';
import RoomView from './components/RoomView';
import StreamingView from './components/StreamingView';

import {
    NavigationBar,
    Title
} from '@shoutem/ui';

import Umeng from 'air-umeng';

class App extends Component {


  constructor() {
    super();
    Umeng.startWithAppkey('55894b6d67e58e66c5000d6d');
  }

  render () {
    return (
        <Provider store={store}>
          <RouterWithRedux>
            <Scene key="root" navBar={()=>{return  <NavigationBar centerComponent={<Title>Living</Title>}/>}}>
              <Scene key="rooms" component={RoomsView} initial/>
              <Scene key="room" component={RoomView}/>
              <Scene key="stream" component={StreamingView}/>
            </Scene>
          </RouterWithRedux>
        </Provider>
    );
  }
}

export default App;
