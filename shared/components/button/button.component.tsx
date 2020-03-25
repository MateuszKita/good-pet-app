import React, {Component} from "react";
import {Text} from "react-native";
import {Button} from "native-base";
import {buttonsStyle} from "../../../styles/buttons.style";
import {BUTTON_TYPE} from "./button.constants";
import {GpButtonProps, GpButtonStyle} from "./button.model";

export default class GpButton extends Component<GpButtonProps> {

    public state: GpButtonStyle = {
        buttonType: BUTTON_TYPE.PRIMARY,
        buttonStyle: undefined,
        buttonTextStyle: undefined,
        width: undefined
    };

    private newState: GpButtonStyle;

    constructor(props: GpButtonProps) {
        super(props);

        if (props.type) {
            this.state.buttonType = props.type
        }

        if (props.width) {
            this.state.width = props.width
        }

    }

    componentDidMount = async () => {
        this.newState = {...this.state};
        this.setButtonStyles();
        this.setState(this.newState);
    };

    private setButtonStyles(): void {
        switch (this.newState.buttonType) {
            case BUTTON_TYPE.PRIMARY:
                this.newState.buttonStyle = {...buttonsStyle.primaryOnLightBackground, ...buttonsStyle.centerAligned};
                this.newState.buttonTextStyle = {...buttonsStyle.primaryButtonText};
                break;
            case BUTTON_TYPE.SECONDARY:
                this.newState.buttonStyle = {...buttonsStyle.secondaryOnLightBackground, ...buttonsStyle.centerAligned};
                this.newState.buttonTextStyle = {...buttonsStyle.secondaryButtonText};
                break;
            case BUTTON_TYPE.TRANSPARENT:
                this.newState.buttonStyle = {...buttonsStyle.transparent, ...buttonsStyle.centerAligned};
                this.newState.buttonTextStyle = {...buttonsStyle.transparentButtonText};
                break;
            default:
                this.newState.buttonStyle = {...buttonsStyle.primaryOnLightBackground, ...buttonsStyle.centerAligned};
                this.newState.buttonTextStyle = {...buttonsStyle.primaryButtonText};
        }
        if (this.state.width) {
            this.newState.buttonStyle = {...this.newState.buttonStyle, width: this.state.width};
        }
    }

    render() {
        return (
            <Button style={this.state.buttonStyle}
                    onPress={this.props.onPress}
                    transparent={this.state.buttonType === BUTTON_TYPE.TRANSPARENT}>
                <Text style={this.state.buttonTextStyle}>{this.props.content}</Text>
            </Button>
        );
    }

}
