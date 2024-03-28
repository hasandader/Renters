import { StyleSheet } from "react-native";
import { deviceWidth } from '../../lib/utility';
import { primaryColors } from '../../theme/colors';

export default StyleSheet.create({
    container: {
        width: deviceWidth() * 0.87,
        backgroundColor: primaryColors.white,
        borderRadius: 5,
        alignSelf: 'center',
        paddingTop: 12,
        paddingBottom: 23,
        borderWidth: 1,
        borderColor: primaryColors.iron,
    }
})