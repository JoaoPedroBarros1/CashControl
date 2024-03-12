import React, {useState} from "react"
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

import Home from './screens/Home'
import Despesas from './screens/Despesas'
import Receitas from './screens/Receitas'
import Dashboard from "./screens/Dashboard";

import Dados from './context/DadosContext'

const Stack = createStackNavigator();


export default function() {
    const [receitas, setReceitas] = useState([])
    const [despesas, setDespesas] = useState([])

    return (
        <Dados.Provider value={{receitas, setReceitas, despesas, setDespesas}}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Dashboard" component={Dashboard} />
                    <Stack.Screen name="Despesas" component={Despesas} />
                    <Stack.Screen name="Receitas" component={Receitas} />
                </Stack.Navigator>
            </NavigationContainer>
        </Dados.Provider>
    )
}