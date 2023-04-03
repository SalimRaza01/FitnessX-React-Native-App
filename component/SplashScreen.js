import { Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
// import LinearGradient from 'react-native-linear-gradient';

export default function SplashScreen(props) {

  return (
    <View style={{
        flex: 1,
      }}>
      <Image style={styles.logo} source={require('../assets/Logo.png')} />
      <View >
     
        < TouchableOpacity style={styles.mybtn} onPress={() => props.navigation.navigate('Onboard')}>
          <Text style={styles.btntext}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: responsiveWidth(50),
    height: responsiveHeight(40),
    marginLeft: responsiveWidth(25),
    marginTop: responsiveHeight(25),
    resizeMode: 'contain',
    },
    mybtn: {
    backgroundColor: '#92A3FD',  
        borderRadius: 30,
       width: responsiveWidth(60),
        height: responsiveHeight(7),
        marginLeft: responsiveWidth(20),
    marginTop: responsiveHeight(20)
    },
    btntext: {
        flex:1,
        fontSize: responsiveFontSize(1.5),
        textAlign: 'center',
        marginTop: responsiveHeight(2.3),
        color: 'white'
        

    }
}); 