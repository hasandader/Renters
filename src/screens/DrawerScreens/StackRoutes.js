import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaidPayments, Outgoings, Profile, RequiredPayments, SwitchOffice } from '../index';

const Stack = createNativeStackNavigator();

function DrawerStack({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({
                headerShown: false
            })}
        >
            <Stack.Screen name="PaidPayments" component={PaidPayments} />
            <Stack.Screen name="Outgoings" component={Outgoings} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="RequiredPayments" component={RequiredPayments} />
            <Stack.Screen name="SwitchOffice" component={SwitchOffice} />
        </Stack.Navigator >
    )
}

export default DrawerStack;