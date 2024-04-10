import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Barcode from '../assets/barcode.png';
import Market from '../assets/market.png';
import Chat from '../assets/messenger.png';
import Report from '../assets/report.png';
import Products from '../assets/stock.png';
import { Sqrbutton } from '../components/SqrButtons';


export const Home = () => {

    const navigation = useNavigation();

    const onTransactionPressed = () => {
        console.warn("onTransactionPressed");
    }
    const onInventoryPressed = () => {
        navigation.navigate("Inventory");
    }
    const onProductsPressed = () => {
        navigation.navigate("Scanner");
    }
    // const onSettingsPressed = () => {
    //     navigation.navigate("Profile");
    // }
    const onCustomerSupportPressed = () => {
        console.warn("onCustomerSupportPressed");
    }
    const onReportsPressed = () => {
        console.warn("onReportsPressed");
    }

    return (
        <SafeAreaView style={styles.container}>
            <Sqrbutton img={Market} onPress={onTransactionPressed} text2="TRANSACTION"/>
            <Sqrbutton img={Barcode} onPress={onInventoryPressed} text2="INVENTORY"/>
            <Sqrbutton img={Products} onPress={onProductsPressed} text2="PRODUCTS"/>
            {/* <Sqrbutton img={Settings} onPress={onSettingsPressed} text2="SETTINGS"/> */}
            <Sqrbutton img={Chat} onPress={onCustomerSupportPressed} text2="CUSTOMER SUPPORT"/>
            <Sqrbutton img={Report} onPress={onReportsPressed} text2="REPORTS"/>
        </SafeAreaView>   
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
})