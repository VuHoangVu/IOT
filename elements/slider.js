import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import React, {useState} from 'react'
import { Slider } from 'react-native-elements'

function slider(props) {

    const [value, setValue] = useState(0)

    return (
        <View style={styles.sliderObject}>
            <View style={styles.headSlider}>
                <Text style={styles.title}>
                    {props.iconSlider} {Math.floor(value)}
                </Text>
                <Text style={styles.title}>
                    {props.donVi}
                </Text>
            </View>
            <Slider
                style={styles.slider}
                minimumValue= {props.minValue}
                maximumValue= {props.maxValue}
                thumbTintColor= '#aadff7'
                thumbStyle= {{height: 20, width: 20, backgroundColor: '#aadff7'}}
                minimumTrackTintColor= '#aadff7'
                maximumTrackTintColor= 'gray'
                onValueChange={(value) => setValue(Math.floor(value))}
            />
        </View>
    )
}
export default slider

const styles = StyleSheet.create({
    sliderObject: {
        width: '90%',
        height: '25%',
        margin: 5,
        alignItems: 'center',

    },
    headSlider: {
        flexDirection: 'row',
    },
    title:{
        fontSize: 18,
        color: '#aadff7',
    },
    slider:{
        width: '100%',
    },
})