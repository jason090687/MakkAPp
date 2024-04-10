import FontAwesome from '@expo/vector-icons/FontAwesome';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { BarcodeScanner } from '../screens/BarcodeScreen';
import { Confirm } from '../screens/ConfirmScreen';
import { ForgotPassword } from '../screens/ForgetPassword';
import { Home } from '../screens/Home';
import { Inventory } from '../screens/Inventory';
import { Login } from '../screens/LoginScreen';
import { Profile } from '../screens/ProfileScreen';
import { SignUp } from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () =>{

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">

                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="SignUp" 
                    component={SignUp}
                    options={{
                        title: 'Sign Up',
                        headerTitleAlign: "center"
                    }}
                />

                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                    options={{
                        title: 'Forgot Password',
                        headerTitleAlign: "center"
                    }}
                />

                <Stack.Screen
                    name="Confirm"
                    component={Confirm}
                    options={{
                        title: 'Confirmation',
                        headerTitleAlign: "center"
                    }}
                />

                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={({navigation}) => ({
                        title: 'Home',
                        headerTitleAlign: 'center',
                        headerBackVisible: false,
                        headerRight: () => (
                            <FontAwesome
                                name="user"
                                size={25}
                                onPress={() => navigation.navigate("ProfileScreen")}
                            />
                        )
                    })}
                />

                <Stack.Screen
                    name="Scanner"
                    component={BarcodeScanner}
                    options={{
                        title: 'Scan Barcode',
                        headerTitleAlign: "center"
                    }}
                />

                <Stack.Screen
                    name="ProfileScreen"
                    component={Profile}
                    options={({navigation}) => ({
                        title: 'Profile',
                        headerTitleAlign: 'center',   
                        headerRight: () => (
                            <FontAwesome
                                name="gear"
                                size={25}
                                onPress={() => navigation.navigate("ProfileScreen")}
                            />
                        )
                    })}
                />

                <Stack.Screen
                    name="Inventory"
                    component={Inventory}
                    options={{
                        title: 'Inventory',
                        headerTitleAlign: "center"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}