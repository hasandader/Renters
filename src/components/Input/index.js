import React from 'react';
import { View, TextInput, Image, TouchableOpacity, Animated } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import { deviceHeight, deviceWidth } from '../../lib/utility';
import { primaryColors } from '../../theme/colors';

const Input = (props) => {
    const {
        placeholder,
        value,
        onChangeText,
        icon,
        iconStyle,
        containerStyle,
        inputTxtStyle,
        focused,
        blur,
        multiline,
        blurOnSubmit,
        leftIcon,
        leftIconStyle,
        secureTextEntry,
        activeOpacity,
        onLeftIconPress,
        autoCapitalize,
        leftChildren,
        editable,
        ref,
        leftIconWraper,
        disabled,
        keyboardType,
        placeholderTextColor
    } = props;

    return (
        <Animated.View ref={ref} style={[styles.container, containerStyle, !icon && { paddingRight: 0 }]}>
            {leftIcon &&
                <TouchableOpacity
                    style={leftIconWraper} activeOpacity={activeOpacity}
                    onPress={onLeftIconPress} disabled={disabled}
                >
                    <Image source={leftIcon} style={leftIconStyle} />
                </TouchableOpacity>
            }
            {leftChildren}
            <TextInput
                style={[styles.inputTxt, inputTxtStyle]}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor || primaryColors.iron}
                value={value}
                onChangeText={onChangeText}
                onFocus={() => { focused && focused() }}
                onBlur={() => { blur && blur() }}
                underlineColorAndroid='transparent'
                multiline={multiline}
                blurOnSubmit={blurOnSubmit}
                secureTextEntry={secureTextEntry}
                autoCapitalize={autoCapitalize}
                editable={editable}
                keyboardType={keyboardType}
            />
            {icon && <Image source={icon} style={iconStyle} />}
        </Animated.View>
    )
}

Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChangeText: PropTypes.func,
    icon: PropTypes.any,
    iconStyle: PropTypes.any,
    leftIcon: PropTypes.any,
    leftIconStyle: PropTypes.any,
    containerStyle: PropTypes.any,
    inputTxtStyle: PropTypes.any,
    focused: PropTypes.func,
    blur: PropTypes.func,
    secureTextEntry: PropTypes.bool,
    onLeftIconPress: PropTypes.func,
    activeOpacity: PropTypes.number,
    autoCapitalize: PropTypes.bool
}

export default Input