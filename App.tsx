import React, {Component} from 'react'
import {ActivityIndicator} from 'react-native'
import {StyleSheet, View, Image, Dimensions, Text} from 'react-native';
import {Button} from 'native-base';
import {Font} from 'expo'
import {Ionicons} from "@expo/vector-icons";

export default class App extends Component {
    state = {
        isReady: false
    };

    componentWillMount = async () => {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font
        });
        setTimeout(() => {
            this.setState({isReady: true})
        }, 1000)
    };

    render() {
        const mainLogoSourcePath = "./assets/main-logo.png";
        if (!this.state.isReady) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator/>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>GoodPet</Text>
                <Text>Hello world!</Text>
                <Text>{"\n"}</Text>
                <Image source={require(mainLogoSourcePath)} style={styles.mainLogo}/>

                <Button rounded>
                    <Text>Primary</Text>
                </Button>
            </View>
        );
    }
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
