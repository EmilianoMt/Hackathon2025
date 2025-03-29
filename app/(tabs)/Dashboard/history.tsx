import Header from '@/components/Header'
import TableComponent from '@/components/Table'
import React from 'react'
import { View, Text } from 'react-native'

const History = () => {
  return (
    <View className="flex-1 bg-[#110D22]">
      <Header pagina="Historial" />
      <View className="ps-5">
        <Text className="text-white text-3xl font-bold mt-5 mb-6">
          Reportes de análisis
        </Text>
      </View>
      <View className="flex-1 content-center">
        <TableComponent />
      </View>
    </View>
  )
}

export default History
