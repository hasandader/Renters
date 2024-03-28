import React from 'react';
import { View } from 'react-native';
import styles from './Style';
import sharedStyles from '../../SharedStyles/SharedStyles';

const Card = (props) => {
    const {
        children,
        style
    } = props;

    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}

export default Card;