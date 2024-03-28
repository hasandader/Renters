import React, { useState, useEffect } from "react";
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Style';
import sharedStyles from '../../SharedStyles/SharedStyles';
import Text from '../../components/Text/index';
import PoweredBy from '../../components/PoweredBy/index';
import { fonts } from "../../theme/fonts";
import { primaryColors } from "../../theme/colors";
import { testLogo, checked } from '../../images/index';
import Button from '../../components/Button/index';
import Header from '../../components/Header/Header';

export default function SwitchOffice(props) {
    const offices = [1, 2, 3, 4];
    const [selected, setSelected] = useState(1);

    useEffect(() => {

    }, []);

    return (
        <View style={styles.container}>
            <Header title='تبديل المكتب العقاري' fontSize={14} back customBack onBack={() => props.navigation.navigate('AppStack')} />

            <ScrollView style={{ marginBottom: 78 }}
                contentContainerStyle={{ paddingBottom: 20 }} nestedScrollEnabled={true}>
                <Text
                    children='الرجاء اختيار المكتب العقاري الذي تود الدخول له'
                    fontFamily={fonts.medium}
                    fontSize={16}
                    color={primaryColors.martinique}
                    align='center'
                    mTop={44}
                />
                <Text
                    children='يمكنك اختيار المكتب العقاري  الذي تود تبديل الدخول إليه التحويل بين المكاتب العقارية لا يتطلب تسجيل الدخول لإتمام كل عملية تحويل مكتب'
                    fontFamily={fonts.medium}
                    fontSize={14}
                    color={primaryColors.gullGray}
                    align='center'
                    mRight={60}
                    mLeft={60}
                    mTop={17}
                />
                <View style={styles.offices}>
                    {
                        offices.map((item) => (
                            <TouchableOpacity style={
                                selected == item ?
                                    [styles.officeCard, sharedStyles.shadow]
                                    :
                                    styles.inactiveOfficeCard
                            }
                                onPress={() => {
                                    setSelected(item);
                                }}
                            >
                                {selected == item && <Image source={checked} style={styles.checked} />}
                                <Image source={testLogo} style={{ width: 80, height: 80 }} />
                                <Text
                                    children='مكتب بدر الحبيب للاستثمار العقاري'
                                    mRight={28}
                                    mLeft={28}
                                    mTop={15}
                                    align='center'
                                    lineHeight={15}
                                    fontFamily={fonts.titleRegular}
                                    fontSize={10}
                                    color={primaryColors.martinique}
                                />
                            </TouchableOpacity>
                        ))
                    }
                </View>

                <Button
                    style={styles.button}
                    title='تبديل المكتب'
                    titleStyle={styles.buttonTitle}
                />
            </ScrollView>
            <PoweredBy />
        </View>
    )
}