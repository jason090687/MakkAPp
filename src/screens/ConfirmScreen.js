import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

export const Confirm = () => {
  const route = useRoute();
  const navigation = navigation();
  const { confirmationToken } = route.params;

  useEffect(() => {
    const confirmAccount = async () => {
      try {
        const response = await axios.get(
          `http://192.168.1.2:8000/api/v1/auth/users/activation/${confirmationToken}/`
        );
        if (response.data.success) {
          // display success message
          navigation.navigate("Login")
          // redirect to home screen
        } else {
          // display error message
          console.log(error)
        }
      } catch (error) {
        // display error message
      }
    };
    confirmAccount();
  }, [confirmationToken]);

  return (
    <SafeAreaView>
      <View>
        <Text>Confirm Email</Text>
      </View>
    </SafeAreaView>
  );
};