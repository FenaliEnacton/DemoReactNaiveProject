import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const display = ({navigation, route}) => {
  return (
    <View>
      <Text>{route.params.name}</Text>
    </View>
  );
};
export default display;
