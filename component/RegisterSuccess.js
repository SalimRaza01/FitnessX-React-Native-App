import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
// import LinearGradient from 'react-native-linear-gradient';

export default function CompleteRegistration(props) {

  return (
    <View style={{
      flex: 1,
    }}>
      <Image style={styles.logo} source={require('../assets/CRlogo.png')} />
      <Text style={styles.heading1}>Welcome, Salim</Text>
      <Text style={styles.para1}>You are all set now, let’s reach your goals together with us</Text>
      < TouchableOpacity style={styles.mybtn} onPress={() => props.navigation.navigate('HomeScreen')}>
        <Text style={styles.btntext}>Go To Home</Text>
      </TouchableOpacity>

    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: responsiveWidth(60),
    height: responsiveHeight(40),
    marginLeft: responsiveWidth(21),
    marginTop: responsiveHeight(9),
    resizeMode: 'contain',
  },
  mybtn: {
    backgroundColor: '#92A3FD',
    borderRadius: 30,
    width: responsiveWidth(80),
    height: responsiveHeight(7),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(25)
  },
  btntext: {
    flex: 1,
    fontSize: responsiveFontSize(1.5),
    textAlign: 'center',
    marginTop: responsiveHeight(2.3),
    color: 'white',
    fontWeight: 'bold'

  },
  heading1: {
    fontSize: responsiveFontSize(3),
    textAlign: 'center',
    marginTop: responsiveHeight(2.3),
    color: 'black',
    fontWeight: 'bold'

  },
  para1: {
    fontSize: responsiveFontSize(1.7),
    textAlign: 'center',
    marginTop: responsiveHeight(1.2),
    marginLeft: responsiveWidth(22),
    marginRight: responsiveWidth(22),
    color: 'grey'

  }
}); 