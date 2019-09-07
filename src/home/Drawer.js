import React from 'react'; 
import { createDrawerNavigator } from 'react-navigation-drawer'; 
import HomeScreenNavigator from './HomeScreenNavigator';
 
  
  const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: HomeScreenNavigator,
    }
  });
   
  export default MyDrawerNavigator;