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
import { Scene, Router,Modal } from 'react-native-router-flux'

import reducers from './reducers';

const logger = createLogger();

const middleware = [thunk, logger];
const store = compose(
    applyMiddleware(...middleware)
)(createStore)(reducers);

const RouterWithRedux = connect()(Router);

import {
    Actions,
} from 'react-native-router-flux';

import RoomsView from './components/RoomsView';
import RoomView from './components/RoomView';
import StreamingView from './components/StreamingView';
import TitleModal from './components/TitleModal';

import {
    NavigationBar,
    Title,
    Button,
    Icon
} from '@shoutem/ui';

import Umeng from 'air-umeng';

class App extends Component {


  constructor() {
    super();
    Umeng.startWithAppkey('55894b6d67e58e66c5000d6d');
  }

  render() {
    return (
        <Provider store={store}>
          <RouterWithRedux>
            <Scene key="modal" component={Modal}>
              <Scene key="root">
                <Scene key="rooms" component={RoomsView} initial
                       navBar={()=>{return  (
                                             <NavigationBar
                                                centerComponent={<Title>Living</Title>}
                                                rightComponent={<Button onPress={() =>{Actions.title()}}><Icon name="add-friend" /></Button>}
                                                />
                                          )
                     }}
                    />
                <Scene key="room" component={RoomView}
                       navBar={()=>{return  <NavigationBar centerComponent={<Title>Player</Title>}
                     leftComponent={<Button onPress={() =>{Actions.pop()}}><Icon name="back" /></Button>}/>}}/>
                <Scene key="stream" component={StreamingView}
                       navBar={()=>{return  <NavigationBar centerComponent={<Title>Streaming</Title>}
                     leftComponent={<Button onPress={() =>{Actions.pop()}}><Icon name="back" /></Button>}/>}}/>
              </Scene>
              <Scene key="title"  component={TitleModal} />
            </Scene>
          </RouterWithRedux>
        </Provider>
    );
  }
}

export default App;
//
//
//
//