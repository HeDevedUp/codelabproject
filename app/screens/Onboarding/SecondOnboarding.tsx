import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React,{useContext} from "react";
import { scale } from "react-native-size-matters";
import { Button } from "../../components/ui";
import { Ionicons } from '@expo/vector-icons';
import { Seperator } from '../../components/ui/_helpers';
const { width, height } = Dimensions.get("screen");
import themeContext from "../../config/theme/themeContext";

const SLIDE_HEIGHT = 0.50 * height;

const SecondOnboarding = ({ navigation }: { navigation: any }) => {
  const theme = useContext(themeContext);

  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor:theme.button,
        paddingVertical: scale(20),
        // paddingRight: scale(20),
        height:'100%',
        width:'100%'
      }}
    >
      <View 
                 style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  gap:10
                }}
               
               > 
               <Ionicons
                      color={'#fff'}
                      name="cart"
                      size={scale(30)}
                      style={{textAlign:'center',padding:scale(2),backgroundColor:theme.app_base,borderRadius:scale(10)}}
                    />
                    <Text style={{ color:theme.app_base,fontSize:19, fontWeight:'800',}}> Basket</Text>
                 </View>

                          <Seperator height={20} />

                        <View>  
                      <Text style={{color:theme.white,textAlign:'center',fontSize:16}}>
                      Welcome to 
                      </Text>
                      <Seperator height={20} />

                      <Text style={{color:theme.white,textAlign:'center',fontSize:30,fontWeight:'900'}}>
                        Basket online store
                        </Text>
                        <Seperator height={10} />

                        <Text style={{color:theme.white,textAlign:'center',fontSize:15,}}>
                        Basket is the no1 online store for {"\n"} 
                        both new and used products 
                        </Text>
                        </View>
   
      <Image
        source={require("./assets/shooping.jpg")}
        style={{
          width: "100%",
          height: SLIDE_HEIGHT,
        }}
        resizeMode="contain"
      />

      <Button onPress={() => { navigation.navigate('signin') }}
       style={{paddingHorizontal: scale(90),paddingVertical: scale(11),borderRadius:7,backgroundColor:theme.app_base}}>Get Started</Button>
    </View>
  );
};

export default SecondOnboarding;

const styles = StyleSheet.create({});
