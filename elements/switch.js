import React, { useState } from 'react'
import { 
  View,
  Text,
  StyleSheet,
  Switch,
} from 'react-native'

function switchBotton (props) {
  const [isEnabled, setIsEnabled] = useState(false)
  const [switchValue, setSwitchValue] = useState(false)
  const toggleSwitch = (value) => {
      setSwitchValue(value)
  }
  return (
    <View style={styles.switchObject}>
      <Text style={styles.switchText}> {props.name} </Text>
        <Switch
            onValueChange={toggleSwitch}
            value={switchValue}
            trackColor={{false: 'gray', true: '#aadff7'}}
            thumbColor={isEnabled ? 'white' : '#aadff7'}
        />
    </View>
  )
}
export default switchBotton

const styles = StyleSheet.create({
  switchObject: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchText: {
      fontSize: 14,
  },
})