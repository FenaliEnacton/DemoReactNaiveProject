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

const Notification = () => {
  return (
    <View style={styles.container}>
      <Text>Hello Notification</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    fontSize: 24,
    justifyContent: 'center',
  },
});
export default Notification;
