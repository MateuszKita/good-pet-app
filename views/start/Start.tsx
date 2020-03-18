import React, {Component} from "react";
import {Alert, Image, Text, View} from "react-native";
import {genericStyle} from "../../styles/generic.style";
import {textStyle} from "../../styles/text.style";
import {imagesStyle} from "../../styles/images.style";
import GpButton from "../../shared/components/button/button.component";
import {BUTTON_TYPE} from "../../shared/components/button/button.constants";
import {database} from "firebase";

export default class Start extends Component<{}> {

    public state: any = {
        message: "no message",
    };

    componentDidMount = async () => {
        database().ref('start-message').on('value', (snapshot) => {
            if (snapshot.val()) {
                this.setState({message: snapshot.val()});
            }
        });

        database().ref('users').on('value', (snapshot) => {
            console.log("!!!", snapshot)
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
                          onPress={() => Alert.alert("test")}/>

                <GpButton type={BUTTON_TYPE.SECONDARY}
                          content={"Zaloguj się"}/>

            </View>
        );
    }

}
