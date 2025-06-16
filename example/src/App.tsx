import React, { useState, useEffect } from 'react';
import { View } from 'react-native'
import Homescreen from '../src/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { sdkConfigs, IncidentGoPackage } from "react-native-incident_go_package";
import { store } from '../src/store'
import { Provider as ReduxProvider } from 'react-redux'


const App = () => {

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {

        sdkConfigs.sdkName = "SDK TITLE"
        sdkConfigs.configs = {
            base_url: 'https://dev.incidentcode.com/',
            sdkStage: 'dev',
            sdkEnvironment: 'DEV',
            email: 'nikunj.suthar@bacancy.com',

        }
        sdkConfigs.colors = {
            backgroundColor: "#f0f8ff",
            homeServiceBackgrondColor: "#d7ecff",
        }
        sdkConfigs.logo = {
            logo_path: require('../src/sample_logo.png'),
            logo_with_text_path: require('../src/sample_logo.png'),
            logo_white_with_text_path: require('../src/sample_logo.png')
        }
    });

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen
                    name="Home"
                    component={Homescreen}
                    options={{ title: 'Welcome' }}
                />
                <Stack.Screen
                    name="LoadModule"
                    component={IncidentGoPackage}
                    options={{ title: 'Module' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// export default App;

export default () => (
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>

)