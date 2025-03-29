import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Datos de marcadores de ejemplo (usa coordenadas de México CDMX para el demo)
const markers = [
  { id: '1', title: 'Corea', latitude: 19.432608, longitude: -99.133209, level: 'high' },
  { id: '2', title: 'Puerto de Aguirre', latitude: 19.442608, longitude: -99.123209, level: 'medium' },
  { id: '3', title: 'Pintillo', latitude: 19.422608, longitude: -99.143209, level: 'low' },
  { id: '4', title: 'Santa Catarina', latitude: 19.432608, longitude: -99.153209, level: 'high' },
  { id: '5', title: 'Valentina & Piedra', latitude: 19.412608, longitude: -99.133209, level: 'medium' },
  { id: '6', title: 'Rancho el Risco', latitude: 19.432608, longitude: -99.113209, level: 'low' },
];

// Función para determinar el color del pin según el nivel
const getPinColor = (level: any) => {
  switch (level) {
    case 'high':
      return '#FF0000'; // rojo para alto nivel de microplásticos
    case 'medium':
      return '#FFFF00'; // amarillo para nivel medio
    case 'low':
      return '#00FF00'; // verde para bajo nivel
    default:
      return '#0000FF';
  }
};

const MicroplasticsMap = () => {
  return (
    <View className="flex-1">
      {/* Título centrado */}
      <Text className="text-center text-white text-3xl font-bold my-4">
        Mapa de microplásticos
      </Text>
      
      {/* Mapa que ocupa todo el espacio restante */}
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 19.432608,
          longitude: -99.133209,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
            pinColor={getPinColor(marker.level)}
          />
        ))}
      </MapView>
    </View>
  );
};

export default MicroplasticsMap;
