import {BUTTON_TYPE} from "./button.constants";

export interface GpButtonProps {
    type: BUTTON_TYPE;

    onPress?: (...args) => any;

    content?: string;
    width?: number;
}

export interface GpButtonStyle {
    buttonType: BUTTON_TYPE,
    buttonStyle?: Object | undefined,
    buttonTextStyle?: Object | undefined,
    width?: number,
}
