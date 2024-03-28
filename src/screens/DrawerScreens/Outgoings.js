import React, { useState } from 'react';
import { View, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './Style';
import Text from '../../components/Text';
import Header from '../../components/Header/Header';
import { downArraw } from '../../images/index';
import DropDown from '../../components/DropDown/DropDown';
import { primaryColors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';
import Card from '../../components/Card/Card';
import DividedRow from '../../components/DividedRow/DividedRow';
import CardUnit from '../../components/CardUnit/CardUnit';


export default function Outgoings(props) {
    const data = [
        {
            estateName: 'الراية 1',
            contractNO: '16972121',
            expenseValue: '46985',
            schedulingType: 'نصف سنوي',
            expenseType: 'صيانة وخدمات',
            dueDate: '20-01-2020 م'
        },
        {
            estateName: 'الراية 1',
            contractNO: '16972121',
            expenseValue: '46985',
            schedulingType: 'نصف سنوي',
            expenseType: 'صيانة وخدمات',
            dueDate: '20-01-2020 م'
        },
        {
            estateName: 'الراية 1',
            contractNO: '16972121',
            expenseValue: '46985',
            schedulingType: 'نصف سنوي',
            expenseType: 'صيانة وخدمات',
            dueDate: '20-01-2020 م'
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
            <Header title='المصروفات' back customBack onBack={() => props.navigation.navigate('AppStack')} />

            <FlatList
                contentContainerStyle={styles.scrollView}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        <TouchableOpacity style={styles.filter} onPress={() => setIsDropDown(!isDropDown)}>
                            <Image source={downArraw} style={{ width: 12, height: 15 }} resizeMode='contain' />
                            <Text children='فرز  المصروف' fontFamily={fonts.medium} color={primaryColors.gullGray} />
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
                                            infoColor={primaryColors.sunglow}
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
                                            info={item.expenseValue}
                                            infoColor={primaryColors.sunglow}
                                            title={'قيمة المصروف'}
                                        />
                                    }
                                    rightUnit={
                                        <CardUnit
                                            info={item.schedulingType}
                                            infoColor={primaryColors.lima}
                                            title='نوع الجدولة'
                                        />
                                    }
                                />

                                <DividedRow
                                    style={{ marginTop: 20 }}
                                    leftUnit={
                                        <CardUnit
                                            info={item.expenseType}
                                            infoColor={primaryColors.sunglow}
                                            title='نوع المصروف'
                                        />
                                    }
                                    rightUnit={
                                        <CardUnit
                                            info={item.dueDate}
                                            infoColor={primaryColors.lima}
                                            title='تاريخ السداد'
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