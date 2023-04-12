import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const WaterReminder = ({ targetMl, reminderInterval }) => {
    const [inputMl] = useState('');
    const [mlDrunk, setMlDrunk] = useState('');
    const [percentage, setPercentage] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            // Check if it's time to remind the user to drink water
            if (mlDrunk < targetMl) {
                alert('Time to drink water!');
            }
        }, reminderInterval);

        return () => clearInterval(interval);
    }, [mlDrunk, targetMl, reminderInterval]);

    const handleDrinkWater = () => {

        const inputMl = () => {
            // Prompt user to input how much water they drank
            // const inputMl = InputText
          
       
            // Update state with new amount of water drank
            setMlDrunk(mlDrunk + inputMl);
        }
            // Calculate percentage of target ml reached
            const newPercentage = Math.min((mlDrunk + inputMl) / targetMl * 100, 100);
            setPercentage(newPercentage);
        
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>You have drunk {mlDrunk} ml of water</Text>
            <View style={styles.progressBar}>
                <View style={{ width: `${percentage}%`, backgroundColor: 'blue', height: '100%' }} />
            </View>
            <TextInput
                placeholder="How Much you drink water enter in ml" placeholderTextColor={'grey'} color='black'
                value={inputMl}
                onChangeText={handleDrinkWater}
            />
            <TouchableOpacity style={styles.button} onPress={handleDrinkWater}>
                <Text style={styles.buttonText}>Drink Water</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
    },
    progressBar: {
        width: '80%',
        height: 20,
        backgroundColor: 'lightgray',
        borderRadius: 10,
        overflow: 'hidden',
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default WaterReminder;
