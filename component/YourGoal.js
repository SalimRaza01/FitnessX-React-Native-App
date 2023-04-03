import { Text, View, Image, TouchableOpacity, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
// import LinearGradient from 'react-native-linear-gradient';

export default function YourGoal(props) {

  return (
    <View style={{
        flex: 1,
      }}>
                          <Text style={styles.heading1}>What is your goal ?</Text>
          <Text style={styles.para1}>It will help us to choose a best program for you</Text>
          <ImageBackground source={require('../assets/box.png')} resizeMode="cover" style={styles.image}>
               <Image style={styles.logo} source={require('../assets/Goal1.png')} />
        <Text style={styles.heading2}>Improve Shape</Text>
        <Text style={styles.para3}>________</Text>
        <Text style={styles.para2}>I have a low amount of body fat and need / want to build more muscle</Text>
        
         
          </ImageBackground>
      < TouchableOpacity style={styles.mybtn} onPress={() => props.navigation.navigate('YourGoal1')}>
        <Text style={styles.btntext}>Confirm</Text>
          </TouchableOpacity>
       
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: responsiveWidth(50),
    height: responsiveHeight(35),
    marginLeft: responsiveWidth(12),
    marginTop: responsiveHeight(5),
    resizeMode: 'contain',
    },
    mybtn: {
    backgroundColor: '#92A3FD',  
        borderRadius: 30,
       width: responsiveWidth(80),
        height: responsiveHeight(7),
        marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(6)
    },
    btntext: {
        flex:1,
        fontSize: responsiveFontSize(1.5),
        textAlign: 'center',
        marginTop: responsiveHeight(2.3),
        color: 'white',
        fontWeight:'bold'

    },
       heading1: {
        fontSize: responsiveFontSize(2.5),
        textAlign: 'center',
        marginTop: responsiveHeight(2.6),
    color:'black',
        fontWeight:'bold'

    },
          para1: {
        fontSize: responsiveFontSize(1.7),
        textAlign: 'center',
              marginTop: responsiveHeight(1),
              marginLeft: responsiveWidth(25),
        marginRight:responsiveWidth(26),
       color:'grey'

    },
                heading2: {
        fontSize: responsiveFontSize(1.8),
        textAlign: 'center',
        marginTop: responsiveHeight(5),
    color:'white',
        fontWeight:'bold'

    },
          para2: {
        fontSize: responsiveFontSize(1.7),
        textAlign: 'center',
              marginTop: responsiveHeight(2),
              marginLeft: responsiveWidth(10),
        marginRight:responsiveWidth(12),
       color:'white'
    },
    image: {
                  width: responsiveWidth(75),
    height: responsiveHeight(65),
    marginLeft: responsiveWidth(13),
    marginTop: responsiveHeight(4),
    resizeMode: 'contain',
  },
             para3: {
        fontSize: responsiveFontSize(1.7),
        textAlign: 'center',
              marginTop: responsiveHeight(-1),
              marginLeft: responsiveWidth(10),
        marginRight:responsiveWidth(12),
       color:'white'
    },
          
}); 