


import React, { useEffect, useState, useRef, Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Animated,
    Easing,
} from "react-native";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

export default class ProgressBar extends Component {
    state = {
        progressHeight: new Animated.Value (height = responsiveHeight(0)),
        progressBar: 1,
    };
    componentDidMount() {
        Animated.timing(this.state.progressHeight, {
            toValue: height = responsiveHeight(20),
            duration: 9000,
            easing: Easing.bezier(1, 3, 0.5, 1),
   
        }).start();
    }
    render() {
        const { progressHeight, progressBar } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.progressBarContainer}>
                    <Animated.View
                        style={{
                            height: progressHeight,
                            backgroundColor: "#C58BF2",
                            borderRadius: 40,
                        }}
                    />
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.subtitle5}>Water Intake</Text>
                    <Text style={styles.para3}>4 Liters</Text>
                    <Text style={styles.subtitle1}>Real time updates</Text>

                    <Text style={styles.subtitle2}>6am - 8am</Text>
                    <Text style={styles.subtitle3}>600ml</Text>
    
                    <Text style={styles.subtitle2}>9am - 11am</Text>
                    <Text style={styles.subtitle3}>500ml</Text>

                    <Text style={styles.subtitle2}>11am - 2pm</Text>
                    <Text style={styles.subtitle3}>1000ml</Text>
       
                    <Text style={styles.subtitle2}>2pm - 4pm</Text>
                    <Text style={styles.subtitle3}>700ml</Text>

                    <Text style={styles.subtitle2}>4pm - now</Text>
                    <Text style={styles.subtitle3}>900ml</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    subtitle5: {
        fontSize: responsiveFontSize(1.9),
        color: 'black',
        marginLeft: responsiveWidth(3),
        marginTop: responsiveHeight(3)
    },
    para3: {
        fontSize: responsiveFontSize(2),
        color: '#92A3FD',
        marginLeft: responsiveWidth(3),
        marginTop: responsiveHeight(0.1),
        fontFamily: 'poppins',
        fontWeight: 'bold'
    },
    container: {
        position:'absolute',
        backgroundColor: "white",
        width: responsiveWidth(41),
        marginLeft: responsiveWidth(6),
        // marginRight: responsiveWidth(15),
        marginTop: responsiveHeight(-20),
        height: responsiveHeight(45),
        borderRadius: 30,
        flexDirection: 'row',
         shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,  
    elevation: 2
    },
    progressBarContainer: {
        borderRadius: 30,
        marginLeft: responsiveWidth(4),
        // marginRight: responsiveWidth(10),
        marginTop: responsiveHeight(4),
        backgroundColor: '#F7F8F8',
        width: responsiveWidth(7.4),
        height: responsiveHeight(37),
        justifyContent:'flex-end'
    },
    subtitle1: {
        fontSize: responsiveFontSize(1.2),
        color: 'grey',
        marginLeft: responsiveWidth(3),
        marginTop: responsiveHeight(1.5)
    },
    subtitle2: {
        fontSize: responsiveFontSize(1),
        color: 'grey',
        marginLeft: responsiveWidth(11),
        marginTop: responsiveHeight(1)
    },
    subtitle3: {
        fontSize: responsiveFontSize(1.4),
        fontWeight:'bold',
        color: '#C58BF2',
        marginLeft: responsiveWidth(11),
        marginTop: responsiveHeight(0.7)
    },
});