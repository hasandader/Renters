import React from "react";
import { View } from 'react-native';
import TextButton from "../../../components/TextButton/TextButton";
import Text from "../../../components/Text/index";
import { fonts } from "../../../theme/fonts";
import { primaryColors } from "../../../theme/colors";
import styles from './Style';

const TitleRow = (props) => {
    const {
        buttonTitle,
        title,
        onPress
    } = props;

    return (
        <View style={styles.container}>
            <TextButton title={buttonTitle} onPress={onPress} />
            <Text
                children={title}
                fontFamily={fonts.titleRegular}
                color={primaryColors.martinique}
            />
        </View>
    )
}

export default TitleRow;