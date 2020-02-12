import React, {Component} from 'react'
import {ActivityIndicator} from 'react-native'
import {View, Image, Text} from 'react-native';
import {loadAsync} from 'expo-font'
import {Ionicons} from "@expo/vector-icons";
import {genericStyle} from "./styles/generic.style";
import {textStyle} from "./styles/text.style";
import {imagesStyle} from "./styles/images.style";
import GpButton from "./shared/components/button/button.component";
import {BUTTON_TYPE} from "./shared/components/button/button.constants";

export default class App extends Component {
    state = {
        isReady: false
    };

    componentDidMount = async () => {
        try {
            await loadAsync({
                Roboto: require('native-base/Fonts/Roboto.ttf'),
                Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
                ...Ionicons.font
            });
        } catch (e) {
            console.error('Could not load native-base', 2)
        }
        this.setState({isReady: true})
    };

    render() {
        const mainLogoSourcePath = "./assets/main-logo.png";
        if (!this.state.isReady) {
            return (
                <View style={genericStyle.container}>
                    <ActivityIndicator/>
                </View>
            )
        }
        return (
            <View style={genericStyle.container}>
                <Text style={textStyle.titleText}>GoodPet</Text>
                <Text>Witaj w testowej wersji aplikacji!</Text>

                <Text>{"\n"}</Text>
                <Image source={require(mainLogoSourcePath)} style={imagesStyle.mainLogo}/>
                <Text>{"\n"}</Text>

                <GpButton type={BUTTON_TYPE.PRIMARY} content={"Stwórz konto"} />

                <GpButton type={BUTTON_TYPE.SECONDARY} content={"Zaloguj się"}/>

            </View>
        );
    }
}
