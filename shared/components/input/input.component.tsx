import React, {Component} from "react";
import {Input, Item, Label} from "native-base";
import {GpInputProps} from "./input.model";
import {INPUT_LABEL_TYPE} from "./input.constants";

export default class GpInput extends Component<GpInputProps> {

    public state: GpInputProps = {
        value: "",
        onChangeValue: undefined,
        label: "",
        labelType: INPUT_LABEL_TYPE.FLOATING,
        valid: undefined,
        secureTextEntry: false
    };

    constructor(props: GpInputProps) {
        super(props);

        if (props.value) {
            this.state.value = props.value;
        }

        if (props.onChangeValue) {
            this.state.onChangeValue = (val) => {
                this.setState({...this.state, value: val});
                props.onChangeValue(val);
            }
        }

        if (props.label) {
            this.state.label = props.label;
        }

        if (props.labelType) {
            this.state.labelType = props.labelType;
        }

        if (props.valid) {
            this.state.valid = props.valid;
        }

        if (props.secureTextEntry) {
            this.state.secureTextEntry = props.secureTextEntry;
        }

    }

    render() {
        return (
            <Item fixedLabel={this.state.labelType === INPUT_LABEL_TYPE.FIXED}
                  inlineLabel={this.state.labelType === INPUT_LABEL_TYPE.INLINE}
                  floatingLabel={this.state.labelType === INPUT_LABEL_TYPE.FLOATING}
                  error={this.state.valid === false}
                  success={this.state.valid === true}>
                <Label>{this.state.label}</Label>
                <Input value={this.state.value} onChangeText={this.state.onChangeValue}
                       secureTextEntry={this.state.secureTextEntry}/>
            </Item>
        );
    }

}
