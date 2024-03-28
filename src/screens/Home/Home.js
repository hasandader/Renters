import React, { useRef } from 'react';
import { View, ScrollView } from 'react-native';
import styles from './Style';
import TitleRow from './components/TitleRow';
import HorizontalList from './components/HorizontalList';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import ProgressComponent from './components/ProgressComponent';
import sharedStyles from '../../SharedStyles/SharedStyles';
import { primaryColors } from '../../theme/colors';
import { useScrollToTop } from '@react-navigation/native';

export default function Home(props) {
    const ref = useRef(null);

    useScrollToTop(ref);

    return (
        <View style={styles.container}>
            <Header title='الرئيسية' sideMenu />

            <ScrollView
                ref={ref}
                contentContainerStyle={styles.scrollView}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
            >
                <Card
                    style={[styles.progressCard, sharedStyles.lightShadow]}
                    children={
                        <View style={styles.progressWraper}>
                            <ProgressComponent
                                percentage='50'
                                subTitle='الدفعات المدفوعة'
                                progressColor={'rgb(59, 165, 0)'}
                                progress={0.7}
                            />
                            <ProgressComponent
                                percentage='30'
                                subTitle='الدفعات المستحقة'
                                progressColor={'rgb(255, 189, 52)'}
                                progress={0.5}
                            />
                        </View>

                    }
                />
                <TitleRow buttonTitle='عرض المزيد' title='العقود ستنتهي الشهر الحالي' />
                <HorizontalList
                    data={[1, 2, 3, 4]}
                    contractNO={'16972121'}
                    estateName={'الراية 1'}
                    unitNO={'25-98'}
                    contractValue={'18000'}
                    startDate={'20-01-2020 م'}
                    endDate={'20-01-2020 م'}
                    chart
                    contractPaymentsProgress={(8 / 10)}
                    contractPeriodProgress={0.7}
                />
                <TitleRow buttonTitle='عرض المزيد' title='العقود المضافة حديثاً' />
                <HorizontalList
                    data={[1, 2, 3, 4]}
                    contractNO={'16972121'}
                    estateName={'الراية 1'}
                    unitNO={'25-98'}
                    contractValue={'18000'}
                    startDate={'20-01-2020 م'}
                    endDate={'20-01-2020 م'}
                    chart
                    contractPaymentsProgress={(5 / 10)}
                    contractPeriodProgress={0.92}
                />
                <TitleRow buttonTitle='عرض المزيد' title='الدفعات المستحقة'
                    onPress={() => props.navigation.navigate('DrawerStack', {
                        screen: 'RequiredPayments'
                    })} />
                <HorizontalList
                    data={[1, 2, 3, 4]}
                    contractNO={'16972121'}
                    estateName={'الراية 1'}
                    unitNO={'25-98'}
                    contractValue={'18000'}
                    startDate={'20-01-2020 م'}
                    endDate={'20-01-2020 م'}
                    title='قيمة الدفعة'
                    deadline={'20-01-2020 م'}
                    paymentType={'صيانة وخدمات'}
                    infoColor={primaryColors.azureRadiance}
                />
            </ScrollView>
        </View>
    )
}