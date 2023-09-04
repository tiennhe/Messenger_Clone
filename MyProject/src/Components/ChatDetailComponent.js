import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ChatDetailComponent = ({ route  , navigation}) => {

    const receivedData = route.params;
  return (
    <View>
     <TouchableOpacity onPress={()=>navigation.navigate('Đoạn Chat')}>
      <Text>Press Me</Text>
     </TouchableOpacity>

     <Text>ok:{receivedData.name}</Text>
     
    </View>
  )
}

export default ChatDetailComponent

const styles = StyleSheet.create({})