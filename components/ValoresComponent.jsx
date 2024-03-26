import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, SafeAreaView, TextInput } from 'react-native';


export default function ({navigation, pageName, globalValue, setGlobalValue}) {
    const [nome, setNome] = useState("")
    const [valor, setValor] = useState("")

    function cadastrar() {
        if (!(nome.length > 0 && parseFloat(valor) > 0)) {
            return
        }

        let aux = [...globalValue]
        aux.push({
            nome: nome,
            valor: parseFloat(valor).toFixed(2).toString()
        })
        setGlobalValue(aux)

        navigation.navigate("Dashboard")
    }

    return (
        <SafeAreaView style={css.container}>
            <Text style={css.titulo}>{ pageName }</Text>

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
                        value={valor}
                        onChangeText={(e) => setValor(e)}
                        style={css.input}
                        placeholder="Informe o valor"
                        keyboardType="numeric"
                    />
                </View>
            </View>

            <Button title="Cadastrar" onPress={cadastrar} />
            <Button title="Cancelar" onPress={() => {navigation.navigate("Dashboard")}} />
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
