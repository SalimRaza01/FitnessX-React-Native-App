import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
// import CheckBox from 'react-native-check-box';
import CheckBox from '@react-native-community/checkbox';

export default function Registration(props) {
  const [firstname, setFirstName] = useState('');
  const [firstnameError, setFirstNameError] = useState('');
  const [lastname, setLastName] = useState('');
  const [lastnameError, setLastNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [selected, setSelection] = useState(false)

  const handleFirstNameChange = text => {
    if (text.length < 3) {
      setFirstNameError('Name must be at least 3 characters');
    } else {
      setFirstNameError('');
    }
    setFirstName(text);
  };

  const handleLastNameChange = text => {
    if (text.length < 3) {
      setLastNameError('Name must be at least 3 characters');
    } else {
      setLastNameError('');
    }
    setLastName(text);
  };
  const handleEmailChange = text => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(text)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
    setEmail(text);
  };
  const handleRegister = () => {
    if (!name || !email || !password || !dob || !phone) {
      alert('All fields are required');
      return;
    }
    if (nameError || emailError || passwordError || dobError || phoneError) {
      alert('Please correct the validation errors');
      return;
    }
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (

    <View>
      <View >
        <Text style={styles.subtitle1}>
          Hey there,
        </Text>
        <Text style={styles.para1}>
          Create an Account
        </Text>
        <View style={styles.fname}>
          <Image style={styles.flogo} source={require('../assets/Profile.png')} />
          <TextInput
            placeholder="First Name" placeholderTextColor={'grey'} color='black'
            value={firstname}
            onChangeText={handleFirstNameChange}
          />
        </View>
        {firstnameError ? (
          <Text style={styles.error}>{firstnameError}</Text>
        ) : null}

        <View style={styles.lname}>
          <Image style={styles.llogo} source={require('../assets/Profile.png')} />
          <TextInput
            placeholder="Last Name" placeholderTextColor={'grey'} color='black'
            value={lastname}
            onChangeText={handleLastNameChange}
          />

        </View>
        {lastnameError ? (
          <Text style={styles.error}>{lastnameError}</Text>
        ) : null}

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
        <View style={styles.checkb}>

          <CheckBox style={{ marginLeft: responsiveWidth(5), marginTop: responsiveHeight(1), borderColor: 'grey' }}
            value={selected}
            onPress={handleCheckboxChange}
            onValueChange={setSelection}
            tintColors={{ true: '#2530A3', false: 'grey' }}
          />
          <Text style={styles.checktext} >By continuing you accept our Privacy Policy and Term of Use</Text>
        </View>
        {isChecked ? <Text style={styles.checkmark}>✓</Text> : null}
      </View>

      <TouchableOpacity style={styles.mybtn} onPress={() => props.navigation.navigate('CompleteRegistration')}>
        <Text style={styles.btntext}>Register</Text>
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
        <Text>Already have an account?</Text>
        <TouchableOpacity  onPress={() => props.navigation.navigate('Login')}>
          <Text style={{ color: '#C58BF2' }}> Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  )

}
const styles = StyleSheet.create({
  fname: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: "white",
    borderColor: 'grey',
    borderRadius: 10,
    width: responsiveWidth(80),
    height: responsiveHeight(6),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(3)
  },
  lname: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: "white",
    borderColor: 'grey',
    borderRadius: 10,
    width: responsiveWidth(80),
    height: responsiveHeight(6),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(2)
  },
  email: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: "white",
    borderColor: 'grey',
    borderRadius: 10,
    width: responsiveWidth(80),
    height: responsiveHeight(6),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(2)
  },
  pass: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: "white",
    borderColor: 'grey',
    borderRadius: 10,
    width: responsiveWidth(80),
    height: responsiveHeight(6),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(2)
  },
  para1: {

    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    // marginLeft: responsiveWidth(25),
    // marginTop: responsiveHeight(0.5)
  },
  subtitle1: {
    fontSize: responsiveFontSize(2.3),
    color: 'black',
    textAlign: 'center',
    marginTop: responsiveHeight(5),
    fontFamily: 'poppins'
  },


  mybtn: {
    backgroundColor: '#92A3FD',
    borderRadius: 30,
    width: responsiveWidth(80),
    height: responsiveHeight(6.8),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(12)
  },
  btntext: {
    flex: 1,
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    marginTop: responsiveHeight(2),
    color: 'white',
    fontWeight: 'bold'
  },
  flogo: {
    marginLeft: responsiveWidth(4),
    marginTop: responsiveHeight(2),
    marginRight: responsiveWidth(3),
  },
  llogo: {
    marginLeft: responsiveWidth(4),
    marginTop: responsiveHeight(2),
    marginRight: responsiveWidth(3),
  },
  elogo: {

    marginLeft: responsiveWidth(4),
    marginTop: responsiveHeight(2),
    marginRight: responsiveWidth(3),
  },
  plogo: {

    marginLeft: responsiveWidth(4),
    marginTop: responsiveHeight(2),
    marginRight: responsiveWidth(3),
  },
  sociallogin: {
    flexDirection: 'row',
    alignItems: 'center',
    height: responsiveHeight(7),
    width: responsiveWidth(14)

  },
  googlelogin: {

    marginLeft: responsiveWidth(33),
    marginTop: responsiveHeight(4)
  },
  fblogin: {

    marginLeft: responsiveWidth(7),
    marginTop: responsiveHeight(4)
  },
  loginlink: {
    flexDirection: 'row',
    marginLeft: responsiveWidth(25),
    marginTop: responsiveHeight(2)
  },
  checkb: {
    flexDirection: 'row',
    marginLeft: responsiveWidth(4.5),
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
  error: {
    color: 'red',
    textAlign: 'center',
    margintop: responsiveHeight(5)
  },
})