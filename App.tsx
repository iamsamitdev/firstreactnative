import { View, Text } from 'react-native'
import React from 'react'
import MyButton from './components/MyButton'
import styles from './styles/Style'

const App = () => {

  // ตัวแปรสำหรับกำหนด style
  const myTitle = {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  }

  return (
    <View>
      <Text>{ 2+3 }</Text>
      <Text style={{marginVertical:20, textAlign: 'center'}}>Hello React Native</Text>
      <Text style={myTitle}>Welcome</Text>
      <Text style={[styles.container, styles.textTitle]}>Samit</Text>
      <MyButton mytitle="OK" />
      <MyButton mytitle="Cancel" />
    </View>
  )
}


export default App
