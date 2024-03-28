import { StyleSheet } from "react-native";
import { isIPhoneX } from "../../lib/utility";
import { primaryColors } from "../../theme/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    subContainer: {
        flex: 1,
    },
    avatar: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: primaryColors.sunglow,
        borderRadius: 30
    },
    circle: {
        width: 75,
        height: 75,
        borderWidth: 3,
        borderRadius: 40,
        borderColor: primaryColors.sunglow,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 7
    },
    avatarWraper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 23,
        marginTop: isIPhoneX() ? 50 : 67,
        marginBottom: 48
    },
    sideLine: {
        backgroundColor: primaryColors.sunglow,
        height: '100%',
        width: 15
    }
})