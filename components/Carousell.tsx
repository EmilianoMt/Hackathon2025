import React, { useState } from "react";
import { View, Dimensions, Image, Text } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");
const carouselHeight = 200;
const imageWidth = width * 0.8;

const images = [
  {
    id: "1",
    uri: "../assets/images/noticia_1.png",
    description: "Microplástico: Un problema ambiental creciente",
  },
  {
    id: "2",
    uri: "../assets/images/noticia_2.png",
    description: "Microplásticos en el agua: Un peligro para la salud",
  },
  {
    id: "3",
    uri: "../assets/images/noticia_3.png",
    description: "Contaminación: Un desafío global",
  },
];

const Carousell = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View
      style={{ width: imageWidth, height: carouselHeight }}
      className="relative justify-center items-center"
    >
      <Carousel
        loop
        width={imageWidth}
        height={carouselHeight}
        data={images}
        onSnapToItem={(index) => setActiveIndex(index)}
        renderItem={({ item }) => (
          <View className="w-full h-full rounded-xl overflow-hidden">
            <Image source={{ uri: item.uri }} className="w-full h-full" />
          </View>
        )}
      />
      {/* Overlay para la descripción e indicador dentro de la imagen */}
      <View className="absolute bottom-2 w-full items-center px-2">
        <Text
          className="text-white text-base text-center mb-2"
          style={{
            textShadowColor: "rgba(0, 0, 0, 0.8)",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 4,
          }}
        >
          {images[activeIndex].description}
        </Text>
        <View className="flex-row">
          {images.map((_, index) => (
            <View
              key={index}
              className="mx-1 rounded-full"
              style={{
                width: 8,
                height: 8,
                backgroundColor:
                  activeIndex === index ? "white" : "rgba(255,255,255,0.5)",
              }}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Carousell;
