import React from 'react';
import { SafeAreaView } from 'react-native';
import { AuthNavigator, AppNavigator } from '../src/navigation/index';


function App() {

    return (
        <>
            <SafeAreaView />
            <AppNavigator />
        </>
    )

};

export default App;
