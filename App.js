///Vague comments being used for learning purposes
//Import libraries to help build a Component
import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Create a component
export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

//Render it to the device
// const styles = StyleSheet.create({
//   viewStyle: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });

///Vague comments being used for learning purposes
//Import libraries to help build a Component
// import React from 'react';
// import { Text, AppRegistry } from 'react-native';
//
// //Create a component
// const App = () => (
//   <Text>Some Text</Text>
// );
//
// //Render it to the device
// AppRegistry.registerComponent('my-app', () => App);
