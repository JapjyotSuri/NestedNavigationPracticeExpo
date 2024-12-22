import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View>
      <Text>index</Text>
      <Link href='/(stack)/list'><Text>Click here to go to lists</Text></Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})