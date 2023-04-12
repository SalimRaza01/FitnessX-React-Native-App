import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import HomeScreen from './HomeScreen';
import ActivityChart from './ActivityChart';
import CameraBtn from './CameraBtn';

import {
    responsiveHeight,
} from "react-native-responsive-dimensions";

const Tab = createBottomTabNavigator();


export default function TabBar(props) {

    return (

        <Tab.Navigator style={styles.TabIcon} screenOptions={{ headerShown: false, tabBarShowLabel: false, }}>
            <Tab.Screen name='.' component={HomeScreen} options={{

                tabBarIcon: ({ focused }) => (
                    focused ?
                        <Image source={require('../assets/Home-Active.png')
                        } />
                        : <Image source={require('../assets/Home.png')
                        } />
                )

            }} />
            <Tab.Screen name="Activity" component={ActivityChart} options={{

                tabBarIcon: ({ focused }) => (
                    focused ?
                        <Image source={require('../assets/Activity-Active.png')
                        } />
                        : <Image source={require('../assets/Activity.png')
                        } />
                )

            }} />
            <Tab.Screen name="Search" component={''} options={{

                tabBarIcon: ({ color }) => (

                    <Image style={styles.bottomTabIcon} source={require('../assets/Search.png')
                    } />
                )

            }} />
            <Tab.Screen name="Camera" component={CameraBtn} options={{

                tabBarIcon: ({ focused }) => (
                    focused ?
                        <Image source={require('../assets/Camera-Active.png')
                        } />
                        : <Image source={require('../assets/Camera.png')
                        } />
                )

            }} />
            <Tab.Screen name="Profile" component={''} options={{

                tabBarIcon: ({ focused }) => (
                    focused ?
                        <Image source={require('../assets/Profile-Active.png')
                        } />
                        : <Image source={require('../assets/Profile.png')
                        } />
                )

            }} />
        </Tab.Navigator>

    );
}
const styles = StyleSheet.create({


    TabIcon: {
        backgroundColor: 'white',
        height: responsiveHeight(50),
        marginTop: responsiveHeight(-50),
    },

    bottomTabIcon: {
        marginTop: responsiveHeight(-2),
    },
})

