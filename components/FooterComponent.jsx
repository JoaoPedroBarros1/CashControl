import {View, Text,TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faMoneyBillTrendUp, faMoneyBillTransfer} from "@fortawesome/free-solid-svg-icons";
import {css} from '../styles/StyleFile1'

function FooterComponent({ navigation }){
    return (
        <View style={css.divfooter}>
            <View>
                <TouchableOpacity style={css.btnatalho1} onPress={() => navigation.navigate("Receitas")}>
                    <FontAwesomeIcon icon={faMoneyBillTrendUp} size={70} style={css.imgfooter} />
                    <Text>Add. Receitas</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={css.btnatalho2} onPress={() => navigation.navigate("Despesas")}>
                    <FontAwesomeIcon icon={faMoneyBillTransfer} size={70} style={css.imgfooter} />
                    <Text>Add. Despesas</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FooterComponent