import "react-native-gesture-handler";
import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { Picker } from "@react-native-picker/picker";

export default function SelectGender(props) {

  const [gender, setGender] = useState('Unknown');

  return (
    <View style={styles.weight}>
        <Image style={styles.wlogo} source={require('../assets/gender.png')} />
        <Picker 
          selectedValue={gender}
          onValueChange={(value, index) => setGender(value)}
          mode="picker"
          style={styles.picker}
        >
          <Picker.Item label="       Choose Gender" value="Unknown" />
          <Picker.Item label="       Male" value="Male" />
          <Picker.Item label="       Female" value="Female" />
          <Picker.Item label="       Other" value="Other" />
        </Picker>
    </View>
  );
}

const styles = StyleSheet.create({

  text: {
    fontSize:responsiveFontSize(1),
    color: 'grey',
    textAlign: 'center'
  },
  weight: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: "white",
    //  color:'black',
    borderColor: 'grey',
    borderRadius: 10,
    width: responsiveWidth(85),
    height: responsiveHeight(7),
    marginLeft: responsiveWidth(7),
    marginTop: responsiveHeight(2),
  },
  picker: {
    position: 'absolute',
    color: 'grey',
    width: responsiveWidth(84),
    height: responsiveHeight(7.8),
  
    // backgroundColor: 'green'
  },

  wlogo: {
    position: 'absolute',
    width:responsiveWidth(4.5),
    height: responsiveHeight(2.6),
    marginLeft: responsiveWidth(2),
    marginTop: responsiveHeight(2.5),
  },
  label: {
    fontSize: responsiveFontSize(5),
    color: 'grey',

    textAlign: 'center'
    
  }
});

