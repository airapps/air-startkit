/**
 * Created by buhe on 16/9/29.
 */

import AMapView from 'air-amap'

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

export default  class Mapcase extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Map Case'
    }
    this._hanleMarkeDragEnd = this._hanleMarkeDragEnd.bind(this)
  }

  componentDidMount() {
    setTimeout(()=>{
      this.refs.map.animateToZoomLevel(10)
      AMapView.Search.AMapInputTipsSearch("肯德基","杭州").then((a)=>{
        console.log("AMapInputTipsSearch",a);
      }).catch((e)=>{console.log(e)})
      AMapView.Search.AMapWeatherSearch("下城区", true).then((a)=>console.log("AMapWeatherSearch:Live",a))
      AMapView.Search.AMapWeatherSearch("下城区", false).then((a)=>console.log("AMapWeatherSearch:Forecast",a))
    }, 3000)
  }

  render() {
    var {height, width} = Dimensions.get('window')
    return <View style={styles.container}>
      <AMapView onPress={(e)=>console.log("Map::onPress", e.nativeEvent)} onLongPress={()=>console.log(arguments)} ref="map" initialRegion={{latitude:30.315888, longitude:120.165817}} apiKey="9229aa34649d5120fa10bea11a680fed"
                showsUserLocation={true} showsCompass={true} zoomEnabled={true}  showsScale={true} showsTraffic={true} >
      </AMapView>
    </View>
  }

  _hanleMarkeDragEnd(e) {
    let point = e.nativeEvent.coordinate
    console.log("AMapMarkerDragend:", point);
    AMapView.Search.AMapRegeocodeSearch(point, 1500).then((a)=>{
      console.log("AMapRegeocodeSearch:",a);
      this.setState({title:a[0].formattedAddress});
      return AMapView.Search.AMapGeoCodeSearch(a[0].formattedAddress, a[0].city)
    }).then((a)=>{
      console.log("AMapGeoCodeSearch:",a);
    })
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
