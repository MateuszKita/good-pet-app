import React, {Component} from "react";
import {Dimensions, View} from "react-native";
import {genericStyle} from "../../../styles/generic.style";
import {BUTTON_TYPE} from "../../../shared/components/button/button.constants";
import GpButton from "../../../shared/components/button/button.component";
import {Content} from "native-base";
import GpInput from "../../../shared/components/input/input.component";

const {width, height} = Dimensions.get('window');

export default class Login extends Component<any> {

    public state: any = {};

    componentDidMount = async () => {
    };

    render() {
        return (
            <View style={{display: "flex", justifyContent: "center", height}}>
                <View style={{display: "flex", justifyContent: "center", height: height * 0.35}}>
                    <Content style={{marginLeft: width * 0.1, marginRight: width * 0.1}}>
                        <GpInput label="Adres e-mail"/>
                        <GpInput label="Hasło"/>
                    </Content>
                    <View style={{height: 100, display: "flex", flexDirection: "row", flexWrap: "nowrap", marginLeft: width * 0.1, marginRight: width * 0.1, justifyContent: "center"}}>
                        <GpButton type={BUTTON_TYPE.SECONDARY}
                                  width={width * 0.35}
                                  content={"Powrót"}
                                  onPress={() => this.props.navigation.navigate('Start')}/>
                        <GpButton type={BUTTON_TYPE.PRIMARY}
                                  width={width * 0.35}
                                  content={"Zaloguj się"}
                                  onPress={() => this.props.navigation.navigate('Start')}/>
                    </View>
                </View>
            </View>
        );
    }

}
