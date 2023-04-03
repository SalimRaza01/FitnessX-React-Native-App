import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";


export default function Login(props) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const handleEmailChange = text => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(text)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
    setEmail(text);
  };
  return (

    <View>
      <View >
        <Text style={styles.subtitle1}>
          Hey there,
        </Text>
        <Text style={styles.para1}>Welcome Back
        </Text>
        <View style={styles.email}>
          <Image style={styles.elogo} source={require('../assets/Message.png')} />
          <TextInput
            placeholder="Email" placeholderTextColor={'grey'} color='black'
            value={email}
            onChangeText={handleEmailChange}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

        <View style={styles.pass}>
          <Image style={styles.plogo} source={require('../assets/Lock.png')} />
          <TextInput
            placeholder="Password" placeholderTextColor={'grey'} color='black'
          //   value={fname}
          />

        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('forgetpass')}>
          <Text style={styles.forgetlink}>Forget your password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.mybtn} onPress={() => props.navigation.navigate('HomeScreen')}>
        <Image style={styles.logologin} source={require('../assets/Login.png')} />
        <Text style={styles.btntext}>   Login</Text>


      </TouchableOpacity>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: responsiveHeight(2) }}>
        <View style={{ flex: 1, height: responsiveHeight(0.1), backgroundColor: 'grey' }} />
        <View>
          <Text style={{ marginLeft: responsiveWidth(5), marginRight: responsiveWidth(5), textAlign: 'center', fontSize: responsiveFontSize(2) }}>or</Text>
        </View>
        <View style={{ flex: 1, height: responsiveHeight(0.1), backgroundColor: 'grey' }} />
      </View>
      <View style={styles.sociallogin}>
        <Image style={styles.googlelogin} source={require('../assets/google.png')} />
        <Image style={styles.fblogin} source={require('../assets/facebook.png')} />
      </View>
      <View style={styles.loginlink}>
        <Text>Don't have an account yet?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Registration')}>
          <Text style={{ color: '#C58BF2' }}> Register</Text>
        </TouchableOpacity>
      </View>


    </View>
  )

}
const styles = StyleSheet.create({

  email: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: "white",
    borderColor: 'grey',
    borderRadius: 10,
    width: "80%",
    width: responsiveWidth(80),
    height: responsiveHeight(6),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(3)
  },
  pass: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: "white",
    borderColor: 'grey',
    borderRadius: 10,
    width: "80%",
    width: responsiveWidth(80),
    height: responsiveHeight(6),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(3)
  },
  para1: {

    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color: 'black',
    marginLeft: responsiveWidth(29),
    marginTop: responsiveHeight(0.5)
  },
  subtitle1: {
    fontSize: responsiveFontSize(2.3),
    color: 'black',
    textAlign: 'center',
    marginTop: responsiveHeight(5),
    fontFamily: 'poppins'
  },


  mybtn: {
    flexDirection: 'row',
    backgroundColor: '#92A3FD',
    borderRadius: 30,
    width: responsiveWidth(80),
    height: responsiveHeight(6.8),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(26)
  },
  btntext: {
    flex: 1,
    fontSize: responsiveFontSize(2),

    marginTop: responsiveHeight(2),
    color: 'white',
    fontWeight: 'bold'
  },

  elogo: {

    marginLeft: responsiveWidth(2),
    marginTop: responsiveHeight(2),
    marginRight: responsiveWidth(3),
  },
  plogo: {

    marginLeft: responsiveWidth(2),
    marginTop: responsiveHeight(2),
    marginRight: responsiveWidth(3),
  },
  sociallogin: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  googlelogin: {

    marginLeft: responsiveWidth(33),
    marginTop: responsiveHeight(4)
  },
  fblogin: {

    marginLeft: responsiveWidth(7),
    marginTop: responsiveHeight(4)
  },
  forgetlink: {
    flexDirection: 'row',
    marginLeft: responsiveWidth(30),
    marginTop: responsiveHeight(3),
    color: 'grey'
  },
  checkb: {
    flexDirection: 'row',
    marginLeft: responsiveWidth(2),
    marginTop: responsiveHeight(2)
  },
  checktext: {
    fontSize: responsiveFontSize(1.6),
    color: 'grey',
    marginTop: responsiveHeight(1.2),
    marginLeft: responsiveWidth(2),
    marginRight: responsiveWidth(20),
    fontFamily: 'poppins'
  },
  loginlink: {
    flexDirection: 'row',
    marginLeft: responsiveWidth(20),
    marginTop: responsiveHeight(2)
  },
  logologin: {
    marginLeft: responsiveWidth(30),
    marginTop: responsiveHeight(2)

  },
  error: {
    color: 'red',
    textAlign: 'center',
    margintop: responsiveHeight(5)
  },
})