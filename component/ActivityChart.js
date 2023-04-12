import React from "react";
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { BarChart } from "react-native-chart-kit";

export default function ActivityChart(props) {
    return (
        <ScrollView>

            <Text style={styles.subtitle5}>
               Activity Tracker
            </Text>
            <TouchableOpacity style={styles.mybtn} onPress={() => props.navigation.navigate('TabBar')} >
                <Image source={require('../assets/NotNav.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mybtn3} onPress={() => props.navigation.navigate('')}>
                <Image source={require('../assets/NotMenu.png')} />
            </TouchableOpacity>

            <View style={styles.Box} >
                <Text style={styles.subtitle3} >Today Target</Text>
                <TouchableOpacity style={styles.mybtn1}>
                    <Text style={styles.btntext1} >+</Text>
                </TouchableOpacity>
                <View style={styles.container2}>
                    <Image style={styles.wpic2} source={require('../assets/Glass1.png')} />
                    <Text style={styles.subtitle2}>
                        8L
                    </Text>
                    <Text style={styles.para2}>Water Intake
                    </Text>
                </View>
                <View style={styles.container3}>
                    <Image style={styles.wpic2} source={require('../assets/Boot.png')} />
                    <Text style={styles.subtitle2}>
                        2400
                    </Text>
                    <Text style={styles.para2}>Foot Steps
                    </Text>
                </View>
            </View>
            <View>
                <Text style={styles.subtitle4} >Activity Progress</Text>
                <TouchableOpacity style={styles.mybtn2}>
                    <Text style={styles.btntext2} > Weekly </Text>
                </TouchableOpacity>
            </View>

            <BarChart
                data={{
                    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    datasets: [
                        {
                            data: [20, 45, 28, 23, 72, 43, 60]
                        }
                    ]
                }}
                showBarTops={false}
                yAxisLabel={''}
                fromZero={true}
                segments={2}
                width={responsiveWidth(90)}
                height={responsiveHeight(30)}
                // yAxisInterval={1}

                chartConfig={{
                    backgroundGradientFrom: 'white',
                    // backgroundGradientFromOpacity: 'white',
                    backgroundGradientTo: 'white',
                    color: () => 'blue',
                    // fillShadowGradient: 'green',
                    // fillShadowGradientOpacity: 5,
                    labelColor: () => 'grey',
                    barPercentage: 0.6,
                    barRadius: 10,
                    propsForBackgroundLines: {
                        strokeWidth: 1,
                        strokeDasharray: null,
                        stroke: 'black',
                    },
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
                withHorizontalLabels={false}
                style={{
                    marginTop: responsiveHeight(3),
                    marginLeft: responsiveWidth(6),
                    borderRadius: 10,

                }}
            />
            <Text style={styles.subtitle4} >Latest Workout</Text>
            <Text style={styles.btntext3} >See more</Text>
            <View style={styles.container1}>
                <Image style={styles.wpic} source={require('../assets/Actpic1.png')} />
                <Image style={styles.wbtn} source={require('../assets/Workout-Btn.png')} />
                <Text style={styles.subtitle1}>
                    Drinking 300ml Water
                </Text>

                <Text style={styles.para1}>About 3 minutes ago
                </Text>
            </View>
            <View style={styles.container1}>
                <Image style={styles.wpic} source={require('../assets/Actpic2.png')} />
                <Image style={styles.wbtn} source={require('../assets/Workout-Btn.png')} />
                <Text style={styles.subtitle1}>
                    Eat Snack (Fitbar)
                </Text>

                <Text style={styles.para1}>About 10 minutes ago
                </Text>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    subtitle5: {
        position: 'absolute',
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: responsiveHeight(3),
        marginLeft: responsiveWidth(28),
    },
    mybtn: {
        // backgroundColor: '#92A3FD',  
        borderRadius: 30,
        // backgroundColor:'red',
        width: responsiveWidth(10),
        height: responsiveHeight(5),
        marginLeft: responsiveWidth(6),
        marginTop: responsiveHeight(3.2)
    },
    mybtn3: {
        // backgroundColor: '#92A3FD',  
        position: 'absolute',
        borderRadius: 30,
        width: responsiveWidth(10),
        height: responsiveHeight(1),
        marginLeft: responsiveWidth(86),
        marginTop: responsiveHeight(3.2)
    },
    Box: {
        // position:'absolute',
        backgroundColor: '#BCD7FF',
        borderRadius: 28,
        width: responsiveWidth(88),
        height: responsiveHeight(20),
        marginLeft: responsiveWidth(6),
        marginTop: responsiveHeight(3),

    },
    subtitle3: {
        fontWeight: 'bold',
        position: 'absolute',
        fontSize: responsiveFontSize(2),
        color: 'black',
        marginLeft: responsiveWidth(5),
        marginTop: responsiveHeight(2.5)
    },
    container1: {
        // position: 'absolute',
        marginTop: responsiveHeight(2.5),
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
    wpic: {
        position: 'absolute',
        height: responsiveHeight(6.3),
        width: responsiveWidth(12),
        marginLeft: responsiveWidth(2.2),
        marginTop: responsiveHeight(12),

    },
    wbtn: {
        position: 'absolute',
        marginLeft: responsiveWidth(76),
        marginTop: responsiveHeight(1),

    },
    btntext3: {
        fontSize: responsiveFontSize(1.5),
        color: 'grey',
        marginLeft: responsiveWidth(67),
        marginTop: responsiveHeight(-2.8),
        fontFamily: 'poppins',
        textAlign: 'center'
    },
    mybtn1: {
        // position:'absolute',
        backgroundColor: '#92A3FD',
        borderRadius: 6,
        width: responsiveWidth(6),
        height: responsiveHeight(3),
        marginLeft: responsiveWidth(77),
        marginTop: responsiveHeight(2.5)
    },
    btntext1: {
        fontSize: responsiveFontSize(2),
        color: 'white',
        // marginLeft: responsiveWidth(5),
        marginTop: responsiveHeight(-0.1),
        fontFamily: 'poppins',
        textAlign: 'center'
    },
    mybtn2: {
        position: 'absolute',
        backgroundColor: '#92A3FD',
        borderRadius: 50,
        width: responsiveWidth(23),
        height: responsiveHeight(5),
        marginLeft: responsiveWidth(70),
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
    container2: {
        // position: 'absolute',
        marginLeft: responsiveWidth(5),
        marginTop: responsiveHeight(2.5),
        width: responsiveWidth(36),
        height: responsiveHeight(9),
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: "center",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1
    },
    wpic2: {
        position: 'absolute',
        height: responsiveHeight(5),
        width: responsiveWidth(7),
        marginLeft: responsiveWidth(2.5),
        marginTop: responsiveHeight(12),

    },
    para2: {
        // position: 'absolute',
        fontSize: responsiveFontSize(1.2),
        color: 'grey',
        marginLeft: responsiveWidth(12),
        marginTop: responsiveHeight(0.1)
    },
    subtitle2: {
        // position: 'absolute',
        fontSize: responsiveFontSize(2),
        color: 'blue',
        marginLeft: responsiveWidth(12),
        marginTop: responsiveHeight(0.1),
        fontFamily: 'poppins',
        fontWeight: 'bold'
    },
    container3: {
        position: 'absolute',
        marginLeft: responsiveWidth(46),
        marginTop: responsiveHeight(8),
        width: responsiveWidth(36),
        height: responsiveHeight(9),
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: "center",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1
    },
})
