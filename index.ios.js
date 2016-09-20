/**
 * Created by buhe on 16/9/16.
 */

import React, {
    Component,
} from 'react';
import {
    StyleSheet,
    AppRegistry,
    Dimensions
} from 'react-native';

import {
    Heading,
    View,
    Tile,
    Text,
    Title,
    Subtitle,
    Caption,
    Icon,
    Overlay,
    Button,
    TextInput,
    NavigationBar,
    Screen,
    ListView,
    Row,
    Divider
} from '@shoutem/ui';

import App from './App';

class AirApps extends Component {
  constructor() {
    super();
  }

  render() {
    return <App />
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('AirKit', () => AirApps);
