//Import libraries to help build a Component
import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


//make Component
export default class AlbumList extends React.Component {

  state = { albums: [] };

  componentWillMount() {
    //console.log('componentWillMount in AlbumList');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  //Passes album down to album detail as a prop
  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} albumData={album} />
    );
  }

  render() {
    console.log('testing state');
    console.log(this.state);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}
//
// const styles = StyleSheet.create({
//   viewStyle: {
//     backgroundColor: '#F8F8F8',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 60,
//     paddingTop: 15,
//     shadowColor: '#000000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.4,
//     elevation: 2,
//     position: 'relative',
//   },
//   textStyle: {
//     fontSize: 20
//   }
// });
