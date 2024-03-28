import { StyleSheet } from "react-native";
import { primaryColors } from "../theme/colors";

export default StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.18,
        shadowRadius: 3.84,

        elevation: 5,
    },
    lightShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.84,

        elevation: 5,
    },
    noShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.00,
        shadowRadius: 0.00,

        elevation: 0,
    },
    divider: {
        borderWidth: 0.5,
        width: '85%',
        borderColor: primaryColors.periwinkleGray,
        alignSelf: 'center',
        marginTop: 9,
        marginBottom: 9
    }
})