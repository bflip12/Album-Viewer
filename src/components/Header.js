//Import libraries to help build a Component
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//make Component
export default class header extends React.Component {

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{this.props.headerText}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
});

//make component available to other parts of the app
