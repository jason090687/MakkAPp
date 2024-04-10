import React from "react";
import { Image, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { useSelector } from "react-redux";
import ProfileLogo from '../assets/ProfileLogo.png';

export const Profile = () =>{

    const {height} = useWindowDimensions();
    const user = useSelector((state) => state.auth.user)

    return(

        <View style={styles.root}>
                <Image 
                    source={ProfileLogo} 
                    style={[styles.logo, {height: height * 0.2}]}
                    resizeMode='contain'
                />
                <Text style={styles.name}>
                    {user.Username}
                </Text>
                <Text>Senior Graphic Designer</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#F9E0AE',
    },
    name: {
        fontWeight: "bold",
        fontSize: 25,
        marginTop: 10,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 300,
    }
});