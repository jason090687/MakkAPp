import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export const CustomInputs = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'White',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {
        
    },
});