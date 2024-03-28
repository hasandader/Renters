import React from 'react';
import { View } from 'react-native';
import Text from '../../../components/Text';
import styles from './Style';
import { ProgressCircle } from 'react-native-svg-charts'
import { primaryColors } from '../../../theme/colors';
import { fonts } from '../../../theme/fonts';

const CardProgress = (props) => {
    const {
        progress,
        progressColor,
        subTitle
    } = props;

    return (
        <View style={styles.progressWraper}>
            <View style={styles.progressOutCircle}>
                <ProgressCircle
                    style={{ height: 85 }}
                    progress={progress}
                    progressColor={progressColor}
                    strokeWidth={5}
                />
                <View style={styles.percentage}>
                    <Text
                        children={`${progress * 100}%`}
                        style={{}}
                        fontFamily={fonts.bold}
                        fontSize={11}
                        color={primaryColors.mineShaft}
                        lineHeight={18}
                    />
                    <Text
                        children={subTitle}
                        fontSize={9}
                        color={primaryColors.gullGray}
                        lineHeight={18}
                    />
                </View>
            </View>
        </View>
    )
}

export default CardProgress;