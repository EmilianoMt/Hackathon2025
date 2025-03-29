import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const tableData = [
  {
    id: "1",
    nombre: "Presa Juriquilla",
    fecha: "15/12/2024",
    ubicacion: "Juriquilla, Qro.",
  },
  {
    id: "2",
    nombre: "Lago Dolores",
    fecha: "17/11/2024",
    ubicacion: "76220 Santa Rosa Jáuregui, Qro.",
  },
  {
    id: "3",
    nombre: "Presa de Mompani",
    fecha: "15/11/2024",
    ubicacion: "76229 Qro.",
  },
];

const TableComponent = () => {
  return (
    <View className=" ml-6 p-4 bg-[#110D22] w'full h-full rounded-lg">
      {/* Encabezado de la tabla */}
      <View className="flex-row  items-center justify-center  border-b border-[#333333] pb-2 mb-2">
        <Text className="w-1/4 font-bold text-lg text-[#FFFFFF]">Nombre</Text>
        <Text className="w-1/4 font-bold text-lg text-[#FFFFFF]">Fecha</Text>
        <Text className="w-1/4 font-bold text-lg text-[#FFFFFF]">Ubicación</Text>
        <Text className="w-1/4 font-bold text-lgx text-[#FFFFFF]">Acción</Text>
      </View>

      {/* Filas de datos */}
      {tableData.map((item) => (
        <View key={item.id} className="flex-row border-b border-[#333333] py-2">
          <Text className="w-1/4 text-sm pl-3 text-[#FFFFFF]">{item.nombre}</Text>
          <Text className="w-1/4 text-sm pl-3 text-[#FFFFFF]">{item.fecha}</Text>
          <Text className="w-1/4 text-sm pl-3 text-[#FFFFFF]">{item.ubicacion}</Text>
          <TouchableOpacity
            className="w-1/4"
            onPress={() => console.log(`Ver más de ${item.nombre}`)}
          >
            <Text className="text-sm text-[#FFFFFF] underline">Ver más</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default TableComponent;
