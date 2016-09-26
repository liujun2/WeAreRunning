import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
} from'react-native';
var running =React.createClass({
    getInitialState: function() {
      var ds = new ListView.DataSource({rowHasChanged: (r3, r4) => r3 !== r4});
        return {
          dataSource: ds.cloneWithRows(['row 1', 'row 2','row 3','row 4','row 5','row 6','row 7','row 8']),
        };
    },
    render: function() {
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =><Text>{rowData}</Text>}
        />
      );
    }
});
module.exports = running;
