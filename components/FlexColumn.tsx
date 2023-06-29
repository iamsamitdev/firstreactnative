import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexColumn = () => {

    const items = [
        'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten','One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'
    ]

  return (
    <ScrollView>
        <View style={styles.container}>
            {
                items.map((item, index) => {
                    return (
                        <Text key={index} style={styles.item}>{item}</Text>
                    )
                })
            }
        </View>
    </ScrollView>
  )
}

export default FlexColumn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    item: {
        height: 50,
        padding: 10,
        margin: 10,
        backgroundColor: 'lightblue',
    }
})