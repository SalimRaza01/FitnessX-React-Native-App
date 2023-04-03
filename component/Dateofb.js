import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

import React, { useState } from "react";

import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

export default function Dateofb(props) {

  const [datePicker, setDatePicker] = useState(false);

  const [date, setDate] = useState(new Date());

  function showDatePicker() {
    setDatePicker(true);
  };

  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  };


  return (
    <View style={{ flex: 1 }}>
      <View style={styles.MainContainer}>



        {datePicker && (
          <DateTimePicker
            value={date}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateSelected}
            style={styles.datePicker}
          />
        )}

        {!datePicker && (
          <View>
            <TouchableOpacity style={styles.weight} onPress={() => { showDatePicker(); }}>
              <Image style={styles.wlogo} source={require('../assets/Calendar.png')} />
              <TextInput style={styles.text} placeholder=" Date of Birth" placeholderTextColor={'grey'}>{date.toLocaleDateString()} </TextInput>
            </TouchableOpacity>
          </View>
        )}


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginTop: responsiveHeight(1),

  },
  wlogo: {
    width: responsiveWidth(4.5),
    height: responsiveHeight(2.6),
    marginLeft: responsiveWidth(2),
    marginTop: responsiveHeight(2.5),
  },
 text: {
    fontSize: 14,
    color: 'grey',
    marginTop:responsiveHeight(0.1),
    marginLeft:responsiveWidth(3),
    // textAlign: 'center'
  },

  // Style for iOS ONLY...
  datePicker: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  },

});

