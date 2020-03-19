import React, {Component} from "react";
import {View} from "react-native";
import {genericStyle} from "../../../styles/generic.style";
import {BUTTON_TYPE} from "../../../shared/components/button/button.constants";
import GpButton from "../../../shared/components/button/button.component";
import GpInput from "../../../shared/components/input/input.component";
import {Content} from "native-base";

export default class Register extends Component<any> {

    public state: any = {};

    componentDidMount = async () => {
    };

    render() {
        return (
            <View style={genericStyle.container}>
                {/*<Form>*/}
                <Content style={{marginLeft: 10, marginRight: 10}}>
                    <GpInput label="Adres e-mail"/>
                    <GpInput label="Hasło"/>
                </Content>
                {/*</Form>*/}
                <GpButton type={BUTTON_TYPE.SECONDARY}
                          content={"Register"}
                          onPress={() => this.props.navigation.navigate('Start')}/>
            </View>
        );
    }

}
