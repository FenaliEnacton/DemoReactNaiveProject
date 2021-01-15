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

// function HomeScreen({navigation, route}) {
//   console.log('route', route);
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Button
//         onPress={() => navigation.navigate('Notification')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

const Home = ({navigation, route}) => {
  //   console.log('route', props);
  //   const name = navigation.getParam('name');
  console.log('name', name);
  return (
    <View style={styles.container}>
      {/* <Text>Hello {props.route?.params?.name ? props.route?.params?.name : ''}</Text> */}
      {/* <Text>{route.params.name}</Text> */}
      <Text>Hello Home Screen</Text>
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
export default Home;
// export {HomeScreen, NotificationsScreen};
