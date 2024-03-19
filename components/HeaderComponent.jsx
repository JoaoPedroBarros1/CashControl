import {View, Image} from 'react-native';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faBars, faBell} from "@fortawesome/free-solid-svg-icons";
import {css} from '../styles/StyleFile1'

function HeaderComponent(){
    return (
        <View style={css.divheader}>
            <FontAwesomeIcon icon={faBars} size={50} />
            <Image style={css.imglogo} source={require('../assets/logo.png')}></Image>
            <FontAwesomeIcon icon={faBell} size={50} />
        </View>
    )
}

export default HeaderComponent