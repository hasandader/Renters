import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import Card from "../../../components/Card/Card";
import styles from './Style';
import { statusDot, statusYellow, statusRed, statusBlue } from '../../../images/index';
import Text from "../../../components/Text";
import { fonts } from "../../../theme/fonts";
import { primaryColors } from "../../../theme/colors";
import sharedStyles from "../../../SharedStyles/SharedStyles";

const NotifCard = (props) => {
    const {
        statusID,
        dateTime,
        title,
        notifInfo,
        isRed
    } = props;

    const statusIcon = () => {
        switch (statusID) {
            case 1:
                return statusDot
            case 2:
                return statusYellow
            case 3:
                return statusRed
            case 4:
                return statusBlue
            default:
                return statusRed
        }
    }

    return (
        <Card
            style={[styles.cardContainer]}
            children={
                <TouchableOpacity>
                    <View style={styles.timeTitle}>
                        <View style={styles.timeDateRow}>
                            <Text
                                children={dateTime}
                                fontFamily={fonts.medium}
                                fontSize={13}
                                color={primaryColors.iron}
                            />
                            {!isRed && <View style={styles.redStatus} />}
                        </View>
                        <View style={styles.statusTitle}>
                            <Text
                                children={title}
                                align='right'
                                fontFamily={fonts.medium}
                                fontSize={16}
                                color={primaryColors.martinique}
                                mRight={5}
                            />
                            <Image source={statusIcon()} style={styles.status} />
                        </View>
                    </View>
                    <Text
                        children={notifInfo}
                        align='right'
                        fontFamily={fonts.medium}
                        fontSize={14}
                        color={primaryColors.gullGray}
                        mTop={8}
                    />
                </TouchableOpacity>
            }
        />
    )
}

export default NotifCard;