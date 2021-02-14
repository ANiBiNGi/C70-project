
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ReadStoryScreen from './Screens/ReadStoryScreen'
import WriteStoryScreen from './Screens/WriteStoryScreen'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { Header } from 'react-native-elements';

export default class App extends React.Component{
  render(){
  return (  
    <AppContainer/>
  );
}
}
const TabNavigator = createBottomTabNavigator({
  WriteScreen: {screen : WriteStoryScreen},
  ReadScreen: {screen : ReadStoryScreen}
},{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName
      if(routeName === 'ReadScreen'){
        return(
          <Image source = {require("./images/read.png")}
          style = {{width:30,height:30}}/>
        )
      }
      else if(routeName === 'WriteScreen'){
        return(
          <Image source = {require("./images/write.png")}
          style = {{width:30,height:30}}/>
        )
      }
    }
  })
})
const AppContainer = createAppContainer(TabNavigator)
