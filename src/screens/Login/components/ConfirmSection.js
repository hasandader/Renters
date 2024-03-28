import React from "react";
import { TouchableOpacity, View } from "react-native";
import styles from './Style';
import Input from '../../../components/Input/index';
import Button from "../../../components/Button";
import { confirmed } from '../../../images/index';
import Text from "../../../components/Text";
import { fonts } from "../../../theme/fonts";
import { primaryColors } from "../../../theme/colors";

const ConfirmSection = (props) => {
    const {
        onResend,
        onPress
    } = props;

    return (
        <View>
            <Input
                containerStyle={styles.input}
                leftIcon={confirmed}
                leftIconStyle={{ width: 20, height: 20 }}
                disabled={true}
                inputTxtStyle={styles.inputText}
                placeholder='أدخل الرمز'
                keyboardType='numeric'
            />
            <TouchableOpacity style={styles.buttonTxt} onPress={onResend}>
                <Text
                    children='إعادة إرسال رمز التأكيد'
                    fontFamily={fonts.regular}
                    fontSize={14}
                    color={primaryColors.navyBlue}
                    textDecorationLine='underline'
                    align='right'
                />
            </TouchableOpacity>
            <Button
                style={[styles.button, { marginTop: 14 }]}
                title='تأكيد الرمز'
                titleStyle={styles.titleStyle}
                onPress={onPress}
            />
        </View>
    )
}

export default ConfirmSection;