import React from 'react'
import {
  Text,
  View,
  Image,
} from 'react-native'

import Reseau, {
  formatUriSource,
} from './components/react-native-reseau'

// import mockData from './tests/mock-data-static'

import getMockData from './tests/mock-data'
const mockData = getMockData(5)

const renderRow = (rowData, sectionID, rowID) => (
  <View
    style={{
      width: 64,
      height: 90,
      marginBottom: 6,
      marginLeft: 10,
      marginRight: 10,
    }}
  >
    <Image
      source={formatUriSource(rowData.s)}
      style={{
        width: 64,
        height: 64,
        borderRadius: 10,
      }}
    />
    <Text
      style={{
        paddingTop: 4,
      }}
      ellipsizeMode='tail'
      numberOfLines={1}
    >
      {rowID}-{rowData.t}
    </Text>
  </View>
)

export default function () {
  return (
    <View
      style={{
        // TODO: Use a more graceful way to avoid overlapping content and head
        paddingTop: 20,
        backgroundColor: '#ededed',
      }}
    >
      <Reseau
        data={mockData}
        renderRow={renderRow}
        pageSize={100}
        contentContainerStyle={{
          padding: 18,
        }}
      />
    </View>
  )
}
