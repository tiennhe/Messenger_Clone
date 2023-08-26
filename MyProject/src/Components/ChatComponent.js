import { StyleSheet, Text, View , SafeAreaView , Image} from 'react-native'
import React from 'react'

const ChatComponent = () => {
  return (
  <SafeAreaView >
    <Text>1234</Text>
    <Image source={require('../Images/chat.png')} style={{ width: 20, height: 20 }} resizeMode="contain" />
  </SafeAreaView>
  )
}

export default ChatComponent

const styles = StyleSheet.create({})