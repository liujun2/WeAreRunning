// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Picker,
// } from 'react-native';
// class running extends Component {
//   // getInitialState() {
//   //   return {
//   //     language: '',
//   //   };
//   // }
//     constructor(props) {
//       super(props);
//       this.state = { language: '' };
//
//       // this.props.text='props text';
//       // console.log(this.props.text);
//     }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text >
//           Picker选择器实例
//         </Text>
//         <Picker
//           style={{width:200}}
//           selectedValue={this.state.language}
//           onValueChange={(value) =>this.setState({language: value})}>
//           <Picker.Item label="Java" value="java" />
//           <Picker.Item label="JavaScript" value="javaScript" />
//         </Picker>
//         <Text>当前选择的是:{this.state.language}</Text>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
// module.exports = running;
