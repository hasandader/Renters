import { StyleSheet } from "react-native";
import { isIPhoneX } from "../../lib/utility";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: isIPhoneX() ? 10 : 0,
    },
    left: {
        flex: 1
    },
    center: {
        flex: 1.5
    },
    right: {
        flex: 1,
        alignItems: 'flex-end'
    },
    menu: {
        width: 30,
        height: 18,
        marginRight: 25
    },
    back: {
        flex: 1,
    },
    arraw: {
        width: 23,
        height: 23,
        marginLeft: 25
    }
})