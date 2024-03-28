import React from "react";
import { FlatList, View } from "react-native";
import Card from "../../../components/Card/Card";
import CardUnit from "../../../components/CardUnit/CardUnit";
import sharedStyles from "../../../SharedStyles/SharedStyles";
import { primaryColors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import styles from './Style';
import DividedRow from "../../../components/DividedRow/DividedRow";
import CardProgress from "./CardProgress";

const HorizontalList = (props) => {
    const {
        data,
        contractNO,
        estateName,
        unitNO,
        contractValue,
        startDate,
        endDate,
        title,
        deadline,
        paymentType,
        infoColor,
        chart,
        contractPaymentsProgress,
        contractPeriodProgress
    } = props;

    return (
        <FlatList
            contentContainerStyle={styles.listContainer}
            inverted={true}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => (
                <Card
                    style={{ marginLeft: 10, borderRadius: 10 }}
                    children={
                        <>
                            {
                                chart &&
                                <DividedRow
                                    leftUnit={
                                        <CardProgress
                                            progress={contractPaymentsProgress}
                                            progressColor={primaryColors.sunglow}
                                            subTitle='دفعات العقد'
                                        />
                                    }
                                    rightUnit={
                                        <CardProgress
                                            progress={contractPeriodProgress}
                                            progressColor={primaryColors.lima}
                                            subTitle='مدة العقد'
                                        />
                                    }
                                />
                            }

                            <DividedRow
                                style={{ marginTop: 20 }}
                                leftUnit={
                                    <CardUnit
                                        info={estateName}
                                        title='إسم العقار'
                                        infoColor={infoColor || primaryColors.sunglow}
                                    />
                                }
                                rightUnit={
                                    <CardUnit
                                        info={contractNO}
                                        infoColor={primaryColors.lima}
                                        title='عقد رقم'
                                    />
                                }
                            />

                            <DividedRow
                                style={{ marginTop: 20 }}
                                leftUnit={
                                    <CardUnit
                                        info={contractValue}
                                        infoColor={infoColor || primaryColors.sunglow}
                                        title={title || 'قيمة العقد'}
                                    />
                                }
                                rightUnit={
                                    <CardUnit
                                        info={unitNO}
                                        infoColor={primaryColors.lima}
                                        title='وحدة رقم'
                                    />
                                }
                            />
                            {
                                !deadline ?
                                    <DividedRow
                                        style={{ marginTop: 20 }}
                                        leftUnit={
                                            <CardUnit
                                                info={endDate}
                                                infoColor={primaryColors.sunglow}
                                                title='نهاية الإيجار'
                                            />
                                        }
                                        rightUnit={
                                            <CardUnit
                                                info={startDate}
                                                infoColor={primaryColors.lima}
                                                title='بداية الايجار'
                                            />
                                        }
                                    />
                                    :
                                    <DividedRow
                                        style={{ marginTop: 20 }}
                                        leftUnit={
                                            <CardUnit
                                                info={paymentType}
                                                infoColor={primaryColors.azureRadiance}
                                                title='نوع الدفعة'
                                            />
                                        }
                                        rightUnit={
                                            <CardUnit
                                                info={deadline}
                                                infoColor={primaryColors.lima}
                                                title='تاريخ استحقاق الدفعة'
                                            />
                                        }
                                    />
                            }
                        </>
                    }
                />
            )}
        />
    )
}

export default HorizontalList;