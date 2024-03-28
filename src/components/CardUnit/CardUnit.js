import React from "react";
import { View, Image } from "react-native";
import { primaryColors } from "../../theme/colors";
import styles from "./Style";
import Text from '../Text/index';
import { fonts } from "../../theme/fonts";

const CardUnit = (props) => {
    const {
        infoColor,
        info,
        title,
        containerStyle
    } = props;

    return (
        <View style={[styles.container, containerStyle]}>
            <Text children={title} color={primaryColors.martinique} />
            <Text children={info} fontFamily={fonts.bold} color={infoColor} />
        </View>
    )
}

export default CardUnit;