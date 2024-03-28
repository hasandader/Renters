import { StyleSheet } from "react-native";
import { primaryColors } from "../../theme/colors";

export default StyleSheet.create({
    container: {
        width: 80,
        height: 80,
        backgroundColor: primaryColors.white,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 59
    },
    logo: {
        width: 70,
        height: 65
    },
})