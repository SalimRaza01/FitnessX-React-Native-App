import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { LineChart } from "react-native-chart-kit";

import WorkoutProgress from './WorkoutProgress';

export default function Chart(props) {
    return (
        <View>
            <View>
                <Text style={styles.subtitle4} >Workout Progress</Text>
                <TouchableOpacity style={styles.mybtn2}>
                    <Text style={styles.btntext2} > Weekly </Text>
                </TouchableOpacity>
            </View>
          
            <LineChart
                data={{
                    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 80,
                                Math.random() * 60,
                                Math.random() * 40,
                                Math.random() * 20,
                                Math.random() * 0
                            ]
                        }
                    ]
                }}
                width={responsiveWidth(86.5)}
                height={responsiveHeight(30)}
                yAxisSuffix="%"
                yAxisInterval={1}

                chartConfig={{
                    barPercentage: 0.5,
                    backgroundGradientFrom: "white",
                    backgroundGradientTo: "white",
                    decimalPlaces: 1,
                    
                    color: (opacity = 1) => `#C3CFFF`,
                    labelColor: (opacity = 1) => `grey`,
                    style: {
                        borderRadius: 1
                    },
                    propsForDots: {
                        r: "2",
                        strokeWidth: "1",
                        stroke: "blue"
                    },
                    propsForBackgroundLines: {
                        stroke: 'none'
                    },
                    withHorizontalLabels: {
                        textAlign: 'right'
                    }

                }}
                bezier
                withHorizontalLabels={true}

                style={{
                    marginTop: responsiveHeight(2),
                    marginLeft: responsiveWidth(6),
                    borderRadius: 10,
     

                }}
            />
            <WorkoutProgress></WorkoutProgress> 
        </View>
    );
};

const styles = StyleSheet.create({
    mybtn2: {
        position:'absolute',
        backgroundColor: '#92A3FD',
        borderRadius: 50,
        width: responsiveWidth(23),
        height: responsiveHeight(5),
        marginLeft: responsiveWidth(69),
        marginTop: responsiveHeight(2.3)
    },
    btntext2: {
        fontSize: responsiveFontSize(2),
        color: 'white',
        // marginLeft: responsiveWidth(5),
        marginTop: responsiveHeight(0.9),
        fontFamily: 'poppins',
        textAlign: 'center'
    },
    subtitle4: {
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        color: 'black',
        marginLeft: responsiveWidth(7),
        marginTop: responsiveHeight(3)
    },
})
