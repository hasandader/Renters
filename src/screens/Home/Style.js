import { StyleSheet } from 'react-native';
import { deviceWidth } from '../../lib/utility';
import { primaryColors } from '../../theme/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    progressWraper: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    progressCard: {
        marginBottom: 22,
        paddingTop: 50,
        borderWidth: 0
    },
    scrollView: {
        paddingBottom: 90,
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
    }
})