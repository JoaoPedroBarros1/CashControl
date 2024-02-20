import React, {useContext, useState} from 'react';
import { StyleSheet, View, Text, Button, SafeAreaView, TextInput } from 'react-native';

import Dados from "../context/DadosContext";


export default function ({ navigation }) {
    const {receitas, setReceitas} = useContext(Dados)

    const [nome, setNome] = useState("")
    const [valor, setValor] = useState("")
    const [data, setData] = useState("")

    function cadastrar() {
        let aux = [...receitas]
        aux.push({
            nome: nome,
            valor: valor,
            data: data
        })
        setReceitas(aux)

        navigation.navigate("Home")
    }

    return (
        <SafeAreaView style={css.container}>
            <Text style={css.titulo}>Receitas</Text>

            <View style={css.inputWrapper}>
                <View>
                    <Text>Nome</Text>
                    <TextInput
                        value={nome}
                        onChangeText={(e) => setNome(e)}
                        style={css.input}
                        placeholder="Informe o nome"
                    />
                </View>

                <View>
                    <Text>Valor</Text>
                    <TextInput
                        value={valor.toString()}
                        onChangeText={(e) => setValor(e)}
                        style={css.input}
                        placeholder="Informe o valor"
                        keyboardType="numeric"
                    />
                </View>

                <View>
                    <Text>Data</Text>
                    <TextInput
                        value={data.toString()}
                        onChangeText={(e) => setData(e)}
                        style={css.input}
                        placeholder="Informe a data"
                    />
                </View>
            </View>

            <Button title="Cadastrar" onPress={cadastrar} />
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
