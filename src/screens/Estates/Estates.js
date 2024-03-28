import React, { useRef } from 'react';
import { View, FlatList } from 'react-native';
import styles from './Style';
import Header from '../../components/Header/Header';
import DividedRow from '../../components/DividedRow/DividedRow';
import CardUnit from '../../components/CardUnit/CardUnit';
import { primaryColors } from '../../theme/colors';
import Card from '../../components/Card/Card';
import { useScrollToTop } from '@react-navigation/native';

export default function Estates(props) {
    const ref = useRef(null);

    useScrollToTop(ref);

    const data = [
        {
            estateName: 'الراية 1',
            contractNO: '16972121',
            unitNO: '25-98',
            unitType: 'شقة',
            startDate: '20-01-2020 م',
            unitValue: '46985$'
        },
        {
            estateName: 'الراية 1',
            contractNO: '16972121',
            unitNO: '25-98',
            unitType: 'شقة',
            startDate: '20-01-2020 م',
            unitValue: '46985$'
        },
        {
            estateName: 'الراية 1',
            contractNO: '16972121',
            unitNO: '25-98',
            unitType: 'شقة',
            startDate: '20-01-2020 م',
            unitValue: '46985$'
        },
        {
            estateName: 'الراية 1',
            contractNO: '16972121',
            unitNO: '25-98',
            unitType: 'شقة',
            startDate: '20-01-2020 م',
            unitValue: '46985$'
        },
    ]

    return (
        <View style={styles.container}>
            <Header title='الوحدات' sideMenu />

            <FlatList
                ref={ref}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => (
                    <Card
                        style={{ marginLeft: 10, borderRadius: 10, marginTop: 10 }}
                        children={
                            <>
                                <DividedRow
                                    style={{ marginTop: 20 }}
                                    leftUnit={
                                        <CardUnit
                                            info={item.estateName}
                                            title='إسم العقار'
                                            infoColor={primaryColors.dodgerBlue}
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
                                            info={item.unitType}
                                            infoColor={primaryColors.dodgerBlue}
                                            title={'نوع الوحدة'}
                                        />
                                    }
                                    rightUnit={
                                        <CardUnit
                                            info={item.unitNO}
                                            infoColor={primaryColors.lima}
                                            title='رقم الوحدة'
                                        />
                                    }
                                />

                                <DividedRow
                                    style={{ marginTop: 20 }}
                                    leftUnit={
                                        <CardUnit
                                            info={item.unitValue}
                                            infoColor={primaryColors.dodgerBlue}
                                            title='قيمة الوحدة'
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