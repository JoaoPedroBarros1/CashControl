import {useContext} from "react";
import {View, StyleSheet, Text} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faHandHoldingDollar, faMoneyBillTransfer, faMoneyBillTrendUp, faArrowUp, faArrowDown, faEquals} from "@fortawesome/free-solid-svg-icons";
import Dados from "../../context/DadosContext";


const NetGainComponent = ({value}) => {
    if (value > 0) {
        return (
            <FontAwesomeIcon color="#82ca9d" icon={faArrowUp} size={70} />
        )
    }

    if (value < 0) {
        return (
            <FontAwesomeIcon color="#f58a8a" icon={faArrowDown} size={70} />
        )
    }

    return (
        <FontAwesomeIcon color="whitesmoke" icon={faEquals} size={70} />
    )
}


export default function () {
    const {receitas, despesas} = useContext(Dados)

    const totalReceitas = (receitas.reduce((total, item) => total + parseFloat(item.valor), 0)).toFixed(2)
    const totalDespesas = (despesas.reduce((total, item) => total + parseFloat(item.valor), 0)).toFixed(2)
    const netGain = totalReceitas - totalDespesas

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <View style={[styles.transactionContainer, { backgroundColor: '#6c90c9' }]}>
                    <FontAwesomeIcon color="whitesmoke" icon={faMoneyBillTransfer} size={100} />
                    <View>
                        <Text style={styles.transactionTitle}>Saldo</Text>
                        <Text style={styles.transactionAmount}>R$ {netGain.toFixed(2)}</Text>
                    </View>
                    <NetGainComponent value={netGain} />
                </View>

                <View style={[styles.transactionContainer, { backgroundColor: '#82ca9d', gap: 20, justifyContent: "flex-start" }]}>
                    <View>
                        <FontAwesomeIcon color="whitesmoke" icon={faMoneyBillTrendUp} size={100} />
                    </View>
                    <View>
                        <Text style={styles.transactionTitle}>Receitas</Text>
                        <Text style={styles.transactionAmount}>R$ {totalReceitas}</Text>
                    </View>
                </View>

                <View style={[styles.transactionContainer, { backgroundColor: '#f58a8a', gap: 20, justifyContent: "flex-start" }]}>
                    <View>
                        <FontAwesomeIcon color="whitesmoke" icon={faHandHoldingDollar} size={100} />
                    </View>
                    <View>
                        <Text style={styles.transactionTitle}>Despesas</Text>
                        <Text style={styles.transactionAmount}>R$ {totalDespesas}</Text>
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
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        padding: 20,
        width: '95%'
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