import React, { useContext } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";


import { COLORS } from "../../globals/constants/color";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import { images } from "../../assets";
import { scale, verticalScale } from "react-native-size-matters";

import { useFonts, Ubuntu_400Regular } from "@expo-google-fonts/ubuntu";
import BottomNavigations from "../BottomNavgations";
import Header from "../../components/app/Header/Header";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../../config/theme/themeContext";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: any) => {
  const theme = useContext(themeContext);

  const [mode, setMode] = React.useState<"light" | "dark">("light");
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.drawerHeader}>
        {/* <Image
          source={images.logo}
          style={{
            width: scale(150),
            height: scale(50),
          }}
        /> */}
            <Ionicons
            name="cart"
            size={scale(34)}
            color={theme.app_base}
          />
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        onPress={() => {
          setMode(mode === "light" ? "dark" : "light");
          EventRegister.emit("changeMode", mode);
        }}
        style={styles.logoutButton}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const DrawerNavigations = () => {
  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
  });
  const theme = useContext(themeContext);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          header: (props) => <Header {...props} />,
          drawerPosition: "right",
          drawerStyle: {
            backgroundColor: theme.background,
          },

          drawerLabelStyle: {
            color: theme.text,
          },

          drawerActiveBackgroundColor: theme.primary,
        }}
        initialRouteName="Homescreen"
      >
        <Drawer.Screen
          options={{
            drawerLabel: "Products",
            drawerLabelStyle: {
              color: theme.text,
              fontSize: scale(14),
              fontFamily: "Ubuntu_400Regular",
            },
            drawerIcon: () => (
              <MaterialIcons name="dashboard" size={24} color={theme.text} />
            ),
          }}
          name="Dashboard"
          component={BottomNavigations}
        />
    
       
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigations;

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  drawerHeader: {
    height: scale(90),
    justifyContent: "flex-end",
    alignItems: "center",
  },
  drawerHeaderText: {
    fontSize: scale(24),
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "red",
    paddingVertical: scale(8),
    paddingHorizontal: scale(16),
    marginHorizontal: verticalScale(10),
    marginVertical: scale(16),
    borderRadius: scale(4),
    alignItems: "center",
  },
  logoutText: {
    color: "white",
    fontSize: scale(14),
    fontWeight: "bold",
  },
});
