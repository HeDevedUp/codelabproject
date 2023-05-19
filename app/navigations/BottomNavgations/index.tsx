import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Profile from "../../screens/Profile/Profile";
import { scale } from "react-native-size-matters";
import { MaterialIcons,MaterialCommunityIcons } from "@expo/vector-icons";

import { useFonts, Ubuntu_400Regular } from "@expo-google-fonts/ubuntu";
import themeContext from "../../config/theme/themeContext";

const Tab = createBottomTabNavigator();

const BottomNavigations = () => {
  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
  });

  const theme = useContext(themeContext);

  if (!fontsLoaded) {
    return null;
  }

  // now to animating it
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.background,
          height: scale(53),
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: "absolute",
        },

        tabBarLabelStyle: {
          fontSize: scale(11),
          fontFamily: "Ubuntu_400Regular",
          marginTop: scale(-13),
          marginBottom: scale(7),
        },

        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.text,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Profile }
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={ Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="star-outline" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person-outline" size={24} color={color} />
          ),
        }}
        name="Account"
        component={Profile}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="shopping-outline" size={24} color={color} />
          ),
        }}
        name="Cart"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigations;

const styles = StyleSheet.create({});
