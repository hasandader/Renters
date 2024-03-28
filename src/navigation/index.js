import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from '../screens/Login/StackRoutes';
import AppStack from './tabs/StackRoutes';
import DrawerMenu from '../components/DrawerMenu/DrawerMenu';
import DrawerStack from '../screens/DrawerScreens/StackRoutes';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export function AuthNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginStack" headerMode="none"
                screenOptions={({ route }) => ({
                    headerShown: false,
                })}
            >
                <Stack.Screen name="LoginStack" component={LoginStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export function AppNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="AppStack" headerMode="none"
                screenOptions={({ route }) => ({
                    headerShown: false,
                    drawerPosition: 'right'
                })}
                drawerContent={props => <DrawerMenu {...props} />}
            >
                <Drawer.Screen name="AppStack" component={AppStack} />
                <Drawer.Screen name="DrawerStack" component={DrawerStack} />
            </Drawer.Navigator>
        </NavigationContainer >
    );
};