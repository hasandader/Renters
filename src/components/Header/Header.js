import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import Text from "../Text/index";
import { menu, goArraw } from '../../images/index';
import { fonts } from "../../theme/fonts";
import { primaryColors } from "../../theme/colors";
import styles from './Style';
import { useNavigation } from '@react-navigation/native';

const Header = (props) => {
    const {
        title,
        back,
        fontSize,
        sideMenu,
        onBack,
        customBack
    } = props;

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {
                back ?
                    <TouchableOpacity style={styles.back} onPress={() => {
                        customBack ? onBack() :
                            navigation.goBack()
                    }}>
                        <Image source={goArraw} style={styles.arraw} />
                    </TouchableOpacity>
                    :
                    <View style={styles.left} />
            }
            <Text
                children={title}
                fontFamily={fonts.titleRegular}
                fontSize={fontSize || 16}
                color={primaryColors.martinique}
                align='center'
                lineHeight={30}
                style={styles.center}
            />
            {
                sideMenu ?
                    <TouchableOpacity style={styles.right} onPress={() => navigation.openDrawer()} >
                        <Image source={menu} style={styles.menu} />
                    </TouchableOpacity>
                    :
                    <View style={styles.left} />
            }
        </View>
    )
}

export default Header;