import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Financial } from '../index';

const Stack = createNativeStackNavigator();

function FinancialStack({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({
                headerShown: false
            })}
        >
            <Stack.Screen name="Financial" component={Financial} />
        </Stack.Navigator >
    )
}

export default FinancialStack;