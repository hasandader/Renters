import { StyleSheet, I18nManager } from 'react-native';
import { deviceHeight, deviceWidth, isPlatformIos } from '../../lib/utility';
import { primaryColors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export default StyleSheet.create({
    buttonWraper: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        width: deviceWidth() * 0.85,
        height: 46,
        backgroundColor: primaryColors.sunglow,
        borderRadius: 6,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: fonts.medium,
        color: primaryColors.white,
        fontSize: 16,
        lineHeight: 25,
        textAlign: 'center',
        paddingTop: isPlatformIos() ? 6 : 0
    },
});