import {useContext} from "react";
import {View, Text} from "react-native";
import {BarChart} from "react-native-gifted-charts";
import Dados from "../../context/DadosContext";

export default function () {
    const {despesas} = useContext(Dados)

    const pseudoDespesas = [
        {nome: "Compras", valor: 1.75},
        {nome: "Medicamentos", valor: 50},
        {nome: "Buscopan", valor: 3.5},
        {nome: "Anana", valor: 2.25}
    ]

    const addValues = () => {
        let graphicList = []

        pseudoDespesas.forEach((dict) => {
            graphicList.push({value: dict.valor, label: dict.nome})
        })

        return graphicList
    }

    return (
        <View
            style={{
                paddingVertical: 30,
                flex: 1,
                marginBottom: 100
            }}>
            <View
                style={{
                    margin: 20
                }}>
                <Text style={{color: '#2196F3', fontSize: 16, fontWeight: 'bold'}}>
                    Despesas
                </Text>
                <BarChart
                    data={addValues()}
                    barBorderTopLeftRadius={5}
                    barBorderTopRightRadius={5}
                    showFractionalValues
                    noOfSections={7}
                    frontColor={"#2196F3"}
                    xAxisColor={"#2196F3"}
                    yAxisColor={"#2196F3"}
                    xAxisIndicesColor={"#2196F3"}
                    yAxisIndicesColor={"#2196F3"}
                    hideRules
                />

                {/*<PieChart*/}
                {/*    data={addValues()}*/}
                {/*    donut*/}
                {/*    showText*/}
                {/*    labelsPosition="onBorder"*/}
                {/*    innerCircleColor={'#2196F3'}*/}

                {/*    textColor="white"*/}
                {/*    // showTextBackground*/}
                {/*    // textBackgroundColor="white"*/}
                {/*    // textBackgroundRadius={22}*/}
                {/*/>*/}
            </View>
        </View>
    )
}