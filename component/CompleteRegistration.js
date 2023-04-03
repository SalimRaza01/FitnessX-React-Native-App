import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import Dateofb from './Dateofb'
import SelectGender from './SelectGender';



export default function CompleteRegistration(props) {



    return (

        <View>
            <View >

                <Image style={styles.regimg} source={require('../assets/Registerimg.png')} />
                <Text style={styles.para1}>
                    Let's complete your profile
                </Text>
                <Text style={styles.subtitle1}>
                    it will help us to know more about you!
                </Text>
                <SelectGender></SelectGender>
                <Dateofb></Dateofb>

                <View style={styles.weight}>
                    <Image style={styles.wlogo} source={require('../assets/weight.png')} />

                    <TextInput
                        placeholder=" Your Weight" placeholderTextColor={'grey'} color='black'
                    //   value={fname}
                    />
                    <Image style={styles.kglogo} source={require('../assets/Kg.png')} />
                </View>


                <View style={styles.height}>
                    <Image style={styles.hlogo} source={require('../assets/height.png')} />

                    <TextInput
                        placeholder=" Your Height" placeholderTextColor={'grey'} color='black'
                    //   value={fname}
                    />
                    <Image style={styles.cmlogo} source={require('../assets/Cm.png')} />
                </View>

            </View>

            <TouchableOpacity style={styles.mybtn} onPress={() => props.navigation.navigate('YourGoal')}>
                <Text style={styles.btntext}>Next</Text>
            </TouchableOpacity>
        </View>
    )

};

const styles = StyleSheet.create({

    weight: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: "white",
        //  color:'black',
        borderColor: 'grey',
        borderRadius: 10,
        width: responsiveWidth(68),
        height: responsiveHeight(7),

        marginTop: responsiveHeight(9),
        marginLeft: responsiveWidth(7),

    },
    height: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: "white",
        borderColor: 'grey',
        borderRadius: 10,
        width: responsiveWidth(68),
        height: responsiveHeight(7),
        marginLeft: responsiveWidth(7),
        marginTop: responsiveHeight(1),

    },
    para1: {

        fontSize: responsiveFontSize(2.4),
        fontWeight: 'bold',
        color: 'black',
        marginLeft: responsiveWidth(21),
        marginTop: responsiveHeight(1.6)
    },
    subtitle1: {
        fontSize: responsiveFontSize(1.3),
        color: 'grey',
        textAlign: 'center',
        marginTop: responsiveHeight(1),
        fontFamily: 'poppins'
    },

    mybtn: {
        backgroundColor: '#92A3FD',
        borderRadius: 30,
        width: responsiveWidth(80),
        height: responsiveHeight(7),
        marginLeft: responsiveWidth(10),
        marginTop: responsiveHeight(10)
    },
    btntext: {
        flex: 1,
        fontSize: responsiveFontSize(2),
        textAlign: 'center',
        marginTop: responsiveHeight(2),
        color: 'white',
        fontWeight: 'bold'
    },

    wlogo: {

        marginLeft: responsiveWidth(3),
        marginTop: responsiveHeight(2.6),
        marginRight: responsiveWidth(3),
    },
    hlogo: {

        marginLeft: responsiveWidth(3),
        marginTop: responsiveHeight(2.6),
        marginRight: responsiveWidth(3),
    },
    regimg: {
        resizeMode: 'contain',
        height: responsiveHeight(39),
        width: responsiveWidth(80),
        marginLeft: responsiveWidth(10),
        marginTop: responsiveHeight(-4)
    },

    kglogo: {
        position: 'absolute',
        resizeMode: 'contain',
        height: responsiveHeight(10),
        width: responsiveWidth(13.2),
        marginLeft: responsiveWidth(71),
        marginTop: responsiveHeight(-1.5)
    },
    cmlogo: {

        position: 'absolute',
        resizeMode: 'contain',
        height: responsiveHeight(10),
        width: responsiveWidth(13.2),
        marginLeft: responsiveWidth(71),
        marginTop: responsiveHeight(-1.5)
    },


})