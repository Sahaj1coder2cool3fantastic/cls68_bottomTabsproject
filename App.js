import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import fbScreen from './screens/fbScreen';
import inScreen from './screens/inScreen';
import { createAppContainer} from 'react-navigation'; 
import {createBottomTabNavigator} from 'react-navigation-tabs';


export default class App extends React.Component{
  render(){
    return (
    <AppContainer />
  );
  }
}

var TabNavigator = createBottomTabNavigator({
    fbScreen:{screen:fbScreen},
    inScreen:{screen:inScreen}
  })
  
  const AppContainer = createAppContainer(TabNavigator)