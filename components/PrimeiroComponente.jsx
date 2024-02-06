import {Text} from "react-native";
import textStyle from "../styles/text";

function PrimeiroComponente({titulo, subtitulo}) {
    return (
        <>
            <Text style={textStyle.title}>{titulo}</Text>
            <Text style={textStyle.subtitle}>{subtitulo}</Text>
        </>
    )
}

export default PrimeiroComponente
