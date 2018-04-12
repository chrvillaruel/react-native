

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import LoginForm from './LoginForm';

console.log('Login form');
export default class Login extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
         <View style={styles.logoContainer}>  
             <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Het_logo_van_REC_sinds_maart_2016.png'}} style={{width: 200, height: 100}} />
         </View>
         <View style={styles.formContainer}>  
            <LoginForm/>
         </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container :{
     flex: 1,
     backgroundColor: '#16a085',
     padding:30
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  title:{
    color:'white',

  },
  formContainer:{

  },
});
