import { Dimensions, Image, StyleSheet, Text, View ,ImageBackground,Platform,Pressable,TouchableOpacity} from "react-native";
import React,{useContext} from "react";
import { scale } from "react-native-size-matters";
import { Button } from "../../components/ui";
import { Ionicons } from '@expo/vector-icons';
import { Seperator } from '../../components/ui/_helpers';
const { width, height } = Dimensions.get("screen");
import themeContext from "../../config/theme/themeContext";

const SLIDE_HEIGHT = 0.50 * height;

const FirstOnboarding = ({ navigation }: { navigation: any }) => {
  const theme = useContext(themeContext);

  return (
    <ImageBackground 
    
    style={{width:'100%',height:'100%',   backgroundColor: '#000',}} source={require("./assets/cloth2.jpg") }
    blurRadius={Platform.OS === 'ios' ? 8 : 1}
    imageStyle={{
        // tintColor: 'rgba(0, 0, 0, 0.1)',
      }}
    >      
        <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: scale(20),
        backgroundColor:  'rgba(44, 62, 80, 0.8)', 

      
      }}
    >
      <View 
                 style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 150,
                  height: 150,
                   borderRadius: 150 / 2,
                  backgroundColor:theme.app_base,
                }}
               
               > 
               <Ionicons
                      color={'#E1D9D1'}
                      name="cart"
                      size={scale(30)}
                      style={{textAlign:'center',padding:scale(2),color:theme.white,borderRadius:scale(10)}}
                    />
                    <Text style={{ color:theme.white,fontSize:25, fontWeight:'800',}}> Basket</Text>
                 </View> 

                           <Seperator height={20} /> 

                        <View>  
                        <Text style={{color:theme.white,textAlign:'center',fontSize:25,fontWeight:'400'}}>
                      Start Shopping.
                      </Text>
                      <Seperator height={20} />

                      <Text style={{color:theme.white,textAlign:'center',fontSize:25,fontWeight:'400'}}>
                        Stay Happy.
                        </Text>
                        <Seperator height={20} />

                        <Text style={{color:theme.white,textAlign:'center',fontSize:25,fontWeight:'400'}}>
                         Anytime.
                        </Text>
                        </View>
                        <Seperator height={50} /> 

                        <Text style={{color:theme.app_base,textAlign:'center',fontSize:18,fontWeight:'800'}}>
                         Basket Online Maketplace
                        </Text>
                        <Seperator height={60} /> 

                        <View  style={{  flexDirection: "row",gap:200,  justifyContent:'space-between',  }} >

                                <Pressable onPress={() => { navigation.navigate('signin') }}>
                            <Text style={{color:theme.app_base,fontSize:20,fontWeight:'800'}}> Skip</Text>
                             </Pressable>
                             <Pressable onPress={() => { navigation.navigate('secondOnBoarding') }}>

                            <Text style={{color:theme.app_base,fontSize:20,fontWeight:'800'}}>Next </Text>
                             </Pressable>

                        </View>

    </View>
     </ImageBackground>
  );
};

export default FirstOnboarding;

const styles = StyleSheet.create({
     overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay color
  },
});
