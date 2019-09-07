import React from 'react';
import {Button,Text,View} from 'react-native';
export default class ProfileScreen extends React.Component {

  
  static navigationOptions = {
    drawerLabel: 'ProfileScreen',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/icons/records.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

    static navigationOptions = {
      title: 'ProfileScreen',
    };
    render() {
      const msg = this.props.navigation.getParam('msg', 'no message');
      return (
        <View>
          <Text>message from parent screen: {msg}</Text>
          <Button
            title="Back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }
  