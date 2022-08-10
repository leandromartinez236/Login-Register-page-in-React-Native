import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const CustomButton = ({ style, onPress, text, type = 'PRIMARY', bgColor, fgColor, icon }) => {
  return (
    <Pressable onPress={onPress} style={[
      style,
      styles.container,
      styles[`container${type}`],
      bgColor ? { backgroundColor: bgColor } : {}
    ]}>
      {icon && <FontAwesomeIcon style={{ position: 'absolute', left: 20, color: fgColor }} icon={icon} />}
      <Text style={[
        styles.text,
        styles[`text${type}`],
        fgColor ? { color: fgColor } : {}
      ]}>{text}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    alignItems: 'center'
  },
  containerPRIMARY: {
    backgroundColor: '#15c76e',
  },
  containerTERTIARY: {
    backgroundColor: ''
  },
  textTERTIARY: {
    color: 'gray'
  },
  text: {
    fontWeight: 'bold',
    color: '#fff'
  }
})
export default CustomButton