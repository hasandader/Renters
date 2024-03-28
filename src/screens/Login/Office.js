import React, { useState } from "react";
import { View, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './Style';
import sharedStyles from '../../SharedStyles/SharedStyles';
import Text from '../../components/Text/index';
import PoweredBy from '../../components/PoweredBy/index';
import HeaderLogo from "../../components/HeaderLogo/HeaderLogo";
import { fonts } from "../../theme/fonts";
import { primaryColors } from "../../theme/colors";
import { testLogo, checked } from '../../images/index';
import Button from '../../components/Button/index';

export default function Office(props) {
    const offices = [1, 2, 3, 4];
    const [selected, setSelected] = useState(1);

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
            <Text
                children='الرجاء اختيار المكتب العقاري الذي تود الدخول له'
                fontFamily={fonts.medium}
                fontSize={16}
                color={primaryColors.martinique}
                align='center'
                mTop={17}
            />
            <Text
                children='يمكنك اختيار المكتب العقاري  الان وتبديل الدخول الى أي مكتب لاحقاً'
                fontFamily={fonts.medium}
                fontSize={14}
                color={primaryColors.gullGray}
                align='center'
                mRight={60}
                mLeft={60}
                mTop={17}
            />
            <FlatList
                data={offices}
                numColumns={2}
                style={{ marginBottom: 78 }}
                contentContainerStyle={{ paddingBottom: 20 }}
                columnWrapperStyle={styles.columnWrapper}
                ListFooterComponent={() => (
                    <Button
                        style={styles.button}
                        title='إستمرار'
                        titleStyle={styles.buttonTitle}
                    />
                )}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={
                        selected == item ?
                            [styles.officeCard, sharedStyles.shadow]
                            :
                            styles.inactiveOfficeCard
                    }
                        onPress={() => { setSelected(item) }}
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
                )}
            />

            <PoweredBy />
        </View>
    )
}