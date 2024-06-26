import React, {useState} from "react"

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack";

import Home from './screens/Home'
import Despesas from './screens/Despesas'
import Receitas from './screens/Receitas'
import Dashboard from "./screens/Dashboard"

import {DadosProvider} from "./context/DadosContext";

const Stack = createStackNavigator()


export default function() {
    return (
        <DadosProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Dashboard" component={Dashboard} />
                    <Stack.Screen name="Despesas" component={Despesas} />
                    <Stack.Screen name="Receitas" component={Receitas} />
                </Stack.Navigator>
            </NavigationContainer>
        </DadosProvider>
    )
}