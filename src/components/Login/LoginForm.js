

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Login extends Component<Props> {
  constructor(props) {
    super(props)

  }

  onPress = () => {
    alert('login');   
  }

  render() {
    return (
      <View style={styles.container}>
          <TextInput style={styles.input} 
            placeholder="Email address"
            underlineColorAndroid= 'transparent'
          />
          <TextInput style={styles.input}
            placeholder="Password"
            underlineColorAndroid= 'transparent'
           />

           <TouchableOpacity onPress={this.onPress} style={styles.buttonContainer}>
             <Text style={styles.buttonText}>LOGIN</Text>
           </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container :{
    padding :20,
    marginBottom:150
  },
  input:{
    height: 40,
    backgroundColor:'rgba(255,255,255,0.5)',
    marginBottom:20,
    paddingHorizontal:10,
  },
  buttonContainer:{
    marginTop:30,
    backgroundColor: '#2c3e50',
    paddingVertical: 15,
    height:50
  },
  buttonText:{
    textAlign:'center',
    color:'#fff',
    fontWeight: '700',
    letterSpacing: 5
  }

});
