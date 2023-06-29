import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MultiRowColumn = () => {
  return (
    <View style={styles.container}>

      <View style={{flex: 2}}>
        <Image 
        source={require('../assets/images/food1.jpg')} 
        resizeMode='cover' 
        style={{width:'100%', height:'100%'}} />
      </View>

      <View style={{backgroundColor: 'red', flex: 1}}>
        <View style={{flex:1, flexDirection: 'row'}}>
            <Text style={[styles.boxText,{backgroundColor:'green'}]}>ICON 1</Text>
            <Text style={[styles.boxText,{backgroundColor:'blue'}]}>ICON 2</Text>
            <Text style={[styles.boxText,{backgroundColor:'orange'}]}>ICON 3</Text>
        </View>
        <View style={{flex:1, flexDirection: 'row'}}>
            <Text style={[styles.boxText,{backgroundColor:'red'}]}>ICON 4</Text>
            <Text style={[styles.boxText,{backgroundColor:'magenta'}]}>ICON 5</Text>
            <Text style={[styles.boxText,{backgroundColor:'teal'}]}>ICON 6</Text>
        </View>
      </View>

    </View>
  )
}

export default MultiRowColumn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },
    boxText: {
        flex: 1, 
        textAlignVertical:'center',
        textAlign: 'center',
        fontSize1: 20,
        color: 'white',
    }
})