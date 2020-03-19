import React, {Component} from 'react'
import {ActivityIndicator} from 'react-native'
import {View} from 'react-native';
import {loadAsync} from 'expo-font'
import {Ionicons} from "@expo/vector-icons";
import {genericStyle} from "./styles/generic.style";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Start from "./views/start/Start";
import Login from "./views/start/login/Login";
import Register from "./views/start/register/Register";
import "react-native-gesture-handler";
import "./config/firebase.config"

const Stack = createStackNavigator();

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
            console.error('Could not load native-base', 2);
        }

        this.setState({isReady: true});
    };

    render() {
        return this.state.isReady
            ? (
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Start" headerMode="none">
                        <Stack.Screen options={{}}
                                      name="Start"
                                      component={Start}/>
                        <Stack.Screen options={{}}
                                      name="Login"
                                      component={Login}/>
                        <Stack.Screen options={{}}
                                      name="Register"
                                      component={Register}/>
                    </Stack.Navigator>
                </NavigationContainer>
            )
            : (
                <View style={genericStyle.container}>
                    <ActivityIndicator/>
                </View>
            );
    }
}
