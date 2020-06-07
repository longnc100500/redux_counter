/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';

import Button from './Components/Button';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { count: 0 };
  // }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.myVal}</Text>
        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40, backgroundColor: 'yellowgreen', width: 70, height: 40 }}
          onPress={() => this.props.dispatch({ type: 'ADD' })}
        >
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Add
        </Text>

        </TouchableOpacity>
        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, backgroundColor: 'red', width: 70, height: 40 }}
          onPress={() => this.props.dispatch({ type: 'SUB' })}
        >
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Sub
        </Text>
        </TouchableOpacity>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',

  }
});
const mapStateToProps = state => {
  return { myVal: state.value }
}
export default connect(mapStateToProps)(App);
//export default App;

