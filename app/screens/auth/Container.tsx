import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { scale } from "react-native-size-matters";
import { KeyboardAwareView } from "keyboard-aware-view";

type Props = {
  navigationComponent?: any;
  children: any;
};

const { width, height } = Dimensions.get("window");

const IMAGE_HEIGHT = height * 200;

const Container: React.FC<Props> = ({
 
  children,
  navigationComponent,
}) => {
  return (
    <KeyboardAwareView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          position: "relative",
        }}
      >
        <View
          style={{
            position: "absolute",
            width: "100%",
            zIndex: 10,
            top: -scale(10),
          }}
        >
          {navigationComponent}
        </View>
    
        <View
          style={{
            width: "100%",
            // backgroundColor: "#fff",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            padding: 20,
            flex: 1,
            height:'100%',
          }}
        >
          {children}
        </View>
      </View>
    </KeyboardAwareView>
  );
};

export default Container;

const styles = StyleSheet.create({});
