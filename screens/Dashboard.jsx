import React from 'react';
import {FlatList, SafeAreaView, ScrollView} from 'react-native';

import HeaderComponent from "../components/HeaderComponent";
import BalanceComponent from "../components/DashboardComponents/BalanceComponent";
import TransactionComponent from "../components/DashboardComponents/TransactionComponent";
import GraphicComponent from "../components/DashboardComponents/GraphicComponent";


export default function ({ navigation }) {
    return (
        <SafeAreaView>
            <HeaderComponent />
            <FlatList
                ListHeaderComponent={BalanceComponent}
                ListFooterComponent={GraphicComponent}
                data={[TransactionComponent]}
                renderItem={({item, index, separators}) => (
                    item.
                )}
            />
            <ScrollView>
                <BalanceComponent />
                <TransactionComponent
                    navigation={navigation}
                />
                <GraphicComponent />
            </ScrollView>
        </SafeAreaView>
    )
}
