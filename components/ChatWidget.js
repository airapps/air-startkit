/**
 * Created by buhe on 16/9/20.
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

import rongcloud from 'air-rongcloud';

export default class ChatWidget extends Component {
  constructor() {
    super();
    this.state = {
      imState:'',
      recv:''
    };

    var self = this;

    rongcloud.connect('adsqgefLaGu4WbnLSCd9fXTjCZAARYUROEXlycCBdiPk2j1SS9iZQpLKEkHDX3KrIItfQpNia7/dUr8uw6yLbA==')
        .then((userId)=>{
          console.log('connect im' + userId);
          self.setState({imState:'connect im' + userId});
        }).catch((e) => {
          console.log(e)
        });

    rongcloud.eventEmitter.addListener('msgRecved',function(body){
      console.log('recv ...' + JSON.stringify(body));
      self.setState({recv:JSON.stringify(body)});
    })
  }

  render() {
    var self = this;

    return <View style={styles.container}>
      <Text>Hello AirApps hehhe </Text>
      <Text>IM State : {this.state.imState}</Text>
      <Button onPress={()=>{rongcloud.sendMessage('private','1',{'type':'text','content':'hello buhe'},null,null)}}><Text>Send Message</Text></Button>
      <Text>Recv : {this.state.recv}</Text>
      <Button onPress={()=>{rongcloud.getLatestMessages('private','1',10).then((msg)=>{self.setState({recv:JSON.stringify(msg)});})}}><Text>Get Last</Text></Button>
    </View>
  }
}
