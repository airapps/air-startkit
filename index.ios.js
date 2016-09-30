/**
 * Created by buhe on 16/9/16.
 */

import React, {
    Component,
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    AppRegistry,
    Dimensions
} from 'react-native';

import Umeng from 'air-umeng';
import Mapcase from './mapcase';

class AirApps extends Component {
  constructor() {
    super();
    Umeng.startWithAppkey('55894b6d67e58e66c5000d6d');
  }

  render() {
    return <Mapcase />
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
