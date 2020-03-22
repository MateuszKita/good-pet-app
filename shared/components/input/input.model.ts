import {INPUT_LABEL_TYPE} from "./input.constants";

export interface GpInputProps {
    label: string;
    value: any;
    onChangeValue: (value: any) => void;
    labelType?: INPUT_LABEL_TYPE;
    valid?: boolean;
    secureTextEntry?: boolean;
}
