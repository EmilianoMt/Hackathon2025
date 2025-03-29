import React from 'react';
import { View, Dimensions, Image, Text } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

// Obtén el ancho de la pantalla para hacer el carrusel responsive
const { width } = Dimensions.get('window');

const images = [
  { id: '1', uri: '../assets/images/noticia_1.png' },
  { id: '2', uri: '../assets/images/noticia_2.png' },
  { id: '3', uri: '../assets/images/noticia_3.png' },
];

const Carousell = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Carousel
        loop
        width={width}
        height={200}
        data={images}
        renderItem={({ item }) => (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{ uri: item.uri }} style={{ width: width * 0.8, height: 200, borderRadius: 10 }} />
            <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 16 }}>Image {item.id}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Carousell;

