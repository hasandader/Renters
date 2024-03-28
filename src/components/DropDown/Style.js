import { StyleSheet } from "react-native";
import { deviceWidth } from "../../lib/utility";
import { primaryColors } from "../../theme/colors";

export default StyleSheet.create({
    container: {
        borderWidth: 0.5,
        borderColor: primaryColors.iron,
        width: deviceWidth() * 0.87,
        alignSelf: 'center',
        borderRadius: 5,
        // position: 'absolute',
        // zIndex: 1,
        // top: 115,
        backgroundColor: primaryColors.white,
        marginBottom: 10,
        marginTop: -7,
        paddingTop: 15,
        paddingBottom: 10
    },
    divider: {
        borderWidth: 0.5,
        width: '92%',
        alignSelf: 'center',
        borderColor: primaryColors.iron,
        marginBottom: 8
    },
    btn: {
        paddingBottom: 5
    }
})