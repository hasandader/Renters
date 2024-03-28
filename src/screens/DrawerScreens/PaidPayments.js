import React, { useState } from "react";
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './Style';
import Header from "../../components/Header/Header";
import CardUnit from "../../components/CardUnit/CardUnit";
import DividedRow from "../../components/DividedRow/DividedRow";
import Card from "../../components/Card/Card";
import DropDown from "../../components/DropDown/DropDown";
import Text from "../../components/Text";
import { downArraw } from '../../images/index';
import { fonts } from "../../theme/fonts";
import { primaryColors } from "../../theme/colors";

export default function PaidPayments(props) {
    const data = [
        {
            estateName: 'الراية 1',
            contractNO: '16972121',
            unitNO: '25-98',
            paymentAmount: '46985',
            paymentType: 'صيانة وخدمات',
            deadline: '20-01-2020 م'
        },
        {
            estateName: 'الراية 1',
            contractNO: '16972121',
            unitNO: '25-98',
            paymentAmount: '46985',
            paymentType: 'صيانة وخدمات',
            deadline: '20-01-2020 م'
        },
        {
            estateName: 'الراية 1',
            contractNO: '16972121',
            unitNO: '25-98',
            paymentAmount: '46985',
            paymentType: 'صيانة وخدمات',
            deadline: '20-01-2020 م'
        }
    ]

    const dropDownItems = [
        { title: 'دفعات كهرباء', value: '' },
        { title: 'دفعات صرف شيك', value: '' },
        { title: 'دفعات مياه', value: '' },
        { title: 'صيانة وخدمات', value: '' }
    ]

    const [isDropDown, setIsDropDown] = useState(false);

    return (
        <View style={styles.container}>
            <Header title='الدفعات المسددة' back customBack onBack={() => props.navigation.navigate('AppStack')} />

            <FlatList
                contentContainerStyle={styles.scrollView}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        <TouchableOpacity style={styles.filter} onPress={() => setIsDropDown(!isDropDown)}>
                            <Image source={downArraw} style={{ width: 12, height: 15 }} resizeMode='contain' />
                            <Text children='فرز  الدفعات' fontFamily={fonts.medium} color={primaryColors.gullGray} />
                        </TouchableOpacity>
                        {isDropDown && <DropDown items={dropDownItems} onPress={() => setIsDropDown(false)} />}
                    </View>
                }
                data={data}
                renderItem={({ item }) => (
                    <Card
                        style={{ marginBottom: 9 }}
                        children={
                            <>
                                <DividedRow
                                    style={{ marginTop: 20 }}
                                    leftUnit={
                                        <CardUnit
                                            info={item.estateName}
                                            title='إسم العقار'
                                            infoColor={primaryColors.azureRadiance}
                                        />
                                    }
                                    rightUnit={
                                        <CardUnit
                                            info={item.contractNO}
                                            infoColor={primaryColors.lima}
                                            title='عقد رقم'
                                        />
                                    }
                                />

                                <DividedRow
                                    style={{ marginTop: 20 }}
                                    leftUnit={
                                        <CardUnit
                                            info={item.paymentAmount}
                                            infoColor={primaryColors.azureRadiance}
                                            title={'قيمة الدفعة'}
                                        />
                                    }
                                    rightUnit={
                                        <CardUnit
                                            info={item.unitNO}
                                            infoColor={primaryColors.lima}
                                            title='وحدة رقم'
                                        />
                                    }
                                />

                                <DividedRow
                                    style={{ marginTop: 20 }}
                                    leftUnit={
                                        <CardUnit
                                            info={item.paymentType}
                                            infoColor={primaryColors.azureRadiance}
                                            title='نوع الدفعة'
                                        />
                                    }
                                    rightUnit={
                                        <CardUnit
                                            info={item.deadline}
                                            infoColor={primaryColors.lima}
                                            title='تاريخ استحقاق الدفعة'
                                        />
                                    }
                                />

                            </>
                        }
                    />
                )}
            />
        </View>
    )
}