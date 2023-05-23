import React,{useContext} from 'react';
import { Dimensions, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters';
import { Seperator } from '../../../components/ui/_helpers';
import themeContext from '../../../config/theme/themeContext';

const { width, height } = Dimensions.get('screen');

interface IconItem {  
  name: string;
  icon: string;
}


const items: IconItem[] = [
  { name: 'Notification', icon: 'notifications' },
  { name: 'Edit Profile', icon: 'create' },
  { name: 'Wishlist', icon: 'heart' },
  { name: 'Order History', icon: 'list' },
  { name: 'Track Order', icon: 'location' },
  { name: 'Payment Options', icon: 'card' },
  { name: 'Settings', icon: 'settings' },
  { name: 'Logout', icon: 'log-out' },
];


const Account: React.FC = () => {
  const theme = useContext(themeContext);

  return (
    <View>
      {items.map((item: IconItem, index: number) => (
        <View key={index} style={{ flexDirection: 'row',gap:50,height:scale(42), alignItems:'center', }}>
         <Ionicons name={item.icon as "notifications" | "create" | "heart" | "list" | "location" | "card" | "settings" | "log-out" | "key" | "push" | "map" | "filter" | "at" | "link" | "search" | "image" | "text"} size={30} color={theme.app_base} />
            <Text style={{fontWeight:'700'}}>{item.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default Account;
