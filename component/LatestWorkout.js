import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, Easing, Image } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

export default class LatestWorkout extends Component {
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
            toValue: 70,
            duration: 9000,
            easing: Easing.bounce,
        }).start();
    }
    render() {
        return (
            <View>
                <View style={styles.container1}>
                    <Image style={styles.wpic} source={require('../assets/Workout-Pic.png')} />
                    <Image style={styles.wbtn} source={require('../assets/Workout-Btn.png')} />
                    <Text style={styles.subtitle1}>
                        Fullbody Workout
                    </Text>

                    <Text style={styles.para1}>180 Calories Burn | 20minutes
                    </Text>
                    <View style={styles.container}>
                        <Animated.View
                            style={[
                                styles.inner, { width: this.state.progressStatus + "%" },
                            ]}
                        />
                    </View>
                </View>
                <View style={styles.container1}>
                    <Image style={styles.wpic} source={require('../assets/Workout-Pic2.png')} />
                    <Image style={styles.wbtn} source={require('../assets/Workout-Btn.png')} />
                    <Text style={styles.subtitle1}>
                        Lowerbody Workout
                    </Text>

                    <Text style={styles.para1}>200 Calories Burn | 30minutes
                    </Text>
                    <View style={styles.container}>
                        <Animated.View
                            style={[
                                styles.inner, { width: this.state.progressStatus + "%" },
                            ]}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container1: {
        // position: 'absolute',
        marginTop: responsiveHeight(1.5),
        marginLeft: responsiveWidth(7),
        width: responsiveWidth(86),
        height: responsiveHeight(10),
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: "center",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1
    },
    container: {
        // position: 'absolute',
        width: responsiveWidth(57),
        height: responsiveHeight(1.5),
        backgroundColor: '#F7F8F8',
        padding: 1,
        borderRadius: 30,
        marginTop: responsiveHeight(1),
        marginLeft: responsiveWidth(17),
        justifyContent: "center",

    },
    inner: {
        width: "100%",
        height: responsiveHeight(1.5),
        borderRadius: 15,
        backgroundColor: "#C58BF2",
        marginTop: responsiveHeight(0.1),
        justifyContent: "center",
    },
    para1: {
        // position: 'absolute',
        fontSize: responsiveFontSize(1.2),
        color: 'grey',
        marginLeft: responsiveWidth(17.4),
        marginTop: responsiveHeight(0.5)
    },
    subtitle1: {
        // position: 'absolute',
        fontSize: responsiveFontSize(1.3),
        color: 'black',
        marginLeft: responsiveWidth(17.4),
        marginTop: responsiveHeight(0.1),
        fontFamily: 'poppins',
        fontWeight: 'bold'
    },
    wpic: {
        position: 'absolute',
        height: responsiveHeight(6.2),
        width: responsiveWidth(12),
        marginLeft: responsiveWidth(2.5),
        marginTop: responsiveHeight(12),

    },
    wbtn: {
        position: 'absolute',
        marginLeft: responsiveWidth(76),
        marginTop: responsiveHeight(1),

    }
});  