import React, { useContext, useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { scale } from "react-native-size-matters";
import { Button } from "../../components/ui";
import themeContext from "../../config/theme/themeContext";
import { Seperator } from "../../components/ui/_helpers";
import Account from "../../components/app/Account/Account";
import { retrieveAppData } from "../../globals/helper_functions/storingAppData";

const { width, height } = Dimensions.get("screen");

const IMAGE_HEIGHT: number = height * 0.9;
const IMAGE_WEIGHT: number = height * 0.9;

interface UserData {
  image: string;
  firstName: string;
  email: string;
  // Add other properties from your data structure
}

const Profile: React.FC = () => {
  const [userData, setUserData] = useState<Partial<UserData>>({});
  const theme = useContext(themeContext);

  useEffect(() => {
    const checkToken = async () => {
      const data: UserData = await retrieveAppData("data");
      setUserData(data);
    };

    checkToken();
  }, []);


  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: theme.app_base,
          flexDirection: "row",
          padding: scale(12),
          height: height - IMAGE_WEIGHT + scale(90),
          alignItems: "center",
        }}
      >
        <Image
          style={{
            height: height - IMAGE_HEIGHT + scale(6),
            borderRadius: scale(100),
            borderWidth: 2,
            borderColor: "#fff",
            width: "22%",
          }}
          source={{ uri: userData.image }}
        />

        <View style={{ flexDirection: "column", marginLeft: scale(10) }}>
          <Text
            style={{
              color: theme.button,
              fontWeight: "700",
              fontSize: 20,
            }}
          >
            {userData.firstName}
          </Text>
          <Text
            style={{
              color: theme.button,
              fontWeight: "500",
              fontSize: 14,
            }}
          >
            {userData.email}
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          height: "100%",
          width: "92%",
          marginVertical: scale(120),
          marginHorizontal: scale(14),
          paddingVertical: 40,
          alignItems: "center",
          display: "flex",
          borderRadius: scale(10),
          position: "absolute",
        }}
      >
        <Account />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
