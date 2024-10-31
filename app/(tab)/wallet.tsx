import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '@/components/Navbar'

const wallet = () => {
  return (
    <SafeAreaView>
      <Navbar/>
      <View>
        <Text>wallet</Text>
      </View>
    </SafeAreaView>
  )
}

export default wallet