import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Notifications } from '../index';

const Stack = createNativeStackNavigator();

function NotificationsStack({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({
                headerShown: false
            })}
        >
            <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Navigator >
    )
}

export default NotificationsStack;