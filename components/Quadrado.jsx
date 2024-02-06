import {View} from "react-native";

function Quadrado({cor="red", flex=1}) {
    const estilo = {
        backgroundColor: cor,
        flex: flex
    }

    return (
        <View style={estilo} />
    )
}

export default Quadrado