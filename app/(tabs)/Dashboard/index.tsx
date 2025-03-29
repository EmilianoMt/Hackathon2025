import React from 'react'
import { View ,Text} from 'react-native'
import Test from '../../../components/Test'
import Carousell from '../../../components/Carousell'
import Headerci from '../../../components/Headerci'
import { Header } from 'react-native/Libraries/NewAppScreen'

const index = () => {
  return (
    <>
    <Headerci pagina={index}/>
    <View className='h-full w-full grid bg-[#110D22]'></View>
    </>
      

    
  )
}

export default index