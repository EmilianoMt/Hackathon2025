import React from 'react'
import { View, Text, Image } from 'react-native'

const Headerci = ({ pagina }) => {
  return (
    <>
        <View className="h-32 w-full bg-[#110D22] flex">
          <Image source={require("../assets/images/icono_hexagono.png")} style={{ width: 40, height: 40 }} />
          <Text className='bg-white w-12 h-12'>{pagina}dn</Text>
        </View>
    
    </>
  )
}

export default Headerci