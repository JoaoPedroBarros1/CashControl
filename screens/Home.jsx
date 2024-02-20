import React from 'react';
import { StyleSheet, View, Text, Button, SafeAreaView } from 'react-native';

export default function ({ navigation }) {
    return (
        <SafeAreaView style={css.container}>
            <View style={css.wrapper}>
                <View style={css.titleWrapper}>
                    <View>
                        <Text style={css.titulo}>Despesas</Text>
                        <Text style={css.subtitle}>R$1.000,00</Text>
                    </View>

                    <View>
                        <Text style={css.titulo}>Receitas</Text>
                        <Text style={css.subtitle}>R$1.000,00</Text>
                    </View>
                </View>

                <View style={css.buttonWrapper}>
                    <Button
                        title="Cadastrar receitas"
                        onPress={() => navigation.navigate('Receitas')}
                    />

                    <Button
                        title="Cadastrar despesas"
                        onPress={() => navigation.navigate('Despesas')}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const css = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
    },

    wrapper: {
        flex: 1,
        justifyContent: 'center',
        gap: 60,
    },

    titleWrapper: {
        gap: 20,
    },

    buttonWrapper: {
        gap: 10,
    },

    titulo: {
        fontSize: 30,
    },

    subtitle: {
        fontSize: 20,
        color: 'red',
    },
});
