import React from 'react';
import { View, Image } from 'react-native';
import { primaryColors } from '../../theme/colors';
import Text from '../Text/index';
import { asaas } from '../../images/index';
import styles from './Style';

const PoweredBy = (props) => {

    return (
        <View style={styles.container}>
            <Text children='Powerd By Asaas' color={primaryColors.sherpaBlue} />
            <Image source={asaas} style={styles.logo} />
        </View>
    )
}

export default PoweredBy;