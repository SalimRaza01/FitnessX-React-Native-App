import React, { Suspense } from 'react';
import SplashScreen from './component/SplashScreen'
import Onboard from './component/Onboard'
import Onboard1 from './component/Onboard1'
import Onboard2 from './component/Onboard2'
import Onboard3 from './component/Onboard3'
import Registration from './component/Registration';
import RegisterSuccess from './component/RegisterSuccess';
import YourGoal from './component/YourGoal';
import YourGoal1 from './component/YourGoal1';
import YourGoal2 from './component/YourGoal2';
import Login from './component/Login';
import CompleteRegistration from './component/CompleteRegistration';
import Dateofb from './component/Dateofb';
import SelectGender from './component/SelectGender';
import HomeScreen from './component/HomeScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Onboard" component={Onboard} />
        <Stack.Screen name="Onboard1" component={Onboard1} />
        <Stack.Screen name="Onboard2" component={Onboard2} />
        <Stack.Screen name="Onboard3" component={Onboard3} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="CompleteRegistration" component={CompleteRegistration} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="YourGoal" component={YourGoal} />
        <Stack.Screen name="YourGoal1" component={YourGoal1} />
        <Stack.Screen name="YourGoal2" component={YourGoal2} />
        <Stack.Screen name="SelectGender" component={SelectGender} />
        <Stack.Screen name="Dateofb" component={Dateofb} />
        <Stack.Screen name="RegisterSuccess" component={RegisterSuccess} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}