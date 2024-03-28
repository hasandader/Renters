import { Dimensions, Platform, useColorScheme } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const getWindow = () => Dimensions.get('window');
const getScreen = () => Dimensions.get('screen');
const getPlatformOs = () => Platform.OS;

export const deviceHeight = () => {
    return getWindow().height;
};

export const deviceWidth = () => {
    return getWindow().width;
};

export const screenHeight = () => {
    return getScreen().height;
};

export const screenWidth = () => {
    return getScreen().width;
};

export const isPlatformIos = () => {
    return getPlatformOs() === 'ios';
};

export const isPlatformAndroid = () => {
    return getPlatformOs() === 'android';
};

export const isIPhoneX = () => {
    return DeviceInfo.hasNotch()
};

export const isDark = () => {
    return useColorScheme() === 'dark';
};

export const isLight = () => {
    return useColorScheme() === 'light';
};

export const isEmptyObject = (obj) => {
    return JSON.stringify(obj) === '{}';
}
