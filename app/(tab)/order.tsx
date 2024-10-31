import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '@/components/Navbar'

const order = () => {
  return (
    <SafeAreaView>
      <Navbar/>
      <View>
        <Text>order</Text>
      </View>
    </SafeAreaView>
  )
}

export default order