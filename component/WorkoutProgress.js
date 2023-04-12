import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

export default class WorkoutProgress extends Component {
    state = {
        progressStatus: 0,
    }
    anim = new Animated.Value(0);
    componentDidMount() {
        this.onAnimate();
    }
    onAnimate = () => {
        this.anim.addListener(({ value }) => {
            this.setState({ progressStatus: parseInt(value, 10) });
        });
        Animated.timing(this.anim, {
            toValue: 75,
            duration: 9000,
            easing: Easing.bounce,

        }).start();
    }
    render() {
        return (
            <View style={styles.container1}>
                <Text style={styles.subtitle1}>
                    Fri, 26 May
                </Text>

                <Text style={styles.para1}>Upperbody Workout
                </Text>
                <View style={styles.container}>
                    <Animated.View
                        style={[
                            styles.inner, { width: this.state.progressStatus + "%" },
                        ]}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container1: {
        position: 'absolute',
        marginLeft: responsiveWidth(35),
        width: responsiveWidth(34.5),
        height: responsiveHeight(10),
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: responsiveHeight(8),
        justifyContent: "center",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
        // shadowRadius: 3,
    },
    container: {
        width: responsiveWidth(30),
        height: responsiveHeight(1),
        backgroundColor: '#F7F8F8',
        padding: 1,
        borderRadius: 30,
        marginTop: responsiveHeight(1),
        marginLeft: responsiveWidth(2),
        justifyContent: "center",

    },
    inner: {
        width: "100%",
        height: responsiveHeight(1),
        borderRadius: 15,
        backgroundColor: "#C58BF2",
        marginTop: responsiveHeight(0.1),
        justifyContent: "center",
    },
    para1: {

        fontSize: responsiveFontSize(1.5),
        color: 'black',
        marginLeft: responsiveWidth(2.4),
        marginTop: responsiveHeight(3)
    },
    subtitle1: {
        fontSize: responsiveFontSize(1),
        color: 'black',
        marginLeft: responsiveWidth(2.4),
        marginBottom: responsiveHeight(-2),
        fontFamily: 'poppins'
    },
    // subtitle2: {
    //     position:'absolute',
    //     fontSize: responsiveFontSize(1),
    //     color: 'green',
    //     marginLeft: responsiveWidth(25),
    //     // marginTop: responsiveHeight(1),
    //     fontFamily: 'poppins'
    // },
});  