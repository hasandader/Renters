import { StyleSheet } from 'react-native';
import { deviceWidth } from '../../lib/utility';
import { primaryColors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
        paddingTop: 19
    },
    checked: {
        width: 20,
        height: 20,
        position: 'absolute',
        alignSelf: 'flex-end',
        right: 11,
        top: 9
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
    }
})