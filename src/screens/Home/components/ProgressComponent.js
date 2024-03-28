import React from "react";
import { View } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts'
import Text from '../../../components/Text';
import { primaryColors } from "../../../theme/colors";
import { fonts } from '../../../theme/fonts';
import styles from './Style';

const ProgressComponent = (props) => {
    const {
        percentage,
        subTitle,
        progressColor,
        progress
    } = props;

    return (
        <View>
            <ProgressCircle
                style={{ height: 97 }}
                progress={progress}
                progressColor={progressColor}
                strokeWidth={13}
            />
            <Text
                children={percentage}
                fontFamily={fonts.titleRegular}
                fontSize={20}
                color={primaryColors.martinique}
                lineHeight={30}
                style={styles.progressText}
            />
            <Text
                children={subTitle}
                fontFamily={fonts.titleRegular}
                fontSize={16}
                color={primaryColors.martinique}
                mTop={30}
                align='center'
            />
        </View>
    )
}

export default ProgressComponent;