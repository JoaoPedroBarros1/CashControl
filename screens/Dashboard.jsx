import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';

import HeaderComponent from "../components/HeaderComponent";
import BalanceComponent from "../components/DashboardComponents/BalanceComponent";
import TransactionComponent from "../components/DashboardComponents/TransactionComponent";
import GraphicComponent from "../components/DashboardComponents/GraphicComponent";


export default function ({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1}}>
            <HeaderComponent />
            {/* É pra ser uma scrollView, mas não pode ser pai de uma FlatList */}
            <View contentContainerStyle={styles.scrollContainer}>
                <BalanceComponent />
                <TransactionComponent navigation={navigation} />
                <GraphicComponent />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});

// export default function ({ navigation }) {
//     const {receitas, despesas} = useContext(Dados)
//
//     return (
//         <SafeAreaView style={css.container}>
//             <View style={css.wrapper}>
//                 <View style={css.titleWrapper}>
//                     <View>
//                         <Text style={css.titulo}>Despesas</Text>
//                         <Text style={css.subtitle}>
//                             {despesas.reduce((soma, item) => soma + parseInt(item.valor), 0)}
//                         </Text>
//                     </View>
//
//                     <View>
//                         <Text style={css.titulo}>Receitas</Text>
//                         <Text style={css.subtitle}>
//                             {receitas.reduce((soma, item) => soma + parseInt(item.valor), 0)}
//                         </Text>
//                     </View>
//                 </View>
//
//                 <View style={css.buttonWrapper}>
//                     <Button
//                         title="Cadastrar receitas"
//                         onPress={() => navigation.navigate('Receitas')}
//                     />
//
//                     <Button
//                         title="Cadastrar despesas"
//                         onPress={() => navigation.navigate('Despesas')}
//                     />
//                 </View>
//             </View>
//         </SafeAreaView>
//     );
// }
