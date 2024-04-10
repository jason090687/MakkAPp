import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomButton } from '../components/buttons';
import { CustomInputs } from '../components/inputs';

export const Inventory = () => {

    const [PName, setProductName] = useState('');
    const [PCode, setProductCode] = useState('');
    const [Qunatity, setQunatity] = useState('');

    const navigation = useNavigation();

    const onBarCodePressed = () => {
        navigation.navigate("Scanner");
    }

    const onSavePressed = () => {
        Alert.alert('Product Saved', 'Press OK to Continue');
    }

  return (
    <SafeAreaView>
        <CustomInputs 
            placeholder='Product Name' 
            value={PName} 
            setValue={setProductName}
        />
        <CustomInputs 
            placeholder='Product Code' 
            value={PCode} 
            setValue={setProductCode}
        />
        <CustomInputs 
            placeholder='Quantity' 
            value={Qunatity} 
            setValue={setQunatity}
        />
        <CustomButton 
            text="Scan"
            onPress={onBarCodePressed}
        />
        <CustomButton 
            text="Save"
            onPress={onSavePressed}
        />
    </SafeAreaView>
  );
}
