import { Button, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { ScreenType } from '../constants/constants'

const AddNoteScreen = ({onSave, onExit}) => {
  const [enteredText, setEnteredText] = useState("")
  const handleChange = (val) => {
    setEnteredText(val)
  }
  const handleClick = () => {
    if(enteredText.trim().length > 0) {
      onSave(enteredText)
      alert("New note has been added")
      setEnteredText("")
    }
    console.log(enteredText)
  }
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Add New Note</Text>
        <TextInput placeholder="Please enter text" value={enteredText} onChangeText={handleChange} style={styles.input}/>
        <Button disabled={enteredText.trim().length === 0} onPress={handleClick} title="Add" />
      </View>
    </View>
  )
}

export default AddNoteScreen

const styles = StyleSheet.create({
  container: {
        flex: 1,
    },
    formContainer: {
      backgroundColor: "#f5f5f5",
      padding: 10,
      margin: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold"
    },
    input: {
      marginVertical: 20,
      width: "100%",
      borderBottomWidth: 2,
      fontSize: 16,
      padding: 10,
    }

})