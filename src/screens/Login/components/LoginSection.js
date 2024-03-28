import React from "react";
import { View } from "react-native";
import styles from './Style';
import Input from '../../../components/Input/index';
import Button from "../../../components/Button";
import { confirmed } from '../../../images/index';

const LoginSection = (props) => {
    const {
        onPress,
        active
    } = props;

    return (
        <View>
            <Input
                containerStyle={styles.input}
                leftIcon={confirmed}
                leftIconStyle={{ width: 20, height: 20 }}
                disabled={true}
                inputTxtStyle={styles.inputText}
                placeholder='رقم الموبايل'
                keyboardType='phone-pad'
            />
            <Button
                style={styles.button}
                title='إرسال الرمز'
                titleStyle={styles.titleStyle}
                onPress={onPress}
            />
        </View>
    )
}

export default LoginSection;