import {View, Image, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {css} from '../styles/StyleFile1'

function MainComponent ({ navigation }){
    return (
        <View style={css.divmain}>
            <View style={css.nomeagencia}>
                <Text style={css.txt}>Gustavo Henrique</Text>
                <Text style={css.txt}>Agência **02</Text>
                <Text style={css.txt}>Conta **48-0</Text>
                <FontAwesomeIcon icon={faChevronDown} size={20} />
            </View>
            <View style={css.btndiv}>
                <TouchableOpacity style={css.btnmain} onPress={() => navigation.navigate("Dashboard")}>
                    <Text style={css.txtBtn}>Acessar minha conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MainComponent