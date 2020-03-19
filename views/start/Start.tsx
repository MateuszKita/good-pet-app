import React, {Component} from "react";
import {Image, Text, View} from "react-native";
import {genericStyle} from "../../styles/generic.style";
import {textStyle} from "../../styles/text.style";
import {imagesStyle} from "../../styles/images.style";
import GpButton from "../../shared/components/button/button.component";
import {BUTTON_TYPE} from "../../shared/components/button/button.constants";
import {database} from "firebase";

const appInfo: any = require("../../app.json");

export default class Start extends Component<any> {

    constructor(props) {
        super(props)
    }

    public state: any = {
        message: "",
    };

    componentDidMount = async () => {
        database().ref('start-message').on('value', (snapshot) => {
            if (snapshot.val()) {
                this.setState({message: snapshot.val()});
            }
        });

        database().ref('users').on('value', (snapshot) => {
            console.log("!!! users", snapshot)
        });
    };

    render() {
        const mainLogoSourcePath = "../../assets/main-logo.png";

        return (
            <View style={genericStyle.container}>
                <Text style={textStyle.titleText}>GoodPet</Text>
                <Text>{this.state.message}</Text>

                <Text>{"\n"}</Text>
                <Image source={require(mainLogoSourcePath)} style={imagesStyle.mainLogo}/>
                <Text>{"\n"}</Text>

                <GpButton type={BUTTON_TYPE.PRIMARY}
                          content={"Stwórz konto"}
                          onPress={() => this.props.navigation.navigate('Register')}/>

                <GpButton type={BUTTON_TYPE.SECONDARY}
                          content={"Zaloguj się"}
                          onPress={() => this.props.navigation.navigate('Login')}/>

                <Text style={{position: "absolute", top: 30, right: 10, color: "gray"}}>v. {appInfo.expo.version}</Text>
            </View>
        );
    }

}