import React, {Component} from 'react'
import {ActivityIndicator, Alert} from 'react-native'
import {View} from 'react-native';
import {loadAsync} from 'expo-font'
import {Ionicons} from "@expo/vector-icons";
import {genericStyle} from "./styles/generic.style";
import {initializeApp} from "firebase";
import Start from "./views/start/Start";

const firebaseConfig = {
    apiKey: "DRSY5zSuHT3vBMFizlcgidgW8eQ5ROHpl3N9eBI2",
    authDomain: "good-pet.firebaseapp.com",
    databaseURL: "https://good-pet.firebaseio.com/"
};

export default class App extends Component {
    state = {
        isReady: false
    };

    componentDidMount = async () => {
        try {
            initializeApp(firebaseConfig);
        } catch (e) {
            Alert.alert("Could not connect with FireBase", e);
        }

        try {
            await loadAsync({
                Roboto: require('native-base/Fonts/Roboto.ttf'),
                Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
                ...Ionicons.font
            });
        } catch (e) {
            console.error('Could not load native-base', 2);
        }

        this.setState({isReady: true});
    };

    render() {
        return this.state.isReady
            ? (<Start/>)
            : (
                <View style={genericStyle.container}>
                    <ActivityIndicator/>
                </View>
            );
    }
}
