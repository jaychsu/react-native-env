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
        // A hacking to make this view could be fullscreen
        flex: 1,
        width: null, // remove width and height to override fixed static size
        height: null,

        paddingTop: 20, // TODO: Use a more graceful way to avoid overlapping content and head
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
