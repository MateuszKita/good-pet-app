import React, {Component} from "react";
import {Dimensions, Keyboard, Text, View} from "react-native";
import {BUTTON_TYPE} from "../../../shared/components/button/button.constants";
import GpButton from "../../../shared/components/button/button.component";
import GpInput from "../../../shared/components/input/input.component";
import {GpInputProps} from "../../../shared/components/input/input.model";
import {genericStyle} from "../../../styles/generic.style";
import {auth} from "firebase";
import {Toast} from "native-base";

const {width, height} = Dimensions.get('window');

export default class PasswordReset extends Component<any> {

    public state: { containerHeight: number, emailValue: string } = {
        containerHeight: height,
        emailValue: ""
    };

    constructor(props: GpInputProps) {
        super(props);
    }

    private onKeyboardShow(event: any): void {
        if (event?.endCoordinates) {
            this.setState({containerHeight: height - event.endCoordinates.height});
        }
    }

    private onKeyboardHide(event: any): void {
        if (event?.endCoordinates) {
            this.setState({containerHeight: height - event.endCoordinates.height});
        }
    }

    onChangeEmailValue = value => this.setState({...this.state, emailValue: value});

    private handleResetPassword() {
        auth()
            .sendPasswordResetEmail(this.state.emailValue)
            .then(() => {
                Toast.show({
                    text: "Wysłano e-mail z linkiem do resetu hasła na wskazany adres e-mail",
                    duration: 5000,
                    position: "top",
                    style: {
                        backgroundColor: "blue"
                    },
                    textStyle: {
                        textAlign: "center"
                    },
                });
                this.props.navigation.navigate("Login");
            })
            .catch(error => {
                console.log(error);
                Toast.show({
                    text: error.message || "Provided data is incorrect",
                    duration: 3000,
                    position: "top",
                    style: {
                        backgroundColor: "red"
                    },
                    textStyle: {
                        textAlign: "center"
                    }
                });
            })
    }

    componentDidMount = async () => {
        Keyboard.addListener('keyboardDidShow', this.onKeyboardShow.bind(this));
        Keyboard.addListener('keyboardDidHide', this.onKeyboardHide.bind(this));
    };

    componentWillUnmount = async () => {
        Keyboard.removeAllListeners();
    };

    render() {
        return (
            <View style={genericStyle.container}>
                <View style={{
                    paddingBottom: height - this.state.containerHeight,
                    marginLeft: width * 0.1,
                    marginRight: width * 0.1
                }}>
                    <View style={{
                        flex: 1,
                        justifyContent: "flex-end",
                    }}>
                        <View style={{
                            paddingBottom: 60
                        }}>
                            <Text>Wpisz adres e-mail, który ma zostać wysłany link weryfikacyjny</Text>
                        </View>

                        <GpInput value={this.state.emailValue}
                                 onChangeValue={this.onChangeEmailValue}
                                 label="E-mail"/>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        flexWrap: "nowrap",
                        flex: 1
                    }}>
                        <GpButton type={BUTTON_TYPE.SECONDARY}
                                  width={width * 0.35}
                                  content={"Powrót"}
                                  onPress={() => this.props.navigation.navigate("Start")}/>
                        <GpButton type={BUTTON_TYPE.PRIMARY}
                                  width={width * 0.35}
                                  content={"Zaloguj się"}
                                  onPress={() => this.handleResetPassword()}/>
                    </View>
                </View>
            </View>
        );
    }

}
