import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ListItem = ({note}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>{note}</Text>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
    listItem: {
          borderWidth: 4,
          borderColor: "purple",
          padding: 10,
          borderRadius: 5,
          backgroundColor: "pink",
          marginTop: 10,
          shadowOffset: {width: 4, height: 6},
          shadowColor: "pink",
          shadowOpacity: 0.3,
          shadowRadius: 4
      },
      text: {
          fontSize: 20,
          fontWeight: 400,
          color: '#232323'
      }
  })