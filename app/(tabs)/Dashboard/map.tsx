import Header from "@/components/Header";
import MicroplasticsMap from "@/components/Map";
import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const Map = () => {
  return (
    <View className="flex-1 bg-[#110D22]">
      <Header pagina="Resultados" />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="ps-5">
          <Text className="text-white text-3xl font-bold mt-5 mb-6">
            Foto de muestra
          </Text>
        </View>
        {/* Contenedor de la imagen */}
        <View className="items-center">
          <Image
            source={require('@/assets/images/fondo.png')}
            style={{
              width: "90%",
              height: 400,
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 10,
            }}
          />
        </View>
        <View className="items-center mt-5">
          <View
            style={{
              width: "90%",
              height: 300,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <MicroplasticsMap />
          </View>
        </View>
        <View className="items-center mt-5">
          <Text className="text-white text-3xl font-bold mb-6">
            Resultados
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Map;
