import { StyleSheet } from "react-native";
import { primaryColors } from "../../theme/colors";

export default StyleSheet.create({
    divider: {
        borderWidth: 1,
        borderColor: primaryColors.snuff,
        height: 27,
        width: 1,
        alignSelf: 'center'
    },
    container: {
        flexDirection: 'row'
    }
})