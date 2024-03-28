import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../index';

const Stack = createNativeStackNavigator();

function HomeStack({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({
                headerShown: false
            })}
        >
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator >
    )
}

export default HomeStack;