import {useContext} from "react";
import {View, Text} from "react-native";
import {PieChart} from "react-native-gifted-charts";
import Dados from "../../context/DadosContext";

export default function () {
    const {despesas} = useContext(Dados)

    const pseudoDespesas = [
        {nome: "A", valor: 1.75},
        {nome: "B", valor: 5},
        {nome: "C", valor: 3.5},
        {nome: "A", valor: 2.25}
    ]


    const dataGraphic = () => {
        let graphicList = {}

        pseudoDespesas.forEach(({nome, valor}) => {
            graphicList[nome] += valor
        })

        print(graphicList)

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
                    margin: 20,
                    padding: 16,
                    borderRadius: 20,
                    backgroundColor: '#2196F3',
                }}>
                <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
                    Performance
                </Text>
                <View style={{padding: 20, alignItems: 'center'}}>
                    <PieChart
                        data={dataGraphic}
                        donut
                        showGradient
                        sectionAutoFocus
                        radius={90}
                        innerRadius={60}
                        innerCircleColor={'#2196F3'}
                        // centerLabelComponent={() => {
                        //     return (
                        //         <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        //             <Text
                        //                 style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>
                        //                 47%
                        //             </Text>
                        //             <Text style={{fontSize: 14, color: 'white'}}>Excellent</Text>
                        //         </View>
                        //     );
                        // }}
                    />
                </View>
            </View>
        </View>
    )
}