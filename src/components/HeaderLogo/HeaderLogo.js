import React from 'react';
import { View, Image } from 'react-native';
import { asaas } from '../../images/index';
import styles from './Style';
import sharedStyles from '../../SharedStyles/SharedStyles';

const HeaderLogo = (props) => {

    return (
        <View style={[styles.container, sharedStyles.shadow]}>
            <Image source={asaas} style={styles.logo} />
        </View>
    )
}

export default HeaderLogo;