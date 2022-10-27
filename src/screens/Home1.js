import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import Ionicon from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome5"

const Home = () => {


    
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  return (
    <View style={styles.container}>
        {/* <Text style={styles.textcontainer}>Hello</Text> */}
        <View style={styles.inputBoxContainer}>
            <Ionicon name="mail" size={30}/>
        <TextInput style={styles.inputBox} 
                placeholder="Enter Your Email"
                placeholderTextColor={'grey'}/>
        </View>

        <View style={styles.inputBoxContainer}>
            <FontAwesome name="lock" size={30}/>
        <TextInput style={styles.inputBox} 
                placeholder="Enter Your Password"
                placeholderTextColor={'grey'}
                // secureTextEntry={true}
                secureTextEntry={isPasswordVisible ? false : true}
                />
                
                {/* <FontAwesome name="eye" size={30}/> */}
                 
                 <TouchableOpacity 
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                 <FontAwesome name={isPasswordVisible ? 'eye-slash' : 'eye'} size={30}/>
                 </TouchableOpacity>
        </View>

       
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center'
      
    },

    inputBoxContainer:{
        alignItems:'center',
       
        flexDirection: 'row',
        borderWidth:1,
        width:'90%',
        marginTop:50,
        borderRadius:20,
        paddingHorizontal:10,
        height:50,
        borderColor:'red'
       
    },

    inputBox:{
        paddingHorizontal:10,
        flex:1,

    },

    textcontainer:{
    marginTop:10,
    color:"black",
    }
})


export default Home

