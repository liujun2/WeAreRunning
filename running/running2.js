/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  TouchableOpacity,
  ListView,
} from 'react-native';
class running extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless' };
  };
  getInitialState() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      return {
        dataSource: ds.cloneWithRows(['row 1', 'row 2','row 3','row 4','row 5','row 6','row 7','row 8']),
      };
  };
  onPressCallback = () => {
    setTimeout(()=> {
        alert('点击了按钮');
    }, 1000);
  };
  render() {
    return (
      <View style={styles.container}>
        <View >
          <Text style={styles.welcome}>
            距离13周还有XX次，加屁油
          </Text>
        </View>
        <View >
          <TouchableOpacity
            onPress={this.onPressCallback}
          >
            <Text >+</Text>
          </TouchableOpacity>
        </View >
        <ListBlink dataSource = getInitialState()/>
        <View >
          <TouchableOpacity
            onPress={this.onPressCallback}
          >
            <Text >Go</Text>
          </TouchableOpacity>
        </View >
      </View>
    );
  }
}
class ListBlink extends Component{
  constructor(props) {
    super(props);
    this.state = { dataSource : this.props.dataSource };
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
    );
  }
}
class Blink extends Component{
    constructor(props) {
      super(props);
      this.state = {showText: true};
    }
    render() {
      return (
        <View style={styles.list}>
          <BlinkItem text='跑步分钟'/>
          <BlinkItem text='走路分钟'/>
          <BlinkItem text='循环次数'/>
          <Text >
          －－－－－－－－－－－－－
          </Text>
        </View>
      );
    }
}
class BlinkItem extends Component{
    constructor(props) {
      super(props);
      this.state = { text : this.props.text };
    }
    render() {
      return (
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => this.setState({text})}
          editable = {true}
          maxLength = {40}
          value={this.state.text}
        />
      );
    }
}
// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {showText: true};
//
//     // Toggle the state every second
//     setInterval(() => {
//       console.log(this.state.showText)
//       this.setState({ showText: !this.state.showText });
//     }, 1000);
//
//     console.log(this.props.text);
//   }
//
//   render() {
//     let display = this.state.showText ? this.props.text : ' ';
//     return (
//       <Text>{display}</Text>
//     );
//   }
// }
//
// class running extends Component {
//   render() {
//     return (
//       <View>
//         <Blink text='I love to blink' />
//         <Blink text='Yes blinking is so great' />
//         <Blink text='Why did they ever take this out of HTML' />
//         <Blink text='Look at me look at me look at me' />
//       </View>
//     );
//   }
// }
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  list: {
    // flexDirection: 'column',
    flex: 3,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInputStyle: {
    height: 30,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 30,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
module.exports = running;
