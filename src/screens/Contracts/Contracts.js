import React, { useRef } from 'react';
import { View, FlatList, Image } from 'react-native';
import styles from './Style';
import Header from '../../components/Header/Header';
import DividedRow from '../../components/DividedRow/DividedRow';
import CardUnit from '../../components/CardUnit/CardUnit';
import { primaryColors } from '../../theme/colors';
import Card from '../../components/Card/Card';
import CardProgress from '../Home/components/CardProgress';
import Input from '../../components/Input';
import { zoom, filter } from '../../images/index';
import Button from '../../components/Button/index';
import { useScrollToTop } from '@react-navigation/native';

export default function Contracts(props) {
    const ref = useRef(null);

    useScrollToTop(ref);

    const data = [
        {
            paymentsDone: 4,
            paymentsRequired: 10,
            contractPeriodProgress: 0.7,
            contractNO: 16972121,
            estateName: 'الراية 1',
            unitNO: '25-98',
            contractValue: '46985',
            startDate: '20-01-2020 م',
            endDate: '20-01-2020 م'
        },
        {
            paymentsDone: 4,
            paymentsRequired: 10,
            contractPeriodProgress: 0.7,
            contractNO: 16972121,
            estateName: 'الراية 1',
            unitNO: '25-98',
            contractValue: '46985',
            startDate: '20-01-2020 م',
            endDate: '20-01-2020 م'
        },
        {
            paymentsDone: 4,
            paymentsRequired: 10,
            contractPeriodProgress: 0.7,
            contractNO: 16972121,
            estateName: 'الراية 1',
            unitNO: '25-98',
            contractValue: '46985',
            startDate: '20-01-2020 م',
            endDate: '20-01-2020 م'
        },
        {
            paymentsDone: 4,
            paymentsRequired: 10,
            contractPeriodProgress: 0.7,
            contractNO: 16972121,
            estateName: 'الراية 1',
            unitNO: '25-98',
            contractValue: '46985',
            startDate: '20-01-2020 م',
            endDate: '20-01-2020 م'
        },
    ]

    return (
        <View style={styles.container}>
            <Header title='العقود' sideMenu />



            <FlatList
                ref={ref}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
                data={data}
                ListHeaderComponent={
                    <View style={styles.topButtons}>
                        <Button
                            style={styles.button}
                            title='فرز العقود الفعالة'
                            titleStyle={styles.btnTxt}
                            icon={
                                <Image source={filter} style={{ width: 22, height: 22 }} />
                            }
                            iconTxtStyle={styles.iconTxtStyle}
                        />
                        <Input
                            placeholder='إبحث بالعقد'
                            placeholderTextColor={primaryColors.malachite}
                            containerStyle={styles.inputContainer}
                            leftIcon={zoom}
                            leftIconStyle={{ width: 18, height: 18 }}
                            inputTxtStyle={styles.inputTxtStyle}
                        />
                    </View>
                }
                renderItem={({ item }) => (
                    <Card
                        style={{ borderRadius: 10, marginTop: 10 }}
                        children={
                            <>
                                <DividedRow
                                    leftUnit={
                                        <CardProgress
                                            progress={item.paymentsDone / item.paymentsRequired}
                                            progressColor={primaryColors.sunglow}
                                            subTitle='دفعات العقد'
                                        />
                                    }
                                    rightUnit={
                                        <CardProgress
                                            progress={item.contractPeriodProgress}
                                            progressColor={primaryColors.lima}
                                            subTitle='مدة العقد'
                                        />
                                    }
                                />

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
                                            info={item.contractValue}
                                            infoColor={primaryColors.sunglow}
                                            title={'قيمة العقد'}
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
                                            info={item.endDate}
                                            infoColor={primaryColors.sunglow}
                                            title='نهاية الإيجار'
                                        />
                                    }
                                    rightUnit={
                                        <CardUnit
                                            info={item.startDate}
                                            infoColor={primaryColors.lima}
                                            title='بداية الايجار'
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