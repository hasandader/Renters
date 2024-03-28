import { StyleSheet } from 'react-native';
import { fonts } from '../../theme/fonts';
import { primaryColors } from '../../theme/colors';
import { isIPhoneX } from '../../lib/utility';

export default StyleSheet.create({
    label: {
        textAlign: 'right',
        fontFamily: fonts.titleRegular,
        fontSize: 11,
        color: primaryColors.sunglow,
        marginTop: 5,
        marginLeft: 5
    },
    active: {
        width: 85,
        alignSelf: 'flex-start',
        paddingLeft: 8,
        height: 44,
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: primaryColors.athensGray
    },
    notifs: {
        width: isIPhoneX() ? 100 : 95,
    },
    estates: {
        width: 95,
    },
    home: {
        width: 95,
        paddingLeft: 5
    },
    financial: {
        width: 77
    }
})