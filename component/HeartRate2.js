import React from 'react';
import { View } from 'react-native';
import WaterReminder from './WaterReminder';

const HeartRate = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <WaterReminder targetMl={2000} reminderInterval={60 * 60 * 1000} />
        </View>
    );
};

export default HeartRate;
