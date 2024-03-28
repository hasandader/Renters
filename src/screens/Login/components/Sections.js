import React from "react";
import { View } from 'react-native';
import Text from "../../../components/Text";
import styles from './Style';
import sharedStyles from "../../../SharedStyles/SharedStyles";
import { fonts } from "../../../theme/fonts";
import { primaryColors } from "../../../theme/colors";

const Sections = (props) => {
    const { activeSection } = props;

    return (
        <View style={styles.sectionsRow}>
            <View style={activeSection == 'confirm' ? [
                styles.section,
                sharedStyles.shadow
            ] : styles.inactiveSection}>
                <Text children='تأكيد الدخول'
                    fontSize={15}
                    color={activeSection == 'confirm' ?
                        primaryColors.sunglow
                        :
                        primaryColors.martinique
                    }
                />
            </View>
            <View style={activeSection == 'login' ? [
                styles.section,
                sharedStyles.shadow
            ] : styles.inactiveSection}>
                <Text children='تسجيل الدخول'
                    fontFamily={fonts.medium}
                    fontSize={16}
                    color={activeSection == 'login' ?
                        primaryColors.sunglow
                        :
                        primaryColors.martinique
                    }
                />
            </View>
        </View>
    )
};

export default Sections;