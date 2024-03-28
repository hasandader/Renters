import React from "react";
import { View } from "react-native";
import styles from './Style';


const DividedRow = (props) => {
    const {
        leftUnit,
        rightUnit,
        style
    } = props;

    return (
        <View style={[styles.container, style]}>
            {leftUnit}
            <View style={styles.divider} />
            {rightUnit}
        </View>
    )
}

export default DividedRow;