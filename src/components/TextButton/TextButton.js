import React from "react";
import { Pressable } from "react-native";
import { primaryColors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
import Text from "../Text/index";
import styles from './Style';

const TextButton = (props) => {
    const {
        title,
        onPress
    } = props;

    return (
        <Pressable onPress={onPress}>
            <Text children={title} fontFamily={fonts.medium} color={primaryColors.dodgerBlue} />
        </Pressable>
    )
}

export default TextButton;