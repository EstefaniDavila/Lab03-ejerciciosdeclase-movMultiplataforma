import React, { Component } from 'react';
import {StyleSheet,TouchableOpacity,Text,View,Image,TextInput,} from 'react-native';
import Message from './components/message/Message';
import Body from './components/body/body';

const provincias = [
  {
    id: 1,
    name: 'Caylloma',
  },
  {
    id: 2,
    name: 'Bagua',
  },
  {
    id: 3,
    name: 'Cajacarma',
  },
];

export default class App extends Component{

  constructor (props){
    super(props);
    this.state = {
      textValue: '',
      count: 0,
    };
  }

  changeTextInput = text =>{
    console.log(text)
    this.setState({textValue: text});
  };

  render(){
    return (
      <View style={styles.container}>

        <Message/>
        
        <View style={styles.text}>
          <Text> Ingrese su edad </Text>
        </View>

        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText = {text => this.changeTextInput(text)}
          value={this.state.textValue}
        />

        <Body textBody={'Texto en Body :)'} onBodyPress={this.onPress}/>

        <View style={[styles.countContainer]}>
          <Text style={styles.countText}>{this.state.count}</Text>
        </View>

        {provincias.map(item => (
          <View>
            <Text>{item.name}</Text>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  text: {
    alignItems: 'center',
    padding: 10,
  },

  countContainer: {
    alignItems: 'center',
    padding: 10,
  },

  countText: {
    color: '#FF00FF',
  },

});