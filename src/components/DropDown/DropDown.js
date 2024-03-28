import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './Style';
import Text from '../Text';
import { primaryColors } from '../../theme/colors';

const DropDown = (props) => {
    const {
        onPress,
        items = []
    } = props;

    return (
        <View style={styles.container}>
            {
                items.map((item, index) => (
                    <View>
                        <TouchableOpacity style={styles.btn} onPress={onPress}>
                            <Text children={item.title} align='right' mRight={20} />
                        </TouchableOpacity>
                        {index != (items.length - 1) && <View style={styles.divider} />}
                    </View>
                ))
            }

        </View>
    )
}

export default DropDown;