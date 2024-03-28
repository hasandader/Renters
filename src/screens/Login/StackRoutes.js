import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Office } from '../index';

const Stack = createNativeStackNavigator();

function LoginStack({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({
                headerShown: false
            })}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Office" component={Office} />
        </Stack.Navigator >
    )
}

export default LoginStack;