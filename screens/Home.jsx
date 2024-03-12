import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';

export default function ({ navigation }) {
    return (
        <SafeAreaView style={css.container}>
            <Text>Home</Text>

            <Button
                title="Ir para dashboard"
                onPress={() => navigation.navigate('Dashboard')}
            />
        </SafeAreaView>
    );
}


const css = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
