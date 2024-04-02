import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import HeaderComponent from "../components/HeaderComponent";
import BalanceComponent from "../components/DashboardComponents/BalanceComponent";
import TransactionComponent from "../components/DashboardComponents/TransactionComponent";
import GraphicComponent from "../components/DashboardComponents/GraphicComponent";


export default function ({ navigation }) {
    return (
        <SafeAreaView>
            <HeaderComponent navigation={navigation} />
            <FlatList
                ListHeaderComponent={BalanceComponent}
                ListFooterComponent={GraphicComponent}
                data={[0]}
                renderItem={() => (
                    <TransactionComponent navigation={navigation} />
                )}
            />
        </SafeAreaView>
    )
}
