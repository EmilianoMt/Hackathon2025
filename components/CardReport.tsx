import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const CardReport = () => {
  return (
    <LinearGradient
      colors={["#7F00FF", "#0077FF"]}
      className="mt-7 w-96 h-60 flex-row items-center p-5 rounded-md" // Cambié rounded-full a rounded-2xl
    >
      {/* Columna izquierda: Texto y botón */}
      <View className="flex-1">
        <Text className="text-white text-2xl font-bold">
          Inicie un nuevo{"\n"}análisis
        </Text>
        <TouchableOpacity className="bg-[#0F134E] py-2 px-3 rounded-full flex-row items-center mt-4">
          <Text className="text-white font-semibold mr-2">Llévame</Text>
          <Ionicons name="arrow-forward" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Columna derecha: Imagen */}
      <View className="flex-1 items-center">
        <Image
          source={require("../assets/images/icono_hexagono.png")}
          className="w-40 h-40"
          resizeMode="contain"
        />
      </View>
    </LinearGradient>
  );
};

export default CardReport;
