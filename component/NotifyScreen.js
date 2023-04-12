import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

export default function NotifyScreen(props) {
    return (
        <View>
            <Text style={styles.subtitle1}>
                Notificaiton
            </Text>
            <TouchableOpacity style={styles.mybtn} onPress={() => props.navigation.navigate('TabBar')} >
                <Image source={require('../assets/NotNav.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mybtn2} onPress={() => props.navigation.navigate('')}>
                <Image source={require('../assets/NotMenu.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.textbox}>
                    <Image style={styles.Not1} source={require('../assets/Not1.png')} />
                    <Image style={styles.Not2} source={require('../assets/NovMore.png')} />
                    <Text style={styles.para1}>
                        Hey, it's time for lunch
                    </Text>
                    <Text style={styles.para2}>
                        About 1 minutes ago
                    </Text>
                </View>
                <Text style={{ textAlign: 'center', marginTop: responsiveHeight(1), color: '#DDDADA' }}>
                    ____________________________________________________
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{ marginTop: responsiveHeight(-3) }}>
                    <Image style={styles.Not1} source={require('../assets/Not2.png')} />
                    <Image style={styles.Not2} source={require('../assets/NovMore.png')} />
                    <Text style={styles.para1}>
                        Don’t miss your lowerbody workout
                    </Text>
                    <Text style={styles.para2}>
                        About 3 hour ago
                    </Text>
                </View>
                <Text style={{ textAlign: 'center', marginTop: responsiveHeight(1), color: '#DDDADA' }}>
                    ____________________________________________________
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{ marginTop: responsiveHeight(-3) }}>
                    <Image style={styles.Not1} source={require('../assets/Not3.png')} />
                    <Image style={styles.Not2} source={require('../assets/NovMore.png')} />
                    <Text style={styles.para1}>
                        Hey, let’s add some meals for your b..
                    </Text>
                    <Text style={styles.para2}>
                        About 3 hour ago
                    </Text>
                </View>
                <Text style={{ textAlign: 'center', marginTop: responsiveHeight(1), color: '#DDDADA' }}>
                    ____________________________________________________
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{ marginTop: responsiveHeight(-3) }}>
                    <Image style={styles.Not1} source={require('../assets/Not4.png')} />
                    <Image style={styles.Not2} source={require('../assets/NovMore.png')} />
                    <Text style={styles.para1}>
                        Congratulations, You have finished A..
                    </Text>
                    <Text style={styles.para2}>
                        2 Days Ago
                    </Text>
                </View>
                <Text style={{ textAlign: 'center', marginTop: responsiveHeight(1), color: '#DDDADA' }}>
                    ____________________________________________________
                </Text>
            </TouchableOpacity>
        </View>
    )
    
}

const styles = StyleSheet.create({
    Not1: {
        position: 'absolute',
        resizeMode: 'contain',
        // width: responsiveWidth(100),
        // height: responsiveHeight(61),
        marginLeft: responsiveWidth(6),
        marginTop: responsiveHeight(5),

    },
    Not2: {
        resizeMode: 'contain',
        position: 'absolute',
        // width: responsiveWidth(100),
        // height: responsiveHeight(61),
        marginLeft: responsiveWidth(90),
        marginTop: responsiveHeight(6.6),

    },
    subtitle1: {
        position:'absolute',
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent:'center',
        marginTop: responsiveHeight(3),
        marginLeft: responsiveWidth(34.5),
    },
    para1: {
        fontSize: responsiveFontSize(1.5),
        color: 'black',
        marginLeft: responsiveWidth(20),
        marginRight: responsiveWidth(10),
        marginTop: responsiveHeight(5),
        fontFamily: 'poppins'
    },
    para2: {
        fontSize: responsiveFontSize(1.2),
        color: 'grey',
        marginLeft: responsiveWidth(20),
        marginRight: responsiveWidth(10),
        marginTop: responsiveHeight(0.5),
        fontFamily: 'poppins'
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
    mybtn2: {
        // backgroundColor: '#92A3FD',  
        position: 'absolute',
        borderRadius: 30,
        width: responsiveWidth(10),
        height: responsiveHeight(1),
        marginLeft: responsiveWidth(86),
        marginTop: responsiveHeight(3.2)
    },
})