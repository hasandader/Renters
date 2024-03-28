import React from "react";
import { Image, View } from 'react-native';
import Text from '../../components/Text/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    homeInactive, homeActive,
    estates, estatesActive,
    notifications, notificationsActive,
    contracts, contractsActive,
    financial, financialActive,
} from '../../images/index';
import styles from './Style';
import HomeStack from '../../screens/Home/StackRoutes';
import EstatesStack from '../../screens/Estates/StackRoutes';
import ContractsStack from '../../screens/Contracts/StackRoutes';
import NotificationsStack from '../../screens/Notifications/StackRoutes';
import FinancialStack from '../../screens/Financial/StackRoutes';
import { isIPhoneX } from '../../lib/utility';

const Tab = createBottomTabNavigator();

function AppStack(props) {
    const { navigation } = props;

    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={({ route }) => ({
                keyboardHidesTabBar: true,
                headerShown: false,
                showLabel: true,
                tabBarLabelPosition: 'beside-icon',
                tabBarIconStyle: {
                    // borderWidth: 1,
                },

                tabBarItemStyle: {
                    // borderWidth: 1,
                },

                tabBarIconStyle: {
                    // borderWidth: 1,
                    width: '50%'
                },

                tabBarLabelStyle: {
                },

                tabBarStyle: {
                    direction: 'rtl',
                    position: 'absolute',
                    borderTopWidth: 0,
                    height: isIPhoneX() ? 85 : 65,

                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: -3,
                    },
                    shadowOpacity: 0.05,
                    shadowRadius: 5,

                    elevation: 15,
                    paddingTop: isIPhoneX() ? 10 : 0,
                    paddingHorizontal: 20,
                },
            })}
        >
            <Tab.Screen name="HomeStack" component={HomeStack} options={{

                tabBarLabel: ({ focused }) => (

                    focused ?
                        <Text style={styles.label}>الرئيسية</Text>
                        :
                        <Text></Text>

                ),
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <View style={[styles.active, styles.home]}>
                            <Image source={homeActive} style={{ width: 28, height: 27 }} resizeMode='contain' />
                        </View>
                        :
                        <Image source={homeInactive} style={{ width: 28, height: 27 }} resizeMode='contain' />
                ),
                tabBarItemStyle: {
                    paddingRight: isIPhoneX() ? 0 : 5
                }
            }}
            />

            <Tab.Screen name="EstatesStack" component={EstatesStack}
                options={{
                    tabBarLabel: ({ focused }) => (

                        focused ?
                            <Text style={styles.label}>الوحدات</Text>
                            :
                            <Text />

                    ),
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            <View style={[styles.active, styles.estates]}>
                                <Image source={estatesActive} style={{ width: 25, height: 25 }} resizeMode='contain' />
                            </View>
                            :
                            <Image source={estates} style={{ width: 25, height: 25 }} resizeMode='contain' />
                    ),
                    tabBarItemStyle: {
                        paddingRight: 8
                    }
                }}
            />

            <Tab.Screen name="ContractsStack" component={ContractsStack}
                options={{
                    tabBarLabel: ({ focused }) => (

                        focused &&
                        <Text style={styles.label}>العقود</Text>

                    ),
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            <View style={styles.active}>
                                <Image source={contractsActive} style={{ width: 25, height: 27 }} resizeMode='contain' />
                            </View>
                            :
                            <Image source={contracts} style={{ width: 25, height: 27 }} resizeMode='contain' />
                    )
                }}
            />
            <Tab.Screen name="NotificationsStack" component={NotificationsStack}
                options={{
                    tabBarLabel: ({ focused }) => (

                        focused &&
                        <Text style={styles.label}>الإشعارات</Text>

                    ),
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            <View style={[styles.active, styles.notifs]}>
                                <Image source={notificationsActive} style={{ width: 23, height: 25 }} resizeMode='contain' />
                            </View>
                            :
                            <Image source={notifications} style={{ width: 23, height: 25 }} resizeMode='contain' />
                    )
                }}
            />
            <Tab.Screen name="FinancialStack" component={FinancialStack}
                options={{
                    tabBarLabel: ({ focused }) => (

                        focused &&
                        <Text style={styles.label}>كشف</Text>

                    ),
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            <View style={[styles.active, styles.financial]}>
                                <Image source={financialActive} style={{ width: 20, height: 26 }} resizeMode='contain' />
                            </View>
                            :
                            <Image source={financial} style={{ width: 20, height: 26 }} resizeMode='contain' />
                    )
                }}
            />
        </Tab.Navigator >
    )
}

export default AppStack;