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
    ScrollView,
    ActivityIndicatorIOS,
} from 'react-native'

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

import { connect } from 'react-redux';

import { rooms } from '../actions/rooms';

//import BG from '../images/bg';

class RoomsView extends Component {

  constructor(props) {
    super(props);
    props.fetchRooms();
    console.log(props.rooms);
  }

  render() {
    return (<Screen style={{marginTop:70}}>
      <ScrollView>
        <ListView
            data={this.props.rooms.data}
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
                                          <Button styleName="dark" onPress={()=>{Actions.room({item:item})}}><Icon name="play"/></Button>
                                          <Subtitle numberOfLines={2}>{item.title}</Subtitle>
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

function bindAction(dispatch) {
  return {
    fetchRooms: () => dispatch(rooms()),
  }
}

export default connect(({routes,rooms}) => ({routes,rooms}), bindAction)(RoomsView);