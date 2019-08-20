import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {fetch_status_reducer} from './fetch_posts_redux';

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: 'lightblue'
  },
});

const store = createStore(fetch_status_reducer);

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
    this._getPosts();
  }
  
  async _getPosts() 
  {
    try 
    {
      let response = await fetch('https://www.reddit.com/r/NintendoSwitch.json');
      let data = await response.json();
      this.setState({data: data.data.children.map((child, index) => {
        return {
          key: index,
          text: child.data.title
        }
      })})
    }
    catch(err)
    {
      console.log(err);
    }
  }

  render() {
  return (
    <FlatList
      style={{flex:1}}
      data={this.state.data}
      renderItem={({item}) => <SingleItem key={item.key} text={item.text} />}
      keyExtractor={(item, index) => item.key.toString()}
    />
  )
  }
}

const App = () => {
 return (
  <Provider store={store}>
    <View style={styles.container} >
      <Custom />
    </View>
  </Provider>
  )
}

export default App;