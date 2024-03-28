import React from "react";
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './Style';
import { goArraw } from '../../images/index';
import Text from "../Text";
import { primaryColors } from "../../theme/colors";

const DrawerItem = (props) => {
    const {
        style,
        title,
        onPress
    } = props;

    return (
        <View style={[styles.container, style]}>
            <TouchableOpacity style={styles.rowWraper} onPress={onPress}>
                <Image source={goArraw} style={styles.arraw} />
                <Text
                    children={title}
                    fontSize={16}
                    color={primaryColors.martinique}
                />
            </TouchableOpacity>
            <View style={styles.divider} />
        </View>
    )
}

export default DrawerItem;