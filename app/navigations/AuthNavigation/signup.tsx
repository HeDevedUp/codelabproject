import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Page1,  } from "../../screens/auth/Signup";

const Stack = createStackNavigator();

const SignUpNavigations = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="page1"
      >
        <Stack.Screen name="page1" component={Page1} />
      
      </Stack.Navigator>
    </>
  );
};

export default SignUpNavigations;

const styles = StyleSheet.create({});
