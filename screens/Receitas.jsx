import React from 'react';
import { StyleSheet, View, Text, Button, SafeAreaView, TextInput } from 'react-native';

export default function ({ navigation }) {
    return (
        <SafeAreaView style={css.container}>
            <Text style={css.titulo}>Receitas</Text>

            <View style={css.inputWrapper}>
                <View>
                    <Text>Nome</Text>
                    <TextInput style={css.input} />
                </View>

                <View>
                    <Text>Valor</Text>
                    <TextInput style={css.input} keyboardType="numeric" />
                </View>

                <View>
                    <Text>Data</Text>
                    <TextInput style={css.input} />
                </View>
            </View>

            <Button title="Cadastrar" onPress={() => navigation.navigate('Home')} />
        </SafeAreaView>
    );
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },

    titulo: {
        fontSize: 40,
    },

    inputWrapper: {
        gap: 20
    },

    input: {
        minWidth: 200,
        height: 40,
        padding: 10,
        borderWidth: 1
    }
});
