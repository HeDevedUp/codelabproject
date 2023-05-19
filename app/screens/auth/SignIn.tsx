import { Pressable, StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import Container from "./Container";
import { auth_assets } from "./assets";
import { Button, Input, Text } from "../../components/ui";
import * as Yup from "yup";
import { Formik } from "formik";
import { scale } from "react-native-size-matters";
import themeContext from "../../config/theme/themeContext";
import { Ionicons } from "@expo/vector-icons";
import { Seperator } from "../../components/ui/_helpers";
import { NotificationContext } from "../../providers/context/notification";
import { useNotifications } from "../../hooks/app-hooks/useNotification";
import { login } from "../../providers/call-service/auth";

import ApiContext from "../../providers/context/api";

const SignInSchema = Yup.object().shape({
  username: Yup.string().required("username is required"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password should be at least 6 characters"),
});

const SignIn = ({ navigation }: { navigation: any }) => {
  const theme = useContext(themeContext);
  const { showNotification } = useNotifications();

  const { useLogin } = useContext(ApiContext);
  const { mutate, isLoading, isError } = useLogin();

  const handleButtonPress = () => {
    showNotification({
      title: "New message",
      type: 1,
      message: "You have a new message from John",
      action: "View",
    });
  };

  const handleLogin =  ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    console.log('inside life', username, password);
    
    mutate({ username, password }); 
    // login(username, password )
   };
  

  return (
    <View>
      <Container>
      <View>
               <View 
                 style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
               
               > 
               <Ionicons
                      color={'#fff'}
                      name="cart"
                      size={scale(25)}
                      style={{textAlign:'center',padding:scale(2),backgroundColor:theme.app_base,borderRadius:scale(10)}}
                    />
                    <Text style={{ color:theme.app_base,fontSize:19, fontWeight:'800'}}> Basket</Text>
                 </View>
                          <Seperator height={20} />

        <View > 
         <Text style={{textAlign:'center',fontWeight:'800', fontSize:20,color:theme.button}}>Log into your account </Text>       
         <Seperator height={16} />

         <Text style={{textAlign:'center',fontSize:15}}>Enter your username and Password {"\n"} to access your account or create{"\n"} an account  </Text>        
        </View>

          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={(values) => handleLogin(values)}
            validationSchema={SignInSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <View
                style={{
                  // flex: 1,
                  width: "100%",
                }}
              >
                <View
                  style={{}}
                >
                  <Input
                    placeholder="Username"
                    onChangeText={handleChange("username")}
                    onBlur={handleBlur("username")}
                    value={values.username}
                    keyboardType="default"
                  />
                  {errors.username && touched.username && (
                    <Text
                      style={{
                        color: theme.error,
                        fontSize: scale(12),
                      }}
                    >
                      {errors.username}
                    </Text>
                  )}

                  <Input
                    secureTextEntry={true}
                    placeholder="Password"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                  />
                  {errors.password && touched.password && (
                    <Text
                      style={{
                        color: theme.error,
                        fontSize: scale(12),
                      }}
                    >
                      {errors.password}
                    </Text>
                  )}

             <Seperator height={20} />
              

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          height: scale(14),
                          width: scale(14),
                          borderRadius: scale(2),
                          borderColor: theme.text,
                          borderWidth: 1,
                          marginRight: scale(7),
                        }}
                      />
                      <Text
                        style={{
                          fontSize: scale(14),
                          color: theme.text,
                        }}
                      >
                        Remember me
                      </Text>
                    </View>
                  </View>
                  <Seperator height={20} /> 
                  <Button
                    styles={{
                      paddingVertical: scale(13),
                      backgroundColor:theme.button
                      
                    }}
                    onPress={() => handleSubmit()}
                    disabled={!isValid || isLoading}
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </Button>
                  <Seperator height={30} />

                    <Pressable
                      onPress={() => navigation.navigate("forgotpassword")}
                    >
                      <Text
                        style={{
                          textAlign:'center',
                          fontSize: scale(14),
                          color: theme.primary,
                          textDecorationLine:'underline',
                          fontWeight:'700'

                        }}
                      >
                        Forgot Password?
                      </Text>
                    </Pressable> 
          
                </View>

                <Seperator height={20} />
                <Pressable onPress={() => navigation.navigate("signup")}>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: scale(14),
                      color: theme.text,
                    }}
                  >
                    -- Or continue with --{" "}
                 
                  </Text>
                </Pressable>
                <Seperator height={20} />

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Pressable
                    onPress={() => console.log("Sign in with google")}
                    style={{ borderWidth:2, width:'35%',borderColor:theme.gray, flexDirection:'row', justifyContent:'center',alignItems:'center'}}
                    >
                    <Ionicons
                      color={theme.facebook}
                      name="logo-facebook"
                      size={scale(20)}
                      style={{textAlign:'center',padding:scale(2)}}
                    />
                       <Text style={{textAlign:'center',marginLeft:scale(3),fontSize:15}}>
                       facebook 
                       </Text>

                  </Pressable>
                  <Pressable 
                    style={{ borderWidth:2, width:'35%',borderColor:theme.gray, flexDirection:'row', justifyContent:'center',alignItems:'center'}}
                    onPress={() => console.log("Sign in with google")}
                  >
                 <Ionicons
                      color={theme.error}
                      name="logo-google"
                      size={scale(20)}
                      style={{textAlign:'center',padding:scale(2)}}
                    />
                    <Text  
                    style={{textAlign:'center', fontSize:15}}

                    > Google </Text>
                  </Pressable>
             
                </View>
                <Seperator height={25} />

                <Pressable onPress={() => navigation.navigate("signup")}>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: scale(14),
                      color: theme.text,
                      
                    }}
                  >
                    Dont have an account?{" "}
                    <Text
                      style={{
                        fontSize: scale(14),
                        color: theme.primary,
                        fontWeight:'700'
                      }}
                    >
                      Sign Up
                    </Text>
                  </Text>
                </Pressable>
                <Seperator height={20} />
              </View>
            )}
          </Formik>
        </View>
      </Container>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
