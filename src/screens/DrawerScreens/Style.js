import { StyleSheet } from "react-native";
import { deviceWidth, isIPhoneX, isPlatformIos } from "../../lib/utility";
import { primaryColors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollView: {
        paddingBottom: 30,
        paddingTop: 33
    },
    filter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: deviceWidth() * 0.87,
        height: 38,
        borderColor: primaryColors.iron,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingRight: 10,
        paddingLeft: 15,
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
        marginLeft: 14
    },
    avatarWraper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 25,
        marginBottom: 31
    },
    avatarText: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    editBtnWraper: {
        alignSelf: 'flex-start',
        padding: 10
    },
    cardBtn: {
        width: '75%',
        height: 30,
        marginTop: 23,
        borderWidth: 1,
        borderColor: primaryColors.sunglow,
        backgroundColor: 'transparent'
    },
    btnTitle: {
        color: primaryColors.sunglow,
        fontFamily: fonts.regular,
        fontSize: 14,
        paddingTop: isPlatformIos() ? 3 : 0
    },
    columnWrapper: {
        width: deviceWidth(),
        justifyContent: 'space-evenly'
    },
    button: {
        height: 40,
        marginTop: 91
    },
    buttonTitle: {
        fontFamily: fonts.bold,
        fontSize: 15
    },
    inactiveOfficeCard: {
        width: 163,
        height: 161,
        backgroundColor: primaryColors.white,
        alignItems: 'center',
        marginTop: 31,
        borderRadius: 8,
        paddingTop: 19,
        borderWidth: 1,
        borderColor: primaryColors.iron
    },
    officeCard: {
        width: 163,
        height: 161,
        backgroundColor: primaryColors.white,
        alignItems: 'center',
        marginTop: 31,
        borderRadius: 8,
        paddingTop: 19,
    },
    checked: {
        width: 20,
        height: 20,
        position: 'absolute',
        alignSelf: 'flex-end',
        right: 11,
        top: 9
    },
    offices: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 22
    }
})