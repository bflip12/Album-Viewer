//Import libraries to help build a Component
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//Purpose of the card component is to reflect a container with nice styling
//for the details of the album. Card component absorbs the details that is
//passed from Album detail
const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
  <TouchableOpacity onPress={onPress} style={buttonStyle}>
    <Text style={textStyle}>
      {children}
    </Text>
  </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;
