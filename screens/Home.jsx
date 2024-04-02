import {SafeAreaView} from 'react-native';
import FooterComponent from "../components/FooterComponent";
import MainComponent from "../components/MainComponent";
import HeaderComponent from "../components/HeaderComponent";


function Home({ navigation }){
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderComponent navigation={navigation} />
            <MainComponent navigation={navigation} />
            <FooterComponent navigation={navigation} />
        </SafeAreaView>
    )
}

export default Home
