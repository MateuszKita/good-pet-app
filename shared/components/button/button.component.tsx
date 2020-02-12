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
        buttonTextStyle: undefined
    };

    private newState: GpButtonStyle;

    constructor(props: GpButtonProps) {
        super(props);

        if (props.type) {
            this.state.buttonType = props.type
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
            default:
        }
    }

    render() {
        return (
            <Button style={this.state.buttonStyle}>
                <Text style={this.state.buttonTextStyle}>{this.props.content}</Text>
            </Button>
        );
    }

}
