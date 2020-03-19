import React, {Component} from "react";
import {Input, Item, Label} from "native-base";
import {GpInputProps} from "./input.model";
import {INPUT_LABEL_TYPE} from "./input.constants";

export default class GpInput extends Component<GpInputProps> {

    public state: GpInputProps = {
        label: "",
        labelType: INPUT_LABEL_TYPE.FLOATING,
        valid: undefined
    };

    constructor(props: GpInputProps) {
        super(props);

        if (props.label) {
            this.state.label = props.label
        }

    }

    //
    // componentDidMount = async () => {
    //     this.newState = {...this.state};
    //     this.setButtonStyles();
    //     this.setState(this.newState);
    // };

    // private setButtonStyles(): void {
    //     switch (this.newState.buttonType) {
    //         case BUTTON_TYPE.PRIMARY:
    //             this.newState.buttonStyle = {...buttonsStyle.primaryOnLightBackground, ...buttonsStyle.centerAligned};
    //             this.newState.buttonTextStyle = {...buttonsStyle.primaryButtonText};
    //             break;
    //         case BUTTON_TYPE.SECONDARY:
    //             this.newState.buttonStyle = {...buttonsStyle.secondaryOnLightBackground, ...buttonsStyle.centerAligned};
    //             this.newState.buttonTextStyle = {...buttonsStyle.secondaryButtonText};
    //             break;
    //         default:
    //     }
    // }

    render() {
        return (
            <Item fixedLabel={this.state.labelType === INPUT_LABEL_TYPE.FIXED}
                  inlineLabel={this.state.labelType === INPUT_LABEL_TYPE.INLINE}
                  floatingLabel={this.state.labelType === INPUT_LABEL_TYPE.FLOATING}
                  error={this.state.valid === false}
                  success={this.state.valid === true}>
                <Label>{this.state.label}</Label>
                <Input/>
            </Item>
        );
    }

}
