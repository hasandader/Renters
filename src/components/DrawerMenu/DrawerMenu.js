import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './Style';
import { avatar } from '../../images/index';
import Text from '../Text';
import { fonts } from '../../theme/fonts';
import { primaryColors } from '../../theme/colors';
import DrawerItem from '../DrawerItem/DrawerItem';

const DrawerMenu = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <TouchableOpacity
                    style={styles.avatarWraper}
                    activeOpacity={1}
                    onPress={() => props.navigation.navigate('DrawerStack', {
                        screen: 'Profile'
                    })}
                >
                    <View>
                        <Text
                            children='رياض المالكي'
                            fontFamily={fonts.titleRegular}
                            color={primaryColors.martinique}
                            align='right'
                        />
                        <Text
                            children='test.test@test.com'
                            color={primaryColors.gullGray}
                            textDecorationLine='underline'
                            align='right'
                        />
                    </View>
                    <View style={styles.circle}>
                        <Image source={avatar} style={styles.avatar} />
                    </View>
                </TouchableOpacity>

                <DrawerItem title='تبديل المكتب'
                    onPress={() => props.navigation.navigate('DrawerStack', {
                        screen: 'SwitchOffice'
                    })}
                />
                <DrawerItem title='الدفعات المستحقة' onPress={() => props.navigation.navigate('DrawerStack', {
                    screen: 'RequiredPayments'
                })} />
                <DrawerItem title='الدفعات المسددة' onPress={() => props.navigation.navigate('DrawerStack', {
                    screen: 'PaidPayments'
                })} />
                <DrawerItem title='التقارير' />
                <DrawerItem title='السندات' />
                <DrawerItem title='المصروفات'
                    onPress={() => props.navigation.navigate('DrawerStack', {
                        screen: 'Outgoings'
                    })}
                />
                <DrawerItem title='تواصل معنا' />
                <DrawerItem title='تسجيل الخروج' />

            </View>
            <View style={styles.sideLine} />
        </View>
    )
}

export default DrawerMenu;