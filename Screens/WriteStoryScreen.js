import React from 'react'
import {Text, View,StyleSheet, TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state={
        title:' ',
        author:' ',
        storytext: ' '
    }
    }
    render(){
        return(
            <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}> 

<TextInput
placeholder="Story Title"
onChangeText= {(text)=>{
this.setState({
title: text
 })
   }}
value={this.state.title}
//style={styles.title}
placeholderTextColor='black'/>

<TextInput
placeholder="Author"
onChangeText= {(text)=>{
this.setState({
author: text
 })
   }}
value={this.state.title}
//style={styles.title}
placeholderTextColor='black'/>

<TextInput
placeholder="Write your Story"
onChangeText= {(text)=>{
this.setState({
storytext: text
 })
   }}
value={this.state.title}
//style={styles.title}
placeholderTextColor='black'/>

<TouchableOpacity title = "Submit Button">
<Text> Submit </Text>
</TouchableOpacity>

            </View> 
        )   
    }
}


//const styles = StyleSheet.create({})
