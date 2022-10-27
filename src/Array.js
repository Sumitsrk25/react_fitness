import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Array = () => {

    const[data,setData] = useState([
        {
            id: 1,
            name: 'Haresh'
        },
        {
            id: 2,
            name: 'Haresh1'
        },
        {
            id: 3,
            name: 'Haresh3'
        },
        {
            id: 4,
            name: 'Haresh4'
        },
        {
            id: 5,
            name: 'Haresh5'
        },
    ])

  return (
    <View style={styles.container}>
      {data.map((listData,index) => {

        return(
                <View key={listData.id} >
                      <Text style={styles.arraylist}>{listData.id}</Text>
                    <Text style={styles.arraylist}>{listData.name}</Text>
                </View>
        );


      })}
    </View>
  );
}


const styles = StyleSheet.create({

    arraylist:{
        color:"white",
    },

})

export default Array

