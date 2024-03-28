import { StyleSheet } from "react-native";
import { primaryColors } from "../../../theme/colors";

export default StyleSheet.create({
    cardContainer: {
        paddingRight: 10,
        paddingLeft: 13,
        paddingBottom: 10,
        borderWidth: 1,
        marginBottom: 12,
        borderColor: primaryColors.iron,
    },
    status: {
        width: 20,
        height: 20,
    },
    statusTitle: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
    },
    timeTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    timeDateRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    redStatus: {
        width: 7,
        height: 7,
        backgroundColor: primaryColors.lochmara,
        borderRadius: 5,
        marginLeft: 6,
        marginBottom: 4
    }
})