import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CustomButton } from '../components/buttons';
import { CustomInputs } from '../components/inputs';
import axios from 'axios';

export const SignUp = () => {

    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    

    const onRegisterPressed = () => {
        const data = {
            username,
            email,
            password,
            re_password: confirmPassword
        };
        axios.post('http://192.168.1.2:8000/api/v1/auth/users/', data)
            .then((response) => {
                console.log(response.data);
                // handle successful sign up
            })
            .catch((error) => {
                console.log(error.response.data);
                // handle error
            });
    }

    const onSignUpPressed = () => {
        navigation.navigate("Login")
    }
    const onTermOfUsePressed = () => {
        console.warn("onTermOfUsePressed")
    }
    const onPrivactPolicyPressed = () => {
        console.warn("onPrivactPolicyPressed Up!")
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
                <Text style={styles.title}>Create An Account.</Text>
                <CustomInputs 
                    placeholder='Username' 
                    value={username} 
                    setValue={setUsername}
                />
                <CustomInputs 
                    placeholder='Email Address' 
                    value={email} 
                    setValue={setEmail}
                    
                />
                <CustomInputs 
                    placeholder='Password' 
                    value={password} 
                    setValue={setPassword}
                    secureTextEntry={true}
                />
                <CustomInputs 
                    placeholder='Confirm Password' 
                    value={confirmPassword} 
                    setValue={setConfirmPassword}
                    secureTextEntry={true}
                />
                <CustomButton 
                    text="Register"
                    onPress={onRegisterPressed}
                />
                <Text style={styles.text}>
                    By registering, you confirm that you accept our{' '}
                    <Text style={styles.link} onPress={onTermOfUsePressed}>Terms of Use</Text> and {''}
                    <Text style={styles.link} onPress={onPrivactPolicyPressed}>Privacy Policy</Text>
                </Text>
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
                    text="Have an account? Login."
                    onPress={onSignUpPressed}
                    type='TERTIARY'
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create ({
    root: {
        marginTop: '10%',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize:24,
        fontWeight: 'bold',
        color: '#717171',
        margin: 20,
    },
    text: {
        color: 'grey',
        marginVertical: 10
    },
    link: {
        color: '#FDB075'
    },
});