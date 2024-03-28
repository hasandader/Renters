import React, { useState } from "react";
import { View } from 'react-native';
import styles from './Style';
import sharedStyles from '../../SharedStyles/SharedStyles';
import Text from '../../components/Text/index';
import PoweredBy from '../../components/PoweredBy/index';
import HeaderLogo from "../../components/HeaderLogo/HeaderLogo";
import { fonts } from "../../theme/fonts";
import { primaryColors } from "../../theme/colors";
import Sections from "./components/Sections";
import LoginSection from './components/LoginSection';
import ConfirmSection from './components/ConfirmSection';

export default function Login(props) {
    const [phone, setPhone] = useState(null);
    const [section, setSection] = useState('login');

    return (
        <View style={styles.container}>
            <HeaderLogo />
            <Text
                children='تطبيق مستأجرين أساس العقاري'
                fontFamily={fonts.titleRegular}
                fontSize={16}
                color={primaryColors.martinique}
                lineHeight={35}
                align='center'
                mTop={45}
            />
            <Sections activeSection={section} />
            <Text
                children='مرحباً بك في تطبيق مستأجرين العقارات لدى أساس'
                fontFamily={fonts.medium}
                fontSize={14}
                color={primaryColors.martinique}
                align='right'
                mTop={35}
                mRight={33}
            />
            {
                section == 'login' ?
                    <LoginSection onPress={() => setSection('confirm')} />
                    :
                    <ConfirmSection
                        onResend={() => setSection('login')}
                        onPress={() => props.navigation.navigate('Office')}
                    />
            }
            <PoweredBy />
        </View>
    )
}