import { StyleSheet } from "react-native";
import { primaryColors } from "../../theme/colors";

export default StyleSheet.create({
    container: {
        width: '85%',
        alignSelf: 'center',
        marginBottom: 15
    },
    rowWraper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 5,
        paddingBottom: 9
    },
    arraw: {
        width: 18,
        height: 18
    },
    divider: {
        width: '100%',
        borderWidth: 0.5,
        borderColor: primaryColors.periwinkleGray,
    }
})