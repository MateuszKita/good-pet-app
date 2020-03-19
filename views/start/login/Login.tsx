import React, {Component} from "react";
import {View} from "react-native";
import {genericStyle} from "../../../styles/generic.style";
import {BUTTON_TYPE} from "../../../shared/components/button/button.constants";
import GpButton from "../../../shared/components/button/button.component";

export default class Login extends Component<any> {

    public state: any = {};

    componentDidMount = async () => {
    };

    render() {
        return (
            <View style={genericStyle.container}>
                <GpButton type={BUTTON_TYPE.SECONDARY}
                          content={"Login"}
                          onPress={() => this.props.navigation.navigate('Start')}/>
            </View>
        );
    }

}
