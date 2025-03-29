import Header from "@/components/Header";
import TableComponent from "@/components/Table";
import { Link } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

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
      <Link href={'/Dashboard/uploadForn'} asChild>
        <TouchableOpacity className="bg-[#000000] h-20 w-[18rem] absolute bottom-0 mb-10 ml-28 content-center rounded-full mx-auto">
          <Text className="text-white text-center text-lg font-bold pt-5">
            Historial
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default History;
