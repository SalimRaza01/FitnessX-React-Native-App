import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

export default function Onboard1(props) {
  return (
    <View>
    <View>
     <Image style={styles.Onboardimage} source={require('../assets/onboard4.png')} />
    </View>
    <View style={styles.textbox}>
        <Text style={styles.subtitle1}>
          Improve Sleep  Quality
        </Text>
        <Text style={styles.para1}>
          Improve the quality of your sleep with us, good quality sleep can bring a good mood in the morning
        </Text>
      </View>
        <TouchableOpacity style={styles.mybtn} onPress={() => props.navigation.navigate('Registration')}>
          <Image source={require('../assets/Button3.png')}/>
      </TouchableOpacity>
      </View>
  )
 
}
const styles = StyleSheet.create({
  Onboardimage: {
    resizeMode: 'contain',
    width: responsiveWidth(100),
    height: responsiveHeight(64),
    marginLeft: responsiveWidth(0),
    marginTop: responsiveHeight(-12),

  },
  subtitle1: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color: 'black',
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(1)
  },
  para1: {
    fontSize: responsiveFontSize(1.9),
    color: 'grey',
    marginLeft: responsiveWidth(10),
    marginRight: responsiveWidth(10),
    marginTop: responsiveHeight(1.5),
    fontFamily: 'poppins'
  },
  mybtn: {
    // backgroundColor: '#92A3FD',  
    borderRadius: 30,
    width: responsiveWidth(10),
    height: responsiveHeight(1),
    marginLeft: responsiveWidth(70),
    marginTop: responsiveHeight(13)
  },
})