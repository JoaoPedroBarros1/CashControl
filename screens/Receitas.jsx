import React, {useContext} from "react";
import ValoresComponent from "../components/ValoresComponent";

import Dados from "../context/DadosContext";

export default function ({navigation}) {
    const {receitas, setReceitas} = useContext(Dados)

    return (
        <ValoresComponent pageName="Receitas" globalValue={receitas} setGlobalValue={setReceitas} navigation={navigation} />
    )
}