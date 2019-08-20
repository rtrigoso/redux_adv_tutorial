import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import {
  mapStateToProps, 
  mapDispatchToProps, 
  reducer
} from './fetch_posts_redux';

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: 'lightblue'
  },
});

const store = createStore(reducer);

class SingleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []}
  }

  render() {
    return (
      <View><Text>{this.props.text}</Text></View>
    );
  }
}

class Custom extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []}
  }

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <FlatList
        style={{flex:1}}
        data={this.props.posts}
        renderItem={({item}) => <SingleItem key={item.key} text={item.text} />}
        keyExtractor={(item, index) => item.key.toString()}
      />
    )
  }
}

const ConnectedCustom = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Custom);

const App = () => {
 return (
  <Provider store={store}>
    <View style={styles.container} >
      <ConnectedCustom />
    </View>
  </Provider>
  )
}

export default App;