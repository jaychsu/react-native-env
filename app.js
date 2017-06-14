import React from 'react'
import { View } from 'react-native'

import Reseau from './components/react-native-reseau'

// import mockData from './tests/mock-data-static'
import getMockData from './tests/mock-data'
const mockData = getMockData(32)

export default function () {
  return (
    <View
      style={{
        // TODO: Use a more graceful way to avoid overlapping content and head
        paddingTop: 20,
        backgroundColor: '#bababa',
      }}
    >
      <Reseau
        data={mockData}
        pageSize={100}
        contentContainerStyle={{
          padding: 18,
        }}
      />
    </View>
  )
}
