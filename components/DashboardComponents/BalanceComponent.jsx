import {useContext} from "react";
import {View, StyleSheet, Text} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faHandHoldingDollar, faMoneyBillTransfer} from "@fortawesome/free-solid-svg-icons";
import Dados from "../../context/DadosContext";


export default function () {
    const {receitas, despesas} = useContext(Dados)

    const totalReceitas = receitas.reduce((total, item) => total + parseFloat(item.valor), 0)
    const totalDespesas = despesas.reduce((total, item) => total + parseFloat(item.valor), 0)

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <View style={[styles.transactionContainer, { backgroundColor: '#82ca9d' }]}>
                    <View style={styles.iconContainer}>
                        <FontAwesomeIcon icon={faHandHoldingDollar} size={100} />
                    </View>
                    <View>
                        <Text style={styles.transactionTitle}>Receitas</Text>
                        <Text style={styles.transactionAmount}>R$ {totalReceitas.toFixed(2)}</Text>
                    </View>
                </View>

                <View style={[styles.transactionContainer, { backgroundColor: '#f58a8a', marginTop: 20 }]}>
                    <View style={styles.iconContainer}>
                        <FontAwesomeIcon icon={faMoneyBillTransfer} size={100} />
                    </View>
                    <View>
                        <Text style={styles.transactionTitle}>Despesas</Text>
                        <Text style={styles.transactionAmount}>R$ {totalDespesas.toFixed(2)}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
    },
    transactionContainer: {
        margin:10,
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 10,
        padding: 20,
        width: '95%',
    },
    iconContainer: {
        marginRight: 50,
    },
    transactionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'white',
    },
    transactionAmount: {
        fontSize: 16,
        color: 'white',
    },
});