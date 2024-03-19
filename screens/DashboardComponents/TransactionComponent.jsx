import {useContext} from 'react';
import {View} from "react-native";
import Dados from "../../context/DadosContext";

export default function ({ navigation }) {
    const {receitas, despesas} = useContext(Dados)

    return (
        <View>

        </View>
    )
}