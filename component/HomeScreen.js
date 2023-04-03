import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

export default function Onboard(props) {
    return (
        <View>

            <ScrollView>
                <View style={styles.textbox}>
                    <Text style={styles.para1}>
                        Welcome Back
                    </Text>
                    <Text style={styles.subtitle1}>
                        Salim Raza
                    </Text>
                    <Image style={styles.noticon} source={require('../assets/Noticon.png')} />
                </View>
                <View>
                    <Image style={styles.Onboardimage} source={require('../assets/Banner.png')} />
                    <Text style={styles.subtitle2} >BMI (Body Mass Index)</Text>
                    <Text style={styles.para2} >You have a normal weight</Text>

                    <TouchableOpacity style={styles.mybtn}>
                        <Text style={styles.btntext} >View More</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.Box} >
                    <TouchableOpacity style={styles.mybtn1}>
                        <Text style={styles.subtitle3} >Today Target</Text>
                        
                    <Text style={styles.btntext1} >Check</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.subtitle4} >Activity Status</Text>

                <Image style={styles.Heartstatus} source={require('../assets/HeartStatus.png')} />
            </ScrollView>


            {/* <TouchableOpacity style={styles.mybtn} onPress={() => props.navigation.navigate('Onboard1')}>
                <Image source={require('../assets/Button.png')} />
            </TouchableOpacity>  */}
        </View>
    )

}
const styles = StyleSheet.create({
    Onboardimage: {

        resizeMode: 'contain',
        width: responsiveWidth(100),
        height: responsiveHeight(67),
        marginLeft: responsiveWidth(0),
        marginTop: responsiveHeight(-18),

    },
    noticon: {
        position: 'absolute',
        resizeMode: 'contain',
        height: responsiveHeight(10),
        width: responsiveWidth(6),

        marginLeft: responsiveWidth(85),
        marginTop: responsiveHeight(0.4),
    },
    subtitle1: {
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
        color: 'black',
        marginLeft: responsiveWidth(10),
        marginTop: responsiveHeight(0.1)
    },
    para1: {
        fontSize: responsiveFontSize(1.9),
        color: 'grey',
        marginLeft: responsiveWidth(10),
        marginRight: responsiveWidth(10),
        marginTop: responsiveHeight(1.9),
        fontFamily: 'poppins'
    },
    subtitle2: {
        fontSize: responsiveFontSize(2.1),
        fontWeight: 'bold',
        color: 'white',
        marginLeft: responsiveWidth(12),
        marginTop: responsiveHeight(-41)
    },
    para2: {
        fontSize: responsiveFontSize(1.9),
        color: 'white',
        marginLeft: responsiveWidth(10),
        marginLeft: responsiveWidth(12),
        marginTop: responsiveHeight(1),
        fontFamily: 'poppins',
        fontWeight: 'light',
    },
    subtitle3: {
        position:'absolute',
        fontSize: responsiveFontSize(2),
        color: 'black',
        marginLeft: responsiveWidth(-49),
        marginTop: responsiveHeight(1)
    },
    mybtn: {
        // position:'absolute',
        backgroundColor: '#EEA4CE',
        borderRadius: 50,
        width: responsiveWidth(23),
        height: responsiveHeight(5),
        marginLeft: responsiveWidth(12),
        marginTop: responsiveHeight(2)
    },
    btntext: {
        fontSize: responsiveFontSize(1.5),
        color: 'white',
        marginLeft: responsiveWidth(4),
        marginTop: responsiveHeight(1.3),
        fontFamily: 'poppins',
        fontWeight: 'bold',
    },
    mybtn1: {
        // position:'absolute',
        backgroundColor: '#92A3FD',
        borderRadius: 50,
        width: responsiveWidth(23),
        height: responsiveHeight(5),
        marginLeft: responsiveWidth(55),
        marginTop: responsiveHeight(1.5)
    },
    btntext1: {
        fontSize: responsiveFontSize(2),
        color: 'white',
        // marginLeft: responsiveWidth(5),
        marginTop: responsiveHeight(0.9),
        fontFamily: 'poppins',
        textAlign:'center'
    },
    subtitle4: {
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        color: 'black',
        marginLeft: responsiveWidth(9),
        marginTop: responsiveHeight(2)
    },
    Box: {
    // position:'absolute',
    backgroundColor: 'white',
    borderRadius: 15,
    width: responsiveWidth(80),
    height: responsiveHeight(8),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(5)
},
  Heartstatus: {

        resizeMode: 'contain',
        width: responsiveWidth(100),
        height: responsiveHeight(65),
        marginLeft: responsiveWidth(0.1),
        marginTop: responsiveHeight(-18),

    },
})