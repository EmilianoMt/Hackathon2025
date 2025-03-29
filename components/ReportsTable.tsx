import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const reportData = [
  { id: "1", title: "Agua El Salitre", date: "15/12/2023" },
  { id: "2", title: "Muestra Juriquilla", date: "15/12/2023" },
  { id: "3", title: "Muestra Juriquilla", date: "15/12/2023" },
  { id: "4", title: "Muestra Juriquilla", date: "15/12/2023" },
  { id: "5", title: "Muestra Juriquilla", date: "15/12/2023" },
];

const ReportTable = () => {
  return (
    <>
      <View className="flex-row justify-between items-center mb-4 gap-8">
        <Text className="text-white text-lg font-bold">Últimos reportes</Text>
        <TouchableOpacity onPress={() => console.log("Ver más pressed")}>
          <Text className="text-white underline">Ver más</Text>
        </TouchableOpacity>
      </View>
      <View className="bg-gray-900 p-4 rounded-lg w-full mt-4">
        {/* Lista de reportes */}
        {reportData.map((report) => (
          <TouchableOpacity
            key={report.id}
            onPress={() => console.log("Report clicked:", report.title)}
            className="flex-row justify-between items-center border-b border-gray-700 py-2"
          >
            <View>
              <Text className="text-white text-base">{report.title}</Text>
              <Text className="text-gray-400 text-xs">{report.date}</Text>
            </View>
            {/* Indicador - reemplázalo con un ícono si lo prefieres */}
            <Text className="text-gray-400 text-lg">{">"}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default ReportTable;
