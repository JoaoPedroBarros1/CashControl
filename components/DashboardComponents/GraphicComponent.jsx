import {useContext} from "react";
import {View, Text} from "react-native";
import {BarChart} from "react-native-gifted-charts";
import Dados from "../../context/DadosContext";

export default function () {
    const {despesas} = useContext(Dados)

    const addValues = () => {
        let graphicList = []

        despesas.forEach((dict) => {
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
                    frontColor={"#2196F3"}
                    xAxisColor={"#2196F3"}
                    yAxisColor={"#2196F3"}
                    xAxisIndicesColor={"#2196F3"}
                    yAxisIndicesColor={"#2196F3"}
                    hideRules
                />
            </View>
        </View>
    )
}