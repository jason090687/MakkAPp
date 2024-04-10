import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import Logo from '../assets/logo.png';
import { CustomButton } from '../components/buttons';
import { CustomInputs } from '../components/inputs';


export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onLoginPressed = () => {
        if(username != "" || password != ""){
            console.warn("ERROR");
        }else{
            navigation.navigate("Home");
        }

    }
    const onForgotPasswordPressed = () => {
        navigation.navigate("ForgotPassword");
    }
    const onSignUpPressed = () => {
        navigation.navigate("SignUp");
    }
    const onLoginInFacebook = () => {
        console.warn("Successfully Login with Facebook");
    }
      const onLoginInGoogle = () => {
        console.warn("Successfully Login with Google");
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image 
                    source={Logo} 
                    style={[styles.logo, {height: height * 0.3}]}
                    resizeMode='contain'
                />
                <CustomInputs 
                    placeholder='Username' 
                    value={username} 
                    setValue={setUsername}
                />
                <CustomInputs 
                    placeholder='Password' 
                    value={password} 
                    setValue={setPassword}
                    secureTextEntry={true}
                />
                <CustomButton 
                    text="Login"
                    onPress={onLoginPressed}
                />
                <CustomButton 
                    text="Forgot Password"
                    onPress={onForgotPasswordPressed}
                    type='TERTIARY'
                />
                <CustomButton
                    text="Sign In with Facebook"
                    onPress={onLoginInFacebook}
                    bgColor="#E7EAF4"
                    fgColor="#4765A9"
                />
                <CustomButton
                    text="Sign In with Google"
                    onPress={onLoginInGoogle}
                    bgColor="#FAE9EA"
                    fgColor="#DD4D44"
                />
                <CustomButton
                    text="Don't have an account? Create one"
                    onPress={onSignUpPressed}
                    type='TERTIARY'

                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create ({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        marginTop: 100,
        width: '70%',
        maxWidth: 300,
        maxHeight: 300,
    },
})