import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '@/components/Navbar'

const profile = () => {
  return (
    <SafeAreaView>
      <Navbar/>
      <View>
        <Text>profile</Text>
      </View>
    </SafeAreaView>
  )
}

export default profile