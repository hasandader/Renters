import { StyleSheet } from "react-native";
import { primaryColors } from "../../../theme/colors";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    listContainer: {
        paddingLeft: 25,
        paddingRight: 15,
        marginTop: 15,
        marginBottom: 20
    },
    flat: {
        width: 15,
        height: 22,
        marginRight: 10,
        marginLeft: 5
    },
    unit: {
        width: 23,
        height: 24,
        marginRight: 5,
        marginLeft: 5
    },
    amount: {
        width: 25,
        height: 25,
        marginRight: 5
    },
    contract: {
        width: 35,
        height: 35
    },
    progressText: {
        position: 'absolute',
        alignSelf: 'center',
        top: 38
    },
    progressWraper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    progressOutCircle: {
        width: 98,
        height: 98,
        borderWidth: 1,
        borderRadius: 50,
        justifyContent: 'center',
        borderColor: primaryColors.silver
    },
    percentage: {
        position: 'absolute',
        alignSelf: 'center',
        alignItems: 'center',
    },
    floatTitle: {
        bottom: 18
    }
})