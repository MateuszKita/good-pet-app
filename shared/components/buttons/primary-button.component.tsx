import React, {Component} from "react";
import {Text} from "react-native";
import {Button} from "native-base";
import {buttonsStyle} from "../../../styles/buttons.style";

export default class PrimaryButton extends Component {

    render() {
        return (
            <Button primary style={{...buttonsStyle.primaryOnLightBackground, ...buttonsStyle.centerAligned}}>
                <Text style={buttonsStyle.primaryButtonText}>Stwórz konto</Text>
            </Button>
        );
    }

}
