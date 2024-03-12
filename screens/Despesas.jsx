import React, {useContext} from "react";
import ValoresComponent from "../components/ValoresComponent";

import Dados from "../context/DadosContext";

export default function ({navigation}) {
    const {despesas, setDespesas} = useContext(Dados)

    return (
        <ValoresComponent pageName="Despesas" globalValue={despesas} setGlobalValue={setDespesas} navigation={navigation} />
    )
}