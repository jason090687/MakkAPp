import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { storeUser } from '../Redux/Reducer/authSlice';
import { CustomButton } from '../components/buttons';
import { CustomInputs } from '../components/inputs';

export const SignUp = () => {

    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()

    const navigation = useNavigation();

    // const [username, setUsername] = useState('');
    const [email, setEmail] = useState({'email': ''});
    const [password, setPassword] = useState({'password': ''});
    const [confirmPassword, setConfirmPassword] = useState({'confirm_password': ''});

    const onRegisterPressed = () => {
        navigation.navigate("Login");
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
                    value={user.Username} 
                    setValue={(value) => dispatch(storeUser({...user, Username: value}))}
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