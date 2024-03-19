import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, SafeAreaView, TextInput } from 'react-native';
import RNDateTimePicker from "@react-native-community/datetimepicker";

export default function ({navigation, pageName, globalValue, setGlobalValue}) {
    const [nome, setNome] = useState("")
    const [valor, setValor] = useState("")
    const [data, setData] = useState(new Date())

    function cadastrar() {
        let aux = [...globalValue]
        aux.push({
            nome: nome,
            valor: valor,
            data: data
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
                        value={valor.toString()}
                        onChangeText={(e) => setValor(e)}
                        style={css.input}
                        placeholder="Informe o valor"
                        keyboardType="numeric"
                    />
                </View>

                <View>
                    <Text>Data</Text>
                    <RNDateTimePicker value={data} />
                    {/*<DatePicker date={data} onDateChange={setData} />*/}
                    {/*<TextInput*/}
                    {/*    value={data.toString()}*/}
                    {/*    onChangeText={(e) => setData(e)}*/}
                    {/*    style={css.input}*/}
                    {/*    placeholder="Informe a data"*/}
                    {/*/>*/}
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
