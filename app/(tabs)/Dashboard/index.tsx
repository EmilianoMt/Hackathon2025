import CardReport from "@/components/CardReport";
import Carousell from "@/components/Carousell";
import Header from "@/components/Header";
import ReportsTable from "@/components/ReportTable";
import React from "react";
import { View,Text } from "react-native";

const index = () => {
  return (
    <>
      <Header pagina="Inicio" /> 
      <View className="h-full w-full flex items-center bg-[#110D22]">
        <Text className="flex justify-start text-white text-3xl font-bold mt-5 mb-6">Novedades</Text>
        <Carousell/>
        <CardReport/>
        <ReportsTable/>
      </View>
    </>
  );
};

export default index;
