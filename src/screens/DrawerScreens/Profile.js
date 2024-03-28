import React from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Text from '../../components/Text';
import styles from './Style';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import DividedRow from '../../components/DividedRow/DividedRow';
import CardUnit from '../../components/CardUnit/CardUnit';
import { avatar, edit } from '../../images/index';
import { fonts } from '../../theme/fonts';
import { primaryColors } from '../../theme/colors';

export default function Profile(props) {

    return (
        <View style={styles.container}>
            <Header title='الملف الشخصي' back customBack onBack={() => props.navigation.navigate('AppStack')} />

            <ScrollView contentContainerStyle={styles.scrollView}>
                <Card
                    style={{ paddingTop: 13 }}
                    children={
                        <>
                            <View style={styles.avatarWraper}>
                                <TouchableOpacity style={styles.editBtnWraper}>
                                    <Image source={edit} style={{ width: 23, height: 23 }} />
                                </TouchableOpacity>
                                <View style={styles.avatarText}>
                                    <View>
                                        <Text
                                            children='رياض المالكي'
                                            fontFamily={fonts.titleRegular}
                                            color={primaryColors.martinique}
                                            align='right'
                                        />
                                        <Text
                                            children='test.test@test.com'
                                            color={primaryColors.azureRadiance}
                                            textDecorationLine='underline'
                                            align='right'
                                        />
                                    </View>
                                    <View style={styles.circle}>
                                        <Image source={avatar} style={styles.avatar} />
                                    </View>
                                </View>
                            </View>
                            <DividedRow
                                leftUnit={
                                    <CardUnit
                                        title='رقم الهوية'
                                        info='800666225'
                                        infoColor={primaryColors.azureRadiance}
                                    />
                                }
                                rightUnit={
                                    <CardUnit
                                        title='رقم الجوال'
                                        info='0599059845'
                                        infoColor={primaryColors.azureRadiance}
                                    />
                                }
                            />
                        </>
                    }
                />

                <Card
                    style={{ marginTop: 12 }}
                    children={
                        <>
                            <Text
                                children='البيانات الأساسية'
                                align='center'
                                fontFamily={fonts.titleRegular}
                                fontSize={12}
                                color={primaryColors.martinique}
                            />

                            <DividedRow
                                style={{ marginTop: 15 }}
                                leftUnit={
                                    <CardUnit
                                        title='نوع المستأجر'
                                        info='فرد'
                                        infoColor={primaryColors.sunglow}
                                    />
                                }
                                rightUnit={
                                    <CardUnit
                                        title='الإسم الحقيقي'
                                        info='محمد محمد'
                                        infoColor={primaryColors.lima}
                                    />
                                }
                            />

                            <DividedRow
                                style={{ marginTop: 15 }}
                                leftUnit={
                                    <CardUnit
                                        title='الرقم الضريبي'
                                        info='328/569'
                                        infoColor={primaryColors.sunglow}
                                    />
                                }
                                rightUnit={
                                    <CardUnit
                                        title='رقم جوال آخر'
                                        info='0599999999'
                                        infoColor={primaryColors.lima}
                                    />
                                }
                            />

                            <DividedRow
                                style={{ marginTop: 15 }}
                                leftUnit={
                                    <CardUnit
                                        title='الجنسية'
                                        info='سعودي'
                                        infoColor={primaryColors.sunglow}
                                    />
                                }
                                rightUnit={
                                    <CardUnit
                                        title='اسم المحصل'
                                        info='جابر الخالدي'
                                        infoColor={primaryColors.lima}
                                    />
                                }
                            />

                            <DividedRow
                                style={{ marginTop: 15 }}
                                leftUnit={
                                    <CardUnit
                                        title='تاريخ الميلاد'
                                        info='20-01-2020 م'
                                        infoColor={primaryColors.sunglow}
                                    />
                                }
                                rightUnit={
                                    <CardUnit
                                        title='الرصيد الإفتتاحي'
                                        info='جابر الخالدي'
                                        infoColor={primaryColors.lima}
                                    />
                                }
                            />
                        </>
                    }
                />

                <Card
                    style={{ marginTop: 12 }}
                    children={
                        <>
                            <Text
                                children='العنوان الوطني'
                                align='center'
                                fontFamily={fonts.titleRegular}
                                fontSize={12}
                                color={primaryColors.martinique}
                            />

                            <DividedRow
                                style={{ marginTop: 15 }}
                                leftUnit={
                                    <CardUnit
                                        title='الرمز البريدي'
                                        info='2598229'
                                        infoColor={primaryColors.sunglow}
                                    />
                                }
                                rightUnit={
                                    <CardUnit
                                        title='رقم المبنى'
                                        info='659/2592'
                                        infoColor={primaryColors.lima}
                                    />
                                }
                            />

                            <DividedRow
                                style={{ marginTop: 15 }}
                                leftUnit={
                                    <CardUnit
                                        title='العنوان'
                                        info='الرياض'
                                        infoColor={primaryColors.sunglow}
                                    />
                                }
                                rightUnit={
                                    <CardUnit
                                        title='الرقم الاضافي'
                                        info='9876456'
                                        infoColor={primaryColors.lima}
                                    />
                                }
                            />
                        </>
                    }
                />

                <Card
                    style={{ marginTop: 12 }}
                    children={
                        <>
                            <Text
                                children='بيانات إضافية'
                                align='center'
                                fontFamily={fonts.titleRegular}
                                fontSize={12}
                                color={primaryColors.martinique}
                            />

                            <DividedRow
                                style={{ marginTop: 15 }}
                                leftUnit={
                                    <CardUnit
                                        title='رقم الهاتف'
                                        info='2598229'
                                        infoColor={primaryColors.sunglow}
                                    />
                                }
                                rightUnit={
                                    <CardUnit
                                        title='رقم الحساب'
                                        info='659/2592'
                                        infoColor={primaryColors.lima}
                                    />
                                }
                            />

                            <DividedRow
                                style={{ marginTop: 15 }}
                                leftUnit={
                                    <CardUnit
                                        title='صندوق بريد'
                                        info='5248486'
                                        infoColor={primaryColors.sunglow}
                                    />
                                }
                                rightUnit={
                                    <CardUnit
                                        title='رقم الفاكس'
                                        info='9876456'
                                        infoColor={primaryColors.lima}
                                    />
                                }
                            />
                        </>
                    }
                />
            </ScrollView>
        </View>
    )
}