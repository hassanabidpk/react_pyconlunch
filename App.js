// @flow
import React from 'react';
import { StyleSheet, Text, FlatList, ActivityIndicator, View, Image } from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state  = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
      base_url: "https://pyconlunchbeta.azurewebsites.net"
    }
  }

  componentDidMount() {
    this.fetchDataFromApi();

  }

  fetchDataFromApi = ()  => {
    const url = "https://pyconlunchbeta.azurewebsites.net/api/list.json";

    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {

        this.setState({
          data: res,
          error: null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading : false });
      })
  };

  handleRefresh = () => {
    this.setState(
      {
        refreshing: true
      },
      () => {
        this.fetchDataFromApi();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round />;
  };

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              avatar
              title={`${item.name}`}
              subtitle={<View style={styles.subtitleView}>
            <Text style={styles.menuText}>{item.menu}</Text>
            </View>}
              avatar={{ uri: `${this.state.base_url}${item.photo}`, width: 800, height: 600 }}
              containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}

        />
      </List>
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
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  menuText: {
    paddingLeft: 10,
    color: 'grey'
  },
  titleText: {
    fontWeight: 'bold'
  },
  restaurantImage: {
    width: 600, 
    height: 800
  }
});
