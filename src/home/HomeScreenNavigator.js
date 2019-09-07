import React from 'react'; 
import { createStackNavigator } from 'react-navigation-stack';
import {  StyleSheet,Image } from 'react-native';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

const Navigator = createStackNavigator({
  InnerHome: {
    screen: HomeScreen,
  },
  Profile:{
      screen:ProfileScreen
  }
});
  
const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });
  
  Navigator.navigationOptions = {
    drawerLabel: 'navigator',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/icons/records.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

export default  Navigator;
  