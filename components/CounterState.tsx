import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const CounterState = () => {
    //   let count = 0
    const [count, setCount] = useState(0)
  return (
    <View>
      <Button title="Count down" onPress={ () => 
        {
            setCount(count - 1)
            console.log(count)
        }
       }/>
      <Text style={{fontSize:30, textAlign:'center'}}>You clicked { count } times</Text>
      <Button title="Count up" onPress={ () => 
        {
            setCount(count + 1)
            console.log(count)
        }
       }/>
    </View>
  )
}

export default CounterState