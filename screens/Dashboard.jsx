import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';

import HeaderComponent from "../components/HeaderComponent";
import BalanceComponent from "./DashboardComponents/BalanceComponent";
import TransactionComponent from "./DashboardComponents/TransactionComponent";
import GraphicComponent from "./DashboardComponents/GraphicComponent";


export default function ({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderComponent />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <BalanceComponent />
                <TransactionComponent navigation={navigation} />
                <GraphicComponent />

            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
