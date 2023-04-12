import React, { useState } from 'react';
// import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native'
 
export default function CameraBtn() {

    const navigation = useNavigation();
    // const [imageUri, setImageUri] = useState(null);

    launchCamera({ mediaType: 'photo' }, (response) => {
        if (response.didCancel) {
            navigation.useNavigation()
        } else {
                navigation.goBack(); // Go back to previous screen
        }
    });
};

    // return (
    //     <View style={styles.container}>
    //         {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    //         <Button title="Take Picture" onPress={takePicture} />
    //     </View>
    // );


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     image: {
//         width: 200,
//         height: 200,
//         marginVertical: 20,
//     },
// });
