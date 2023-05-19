import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SecondOnboarding from "../../screens/Onboarding/SecondOnboarding";
import FirstOnboarding from "../../screens/Onboarding/FirstOnboarding"
const Stack = createStackNavigator();

const OnbaordingNavigations = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="emailPage"
      >
         <Stack.Screen name="FirstOnboarding" component={FirstOnboarding} />
         <Stack.Screen name="secondOnBoarding" component={SecondOnboarding} />
      </Stack.Navigator>
    </>
  );
};

export default OnbaordingNavigations;

const styles = StyleSheet.create({});
