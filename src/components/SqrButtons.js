import React from 'react';
import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";

export const Sqrbutton = ( {onPress, text, text2, img} ) => {

    const {height} = useWindowDimensions();

    return ( 
        <View style={styles.container}>
            <Pressable onPress={onPress} style={styles.boxes}>
                <Image 
                    source={img} 
                    style={[styles.logo, {height: height * 0.1}]}
                    resizeMode='contain'
                />
                <Text>{text}</Text>
            </Pressable>
            <Text style={styles.text}>{text2}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 'auto',
        padding: 20

    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 300,
    },
    boxes: {
        width: 150,
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
    },
    text: {
        margin: 0,
        textAlign: 'center',
        fontWeight: 'bold'
    },
});