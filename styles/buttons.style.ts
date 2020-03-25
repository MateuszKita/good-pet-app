import {Dimensions, StyleSheet} from "react-native";
import {primaryAccent3, secondaryAccent2, secondaryAccent3, textColorDark, textColorLight} from "./theme";

const buttonWidth = Dimensions.get('window').width / 2 - 20;

export const buttonsStyle = StyleSheet.create({
    centerAligned: {
        alignSelf: 'center',
    },
    primaryOnLightBackground: {
        padding: 10,
        margin: 5,
        width: buttonWidth,
        justifyContent: 'center',
        backgroundColor: primaryAccent3,
        borderRadius: 5,
    },
    primaryOnDarkBackground: {
        padding: 10,
        margin: 5,
        width: buttonWidth,
        justifyContent: 'center',
        backgroundColor: primaryAccent3,
        borderWidth: 0.5,
        borderColor: secondaryAccent3,
        borderRadius: 5,
    },
    secondaryOnLightBackground: {
        padding: 10,
        margin: 5,
        width: buttonWidth,
        justifyContent: 'center',
        backgroundColor: secondaryAccent2,
        borderWidth: 1,
        borderColor: secondaryAccent3,
        borderRadius: 5,
    },
    secondaryOnDarkBackground: {
        padding: 10,
        margin: 5,
        width: buttonWidth,
        justifyContent: 'center',
        backgroundColor: secondaryAccent2,
        borderRadius: 5,
    },
    transparent: {
        padding: 10,
        margin: 5,
        width: buttonWidth,
        justifyContent: 'center',
        backgroundColor: "transparent",
        borderRadius: 5,
    },
    primaryButtonText: {
        color: textColorLight
    },
    secondaryButtonText: {
        color: textColorDark
    },
    transparentButtonText: {
        color: "gray"
    },
});
