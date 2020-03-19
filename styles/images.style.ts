import {Dimensions, StyleSheet} from "react-native";

const dimensions = Dimensions.get('window');
const imageHeight = dimensions.width / 2;
const imageWidth = dimensions.width / 2;

export const imagesStyle = StyleSheet.create({
    mainLogo: {
        height: imageHeight,
        width: imageWidth,
    },
});