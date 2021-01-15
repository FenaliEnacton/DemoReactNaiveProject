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
import {useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import Home, {HomeScreen, NotificationsScreen} from './Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Notification from './Notification';
import display from './display';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MyDrawerNavigation = ({navigation, route}) => {
  return (
    <Drawer.Navigator initialRouteName="display">
      <Drawer.Screen
        name="display"
        initialParams={{params: route.name}}
        component={display}
      />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Notifications" component={Notification} />
    </Drawer.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#9AC4F8',
        },
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen name="Login" component={Login} options={{title: 'Login'}} />
      <Stack.Screen
        name="display"
        component={MyDrawerNavigation}
        options={{title: 'display'}}></Stack.Screen>

      <Stack.Screen
        name="Drawer"
        component={Home}
        options={{title: 'Drawer'}}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
