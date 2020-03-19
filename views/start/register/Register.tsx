import React, {Component} from "react";
import {View} from "react-native";
import {genericStyle} from "../../../styles/generic.style";
import {BUTTON_TYPE} from "../../../shared/components/button/button.constants";
import GpButton from "../../../shared/components/button/button.component";
import GpInput from "../../../shared/components/input/input.component";

export default class Register extends Component<any> {

    public state: any = {};

    componentDidMount = async () => {
    };

    render() {
        return (
            <View style={genericStyle.container}>
                <GpInput label={"test"}/>
                <GpButton type={BUTTON_TYPE.SECONDARY}
                          content={"Register"}
                          onPress={() => this.props.navigation.navigate('Start')}/>
            </View>
        );
    }

}
