import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: 'lightblue'
  },
});

class Custom extends Component {
  constructor(props) {
  super(props);
  this.state = {data: []}
  }
  
  render() {
  return (
    <View/>
  )
  }
}

const App = () => {
 return (
  <View style={styles.container} >
    <Custom />
  </View>
  )
}

export default App;