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
        style={style}
    >
        <Text>{text}</Text>
    </TouchableOpacity>
)

const style = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 20
    },
})

export default StyleButton