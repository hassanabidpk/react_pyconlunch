import React from 'react';
import { StyleSheet, Text, FlatList, ActivityIndicator, View, Image } from 'react-native';
import { List, ListItem, SearchBar, Avatar } from "react-native-elements";
import { StackNavigator } from 'react-navigation';
import { MapView } from 'expo';


export default class DetailScreen extends React.Component {
  render() {
    const { navigate, state: { params } } = this.props.navigation;
    const imgUrl =  params.img;
    return (
      <View style={styles.dContainer}>
        <Text style={styles.dTitleText}>{params.name}</Text>
        <Avatar
                source={{uri: imgUrl}}
                onPress={() => console.log("Works!")}
                containerStyle={{marginBottom: 12, marginTop: 20}}
                avatarStyle={{resizeMode: "cover"}}
                width={300}
                height={200}
          />
        <Text style={styles.dMenuText}>{params.menu}</Text>
          <Text style={styles.dMenuText}>{params.address}</Text>
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
  dContainer: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30
  },
   subtitleView: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingTop: 20,
  },
  dTitleText: {
    fontSize: 28,
    color: 'black',
    marginTop: 12,
    textAlign: 'center'
  },
  menuText: {
    paddingLeft: 10,
    color: 'grey'
  },
  dMenuText: {
    fontSize: 16,
    paddingLeft: 10,
    color: 'grey',
    marginTop: 12
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
