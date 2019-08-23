import React from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

const StyleButton = ({ 
    onPress, text
}) => (
    <TouchableOpacity
        onPress={onPress}
        style={style.button}
    >
        <Text>{text}</Text>
    </TouchableOpacity>
)

const style = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 20,
      borderStyle: 'solid',
      borderWidth: 1,
    },
})

export default StyleButton