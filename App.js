import { StatusBar } from 'expo-status-bar';
import { View,TextInput,Stylesheet } from 'react-native';

import {customStyle} from './style';
import Array from "./src/Array";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Signup from './src/screens/Signup';
import SplashScreen from './src/screens/SplashScreen1';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (


<NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>

        <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
        
        <Stack.Screen name="Home" component={Home} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
