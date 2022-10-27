import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = () => {
    const handleLogout = async () => {

        try {
            console.log("logout");
        } catch (err) {
            console.log(err);
            
        }

        };
        return (
        <View style={{flex: 1, justifyContent: 'center' , alignItems: 'center'}}>
        <Text>Home</Text>
        <TouchableOpacity
        style={{
        marginvertical: 10,
        padding: 8,
        backgroundColor: 'red',
        width: '80%',
        borderRadius: 20,
        alignItems: 'center',
        }}
        onPress={() => handleLogout()}>
        <Text style={{color: '#fff'}}>Logout</Text>
        </TouchableOpacity>
        </View>
 )
}


export default Home

const styles = StyleSheet.create({})