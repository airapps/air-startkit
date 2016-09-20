/**
 * Created by buhe on 16/9/20.
 */
'use strict';
import React, {
    Component,
} from 'react';
import {
    StyleSheet,
    AppRegistry,
    Dimensions,
    ScrollView
} from 'react-native';

import { connect } from 'react-redux';

import {
    Actions,
} from 'react-native-router-flux';

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
    Divider,
    Image
} from '@shoutem/ui';

var {height, width} = Dimensions.get('window');

class RoomsView extends Component {

  constructor() {
    super()
  }

  render() {
    return (<Screen style={{marginTop:70}}>
      <ScrollView>
        <ListView
            data={['App1','App2','App3','App4','App5','App6','App1','App2','App3','App4','App5','App6']}
            //loading={false}
            //onLoadMore={...}
            //onRefresh={...}
            //renderFooter={()=>{return <Divider styleName="line" />}}
            //renderHeader={...}
            renderRow={item => { return (
                                    <View>
                                        <Image
                                          style={{height:width/2,width:width}}
                                          //styleName="small rounded-corners"
                                          source={{ uri: 'http://shoutem.github.io/img/ui-toolkit/examples/image-2.png' }}
                                        >
                                        <Button styleName="dark" onPress={()=>{Actions.room({})}}><Icon name="play"/></Button>
                                        </Image>
                                      </View>
                                  )}}
            //renderSectionHeader={()=>{return <Divider styleName="line" />}}
            //style={...}
            />
      </ScrollView>
    </Screen>)
  }
}

export default connect(({routes}) => ({routes}))(RoomsView);