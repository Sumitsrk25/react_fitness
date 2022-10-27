import { StatusBar } from 'expo-status-bar';
import { View,TextInput } from 'react-native';

import {customStyle} from './style';
import Array from "./src/Array";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <View style={customStyle.mainContainer}>
  

      {/* <Array/> */}
    
      <StatusBar backgroundColor='red' />
      {/* <Home/> */}
      {/* <View style={customStyle.shape}></View> */}

      

    </View>
  );
}


