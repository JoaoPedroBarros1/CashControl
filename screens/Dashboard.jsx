import React, {useContext} from 'react';
import { StyleSheet, View, Text, Button, SafeAreaView } from 'react-native';
import Dados from "../context/DadosContext";

export default function ({ navigation }) {
    const {receitas, despesas} = useContext(Dados)

    return (
        <SafeAreaView style={css.container}>
            <View style={css.wrapper}>
                <View style={css.titleWrapper}>
                    <View>
                        <Text style={css.titulo}>Despesas</Text>
                        <Text style={css.subtitle}>
                            {despesas.reduce((soma, item) => soma + parseInt(item.valor), 0)}
                        </Text>
                    </View>

                    <View>
                        <Text style={css.titulo}>Receitas</Text>
                        <Text style={css.subtitle}>
                            {receitas.reduce((soma, item) => soma + parseInt(item.valor), 0)}
                        </Text>
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
