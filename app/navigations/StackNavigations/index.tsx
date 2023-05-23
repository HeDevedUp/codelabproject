import { StyleSheet, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Saved from "../../screens/Saved/Saved";

const Stack = createStackNavigator();

const StackNavigations = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Homme"
      >
       
      </Stack.Navigator>
    </>
  );
};

export default StackNavigations;

const styles = StyleSheet.create({});
