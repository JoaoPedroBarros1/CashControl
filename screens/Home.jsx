import {SafeAreaView} from 'react-native';
import FooterComponent from "../components/FooterComponent";
import MainComponent from "../components/MainComponent";
import HeaderComponent from "../components/HeaderComponent";
import {css} from "../styles/StyleFile1"

function Home({ navigation }){
    return(
        <SafeAreaView>
            <HeaderComponent />
            <MainComponent navigation={navigation} />
            <FooterComponent navigation={navigation} />
        </SafeAreaView>
    )
}

export default Home
