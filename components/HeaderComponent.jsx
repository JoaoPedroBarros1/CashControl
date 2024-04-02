import {View, Image, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {css} from '../styles/StyleFile1'


function HeaderComponent({ navigation }){
    return (
        <View style={css.divheader}>
            <TouchableOpacity onPress={() => {navigation.navigate("Home")}}><Image style={css.imglogo1} source={require('../assets/logo.png')}></Image></TouchableOpacity>
            {/*<TouchableOpacity><FontAwesomeIcon icon={faBars} size={30} /></TouchableOpacity>*/}
        </View>
    )
}

export default HeaderComponent