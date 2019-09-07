import React from 'react'; 
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import  InfoScreen from './info/InfoScreen';
import SettingsScreen from './settings/SettingsScreen'; 
import Drawer from "./home/Drawer";
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeIconWithBadge from "./common/IconWithBadge";
import { Provider } from 'react-redux';
import store from './store';
  
const TabNavigator = createBottomTabNavigator({ 
    Home:Drawer,
    Info: InfoScreen,
    Settings: SettingsScreen,
  },  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          IconComponent = HomeIconWithBadge;
        } else{
          iconName = `ios-options`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);
  
let TabNavigatorAppContainer = createAppContainer(TabNavigator);
export default class TabApp extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <TabNavigatorAppContainer />
        </Provider>
      );
    }
  }
  
  