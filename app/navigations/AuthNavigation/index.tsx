import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "../../screens";
import SignUpNavigations from "./signup";
import ForgotPasswordNavigations from "./forgotPassword";
import OnbaordingNavigations from "./Onboading";

const Stack = createStackNavigator();

const AuthNavigations = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="OnbaordingNavigations"
      >
         <Stack.Screen name="OnbaordingNavigations" component={OnbaordingNavigations} />
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="signup" component={SignUpNavigations} />
        <Stack.Screen
          name="forgotpassword"
          component={ForgotPasswordNavigations}
        />
      </Stack.Navigator>
    </>
  );
};

export default AuthNavigations;

const styles = StyleSheet.create({});
