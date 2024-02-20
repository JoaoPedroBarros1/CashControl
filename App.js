import React from "react"
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import Home from './screens/Home'
import Despesas from './screens/Despesas'
import Receitas from './screens/Receitas'

const Stack = createStackNavigator();

export default function() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Despesas" component={Despesas} />
                <Stack.Screen name="Receitas" component={Receitas} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}