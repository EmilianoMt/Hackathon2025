import React, { useState } from "react";
import { View, Dimensions, Image, Text } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");
const carouselHeight = 200;
const imageWidth = width * 0.8;

// Define las imágenes de forma estática con require
const images = [
  {
    id: "1",
    source: require("../assets/images/noticia_1.png"),
    description: "Microplástico: Un problema ambiental creciente",
  },
  {
    id: "2",
    source: require("../assets/images/noticia_2.png"),
    description: "Microplásticos en el agua: Un peligro para la salud",
  },
  {
    id: "3",
    source: require("../assets/images/noticia_3.png"),
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
            <Image source={item.source} className="w-full h-full" />
          </View>
        )}
      />

      {/* Overlay para la descripción e indicador dentro de la imagen */}
      <View className="absolute bottom-2 w-full items-center px-2">
        {/* Contenedor con fondo negro para la descripción */}
        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 5,
          }}
          className="mb-2"
        >
          <Text className="text-white text-base text-center">
            {images[activeIndex].description}
          </Text>
        </View>
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
