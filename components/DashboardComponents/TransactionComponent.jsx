import React, {useContext} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import {Dados} from "../../context/DadosContext";


const OpacityButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const EmptyComponent = ({ texto }) => {
    return (
        <Text>Ainda não há {texto}</Text>
    )
}


export default function ({ navigation }) {
    const {receitas, despesas} = useContext(Dados)

    const handleAddIncome = () => {
        navigation.navigate("Receitas")
    };

    const handleAddExpense = () => {
        navigation.navigate("Despesas")
    };

    return (
        <View style={styles.transactionContainer}>
            <View style={styles.transactionListContainer}>
                <Text style={styles.transactionTitle}>Receitas</Text>
                <FlatList
                    ListEmptyComponent={<EmptyComponent texto="receitas" />}
                    data={receitas}
                    renderItem={({ item }) => (
                        <View style={styles.transactionItem}>
                            <Text style={styles.transactionDescription}>{item.nome}</Text>
                            <Text style={styles.income}>+ R$ {item.valor}</Text>
                        </View>
                    )}
                />
                <OpacityButton title="Adicionar Receita" onPress={handleAddIncome} />
            </View>

            <View style={styles.transactionListContainer}>
                <Text style={styles.transactionTitle}>Despesas</Text>
                <FlatList
                    ListEmptyComponent={<EmptyComponent texto="despesas" />}
                    data={despesas}
                    renderItem={({ item }) => (
                        <View style={styles.transactionItem}>
                            <Text style={styles.transactionDescription}>{item.nome}</Text>
                            <Text style={styles.expense}>- R$ {item.valor}</Text>
                        </View>
                    )}
                />
                <OpacityButton title="Adicionar Despesa" onPress={handleAddExpense} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    transactionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 0,
    },
    transactionListContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    transactionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    transactionItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    transactionDescription: {
        flex: 1,
    },
    income: {
        color: '#2ecc71',
    },
    expense: {
        color: '#e74c3c',
    },
    buttonContainer: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});