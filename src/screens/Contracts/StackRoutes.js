import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Contracts } from '../index';

const Stack = createNativeStackNavigator();

function ContractsStack({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({
                headerShown: false
            })}
        >
            <Stack.Screen name="Contracts" component={Contracts} />
        </Stack.Navigator >
    )
}

export default ContractsStack;