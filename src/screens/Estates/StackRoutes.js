import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Estates } from '../index';

const Stack = createNativeStackNavigator();

function EstatesStack({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({
                headerShown: false
            })}
        >
            <Stack.Screen name="Estates" component={Estates} />
        </Stack.Navigator >
    )
}

export default EstatesStack;