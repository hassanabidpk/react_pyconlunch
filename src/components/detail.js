import React from 'react';
import { StyleSheet, Text, FlatList, ActivityIndicator, View, Image } from 'react-native';
import { List, ListItem, SearchBar, Avatar } from "react-native-elements";
import { StackNavigator } from 'react-navigation';
import { MapView } from 'expo';


export default class DetailScreen extends React.Component {
  render() {
    const { navigate, state: { params } } = this.props.navigation;
    return (
      <View style={styles.subtitleView}>
        <Text style={styles.dTitleText}>{params.name}</Text>
        <Text style={styles.locText}>{params.menu}</Text>
      </View>
    //   <MapView
    //    style={{ flex: 1 }}
    //    initialRegion={{
    //      latitude: 37.78825,
    //      longitude: -122.4324,
    //      latitudeDelta: 0.0922,
    //      longitudeDelta: 0.0421,
    //    }}
    //  />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   subtitleView: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingTop: 20,
  },
  dTitleText: {
    fontSize: 28,
    color: 'black',
    textAlign: 'center'
  },
  menuText: {
    paddingLeft: 10,
    color: 'grey'
  },
  locText: {
    paddingLeft: 10,
    color: 'grey',
    marginTop: 6,
    fontSize: 12
  },
  titleText: {
    fontWeight: 'bold'
  },
  restaurantImage: {
    width: 600,
    height: 800
  },
  detailViewContainer: {
    paddingLeft: 20,
  }
});
