import { StyleSheet } from 'react-native';
import { deviceWidth } from '../../lib/utility';
import { primaryColors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    listContainer: {
        paddingTop: 26,
        paddingBottom: 100
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: primaryColors.malachite,
        width: deviceWidth() * 0.42,
        paddingLeft: 8
    },
    inputTxtStyle: {
        textAlign: 'right',
        paddingRight: 5,
        paddingLeft: 5
    },
    topButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: deviceWidth() * 0.87,
        alignSelf: 'center',
        marginBottom: 6
    },
    button: {
        width: deviceWidth() * 0.42,
        height: 40,
        borderWidth: 1,
        borderColor: primaryColors.dodgerBlue,
        backgroundColor: 'transparent'
    },
    btnTxt: {
        color: primaryColors.dodgerBlue,
        fontFamily: fonts.medium,
        fontSize: 14
    },
    iconTxtStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%'
    }
})