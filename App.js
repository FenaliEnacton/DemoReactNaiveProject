/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainStackNavigator from './src/Pages/MainStackNavigator';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <MainStackNavigator />
//     </NavigationContainer>
//   );
// };
class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    fontSize: 50,
    alignItems: 'center',
    paddingTop: 80,
  },
  input: {
    borderWidth: 1,
    marginTop: 20,
    fontSize: 20,
    padding: 4,
    width: 200,
  },
  login: {
    justifyContent: 'center',
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    color: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
