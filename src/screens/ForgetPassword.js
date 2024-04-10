import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { CustomButton } from "../components/buttons";
import { CustomInputs } from "../components/inputs";

export const ForgotPassword = () => {

    const navigation = useNavigation();

    const [username, setUsername] = useState('');

    const onSendPressed = () => {
        navigation.navigate("Confirm");
    }

    const onSignInPress = () => {
        navigation.navigate('Login');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>
                <CustomInputs 
                    placeholder='Username'
                    value={username}
                    setValue={setUsername}
                />

                <CustomButton text="Send" onPress={onSendPressed}/>

                <CustomButton 
                    text="Back to Sign In"
                    onPress={onSignInPress}
                    type="TERTIARY"
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 25,
        marginTop: 50
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#717171',
        margin: 10,
      },
      text: {
        color: 'gray',
        marginVertical: 10,
      },
      link: {
        color: '#FDB075',
      },
});