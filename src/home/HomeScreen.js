import React from 'react';
import { Button, View, Text, StyleSheet,Image } from 'react-native';
import { connect } from 'react-redux';

class HomeScreen extends React.Component {


  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home'
    }
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{padding:10}}>
        <Text>{this.props.count}</Text>

        <View style={{marginBottom:10}}>
          <Button
            title="INCREMENT"
            onPress={() => this.props.dispatch({ type: 'INCREMENT' })} 
          />
        </View>
        <View style={{marginBottom:10}}>
          <Button
            title="DECREMENT"
            onPress={() => this.props.dispatch({ type: 'DECREMENT' })} 
          />
        </View>
        <View style={{marginBottom:10}}>
          <Button
            title="Toggle Drawer"
            onPress={() => this.props.navigation.toggleDrawer()} 
          />
        </View> 
        <View style={{marginBottom:10}}>
          <Button
            title="Open Sub Page"
            onPress={() => navigate('Profile', {msg: 'hello profile screen!'})} 
          />
        </View> 
      </View>
    );
  }
}

export default connect(state => ({ count: state.count }))(HomeScreen);