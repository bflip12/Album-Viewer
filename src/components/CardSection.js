//Import libraries to help build a Component
import React from 'react';
import { View } from 'react-native';

//Purpose of the card component is to reflect a container with nice styling
//for the details of the album. Card component absorbs the details that is
//passed from Album detail
const CardSection = (props) => (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );

const styles = {
  containerStyle: {
      borderBottomWidth: 1,
      padding: 5,
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      borderColor: '#ddd',
      position: 'relative'
  }
};

export default CardSection;
