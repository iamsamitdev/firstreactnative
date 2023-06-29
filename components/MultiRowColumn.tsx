import { StyleSheet,TouchableOpacity, Text, View, Animated } from 'react-native'
import React, { useState } from 'react'
import Sound from 'react-native-sound'

const MultiRowColumn = () => {

    // create a state variable to store the image index
    const [imageIndex, setImageIndex] = useState(0);

    // create a function to handle image fade
    // const [fadeAnimation] = useState(new Animated.Value(0.9)); // Initial opacity is 1 (fully opaque)

    // create a function to handle image zoom
    const [zoomAnimation] = useState(new Animated.Value(1)); // Initial scale is 1 (no zoom)

    // create an array of images
    const images = [
        require('../assets/images/food.jpg'),
        require('../assets/images/drink.jpg'),
        require('../assets/images/bakery.jpg'),
        require('../assets/images/icecream.jpeg'),
        require('../assets/images/wine.jpg'),
        require('../assets/images/dessert.webp')
    ];

    const soundFile = new Sound('click.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('Error loading sound:', error);
        }
    });
      

    // create a function to handle button click
    const handleButtonClick = (index: any) => {

        setImageIndex(index);

        // fadeAnimation.setValue(0.5); // Reset opacity

        // Start the animation
        // Animated.timing(fadeAnimation, {
        //     toValue: 1, // Fade out to 0 opacity
        //     duration: 1000, // Animation duration in milliseconds
        //     useNativeDriver: true, // Enable native driver for better performance
        // }).start();

        // Start the animation
        Animated.sequence([
            Animated.timing(zoomAnimation, {
              toValue: 1.2, // Zoom in to 1.2 scale
              duration: 500, // Animation duration in milliseconds
              useNativeDriver: true, // Enable native driver for better performance
            }),
            Animated.timing(zoomAnimation, {
              toValue: 1, // Zoom out to 1 scale
              duration: 500, // Animation duration in milliseconds
              useNativeDriver: true, // Enable native driver for better performance
            }),
        ]).start()


        // play sound
        soundFile.play((success) => {
            if (success) {
              console.log('Sound played successfully');
            } else {
              console.log('Sound playback failed');
            }
        })
    }


  return (
    <View style={styles.container}>

      <View style={{flex: 3}}>

        {/* <Image 
        source={images[imageIndex]}
        resizeMode='cover' 
        style={{width:'100%', height:'100%'}} /> */}

        {/* <Animated.Image
        source={images[imageIndex]}
        resizeMode='cover'
        style={{
            width:'100%',
            height:'100%',
            opacity: fadeAnimation, // Bind opacity to animated value
        }}
        /> */}

        <Animated.Image
        source={images[imageIndex]}
        resizeMode='cover'
        style={{
            width:'100%',
            height:'100%',
            transform: [{scale: zoomAnimation}], // Bind opacity to animated value
        }}
        />

      </View>

      <View style={{flex: 1}}>
        <View style={{flex:1, flexDirection: 'row'}}>
            <TouchableOpacity style={{flex: 1}} onPress={()=>handleButtonClick(0)}>
                <Text style={[styles.boxText,{backgroundColor:'orange'}]}>Food</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1}} onPress={()=>handleButtonClick(1)}>
                <Text style={[styles.boxText,{backgroundColor:'green'}]}>Drink</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1}} onPress={()=>handleButtonClick(2)}>
                <Text style={[styles.boxText,{backgroundColor:'blue'}]}>Bakery</Text>
            </TouchableOpacity>
        </View>
        <View style={{flex:1, flexDirection: 'row'}}>
            <TouchableOpacity style={{flex: 1}} onPress={()=>handleButtonClick(3)}>
                <Text style={[styles.boxText,{backgroundColor:'red'}]}>Icecream</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1}} onPress={()=>handleButtonClick(4)}>
                <Text style={[styles.boxText,{backgroundColor:'magenta'}]}>Wine</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1}} onPress={()=>handleButtonClick(5)}>
                <Text style={[styles.boxText,{backgroundColor:'teal'}]}>Dessert</Text>
            </TouchableOpacity>
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
        fontSize: 20,
        color: 'white',
    }
})