import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

export default function App() {
    let mainLogoSourcePath = "./assets/main-logo.png";

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>GoodPet</Text>
            <Text>Hello world!</Text>
            <Text>{"\n"}</Text>
            <Image source={require(mainLogoSourcePath)} style={styles.mainLogo}/>
        </View>
    );
}

const dimensions = Dimensions.get('window');
const imageHeight = dimensions.width / 2;
const imageWidth = dimensions.width / 2;

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainLogo: {
        height: imageHeight,
        width: imageWidth,
    }
});
