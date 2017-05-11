import React from 'react'
import {
  Text,
  View,
} from 'react-native'

import Reseau from './components/react-native-reseau'

export default function () {
  return (
    <View
      style={{
        // TODO: Use a more graceful way to avoid overlapping content and head
        paddingTop: 20
      }}
    >
      <Reseau></Reseau>
    </View>
  )
}
