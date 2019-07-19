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
        this.setState({isReady: true})
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
                <Text>Witaj w testowej wersji aplikacji!</Text>

                <Text>{"\n"}</Text>
                <Image source={require(mainLogoSourcePath)} style={styles.mainLogo}/>
                <Text>{"\n"}</Text>

                <Button light style={styles.buttonLogin}>
                    <Text>Zaloguj się</Text>
                </Button>
                <Button primary style={styles.buttonRegister}>
                    <Text style={styles.primaryButtonTextColor}>Zarejestruj się</Text>
                </Button>
            </View>
        );
    }
}

const dimensions = Dimensions.get('window');
const imageHeight = dimensions.width / 2;
const imageWidth = dimensions.width / 2;
const buttonWidth = dimensions.width / 2 - 20;

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
    },
    buttonLogin: {
        alignSelf: 'center',
        padding: 10,
        width: buttonWidth,
        marginBottom: 10,
        justifyContent: 'center'
    },
    buttonRegister: {
        alignSelf: 'center',
        padding: 10,
        width: buttonWidth,
        justifyContent: 'center'
    },
    primaryButtonTextColor: {
        color: '#fff'
    },
});
