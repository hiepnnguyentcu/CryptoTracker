import React from 'react';
import { StyleSheet, View, FlatList} from "react-native";

import CoinItem from "../../components/CoinItem";
import cryptocurrencies from '../../../assets/Crypto Tracker Assets/data/cryptocurrencies.json'

const HomeScreen = () => {
    return (
        <FlatList
        data = {cryptocurrencies}
        renderItem={({item}) => <CoinItem marketCoin= {item} />}
        />
    );
};
export default HomeScreen;