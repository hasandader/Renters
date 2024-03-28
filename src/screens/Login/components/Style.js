import { StyleSheet } from 'react-native';
import { deviceWidth } from '../../../lib/utility';
import { primaryColors } from '../../../theme/colors';
import { fonts } from '../../../theme/fonts';

export default StyleSheet.create({
    sectionsRow: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginTop: 32,
        width: 250
    },
    section: {
        width: 120,
        height: 30,
        borderRadius: 4,
        borderBottomWidth: 3,
        borderBottomColor: primaryColors.sunglow,
        backgroundColor: primaryColors.white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 3
    },
    inactiveSection: {
        width: 120,
        height: 30,
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: primaryColors.white,
        borderColor: primaryColors.athensGray,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 3
    },
    input: {
        width: deviceWidth() * 0.83,
        borderWidth: 1,
        borderColor: primaryColors.iron,
        marginTop: 22,
        paddingLeft: 10
    },
    inputText: {
        paddingLeft: 8,
        paddingRight: 15,
        textAlign: 'right',
        fontFamily: fonts.regular,
        fontSize: 15,
        color: primaryColors.doveGray
    },
    button: {
        width: deviceWidth() * 0.83,
        height: 40,
        borderRadius: 4,
        marginTop: 22
    },
    titleStyle: {
        fontFamily: fonts.bold,
        fontSize: 15
    },
    buttonTxt: {
        marginTop: 34,
        alignSelf: 'flex-end',
        marginRight: 27
    }
})