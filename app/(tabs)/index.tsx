import React, { useState } from "react";
import {
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";

// Importa la imagen desde la carpeta assets.
import fondo from "../../assets/images/fondo.png";
import { Link } from "expo-router";

export default function Initial() {
  const [showForm, setShowForm] = useState(false);

  return (
    <ImageBackground source={fondo} className="flex-1">
      <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <View className="flex-1 justify-center items-center px-5">
          <Text
            style={{
              textShadowColor: "rgba(0, 0, 0, 0.8)",
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 8,
            }}
            className="text-white text-5xl font-bold text-right w-full mb-10"
          >
            Por un mundo{"\n"}
            <Text className="text-red-500">mejor</Text>
          </Text>
        </View>

        {showForm ? (
          <View className="absolute bottom-10 w-full px-5">
            <View className="bg-white rounded-xl shadow-lg p-6">
              <Text className="text-center text-lg font-bold text-gray-800 mb-4">
                ¡Te damos la bienvenida!
              </Text>

              <TextInput
                placeholder="mail-ejemplo@correo.com"
                className="bg-gray-100 p-3 rounded mb-4"
              />

              <TextInput
                placeholder="*********"
                secureTextEntry
                className="bg-gray-100 p-3 rounded mb-4"
              />

              <TouchableOpacity className="bg-purple-600 py-3 rounded mb-4">
                <Text className="text-white text-lg font-semibold text-center">
                  Iniciar sesión
                </Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text className="text-center text-blue-600 underline">
                  ¿Olvidaste tu contraseña?
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity className="mt-4">
              <Text className="text-white text-base underline text-center">
                ¿Sin cuenta? Regístrate
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View className="absolute bottom-10 w-full px-5">
            <TouchableOpacity
              onPress={() => setShowForm(true)}
              className="bg-purple-600 py-3 rounded w-full"
            >
              <Text className="text-white text-lg font-semibold text-center">
                Iniciar sesión
              </Text>
            </TouchableOpacity>

            <Link href={"/register"} asChild>
              <TouchableOpacity className="mt-4">
                <Text className="text-white text-base underline text-center">
                  ¿Sin cuenta? Regístrate
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        )}
      </View>

      <StatusBar barStyle="light-content" />
    </ImageBackground>
  );
}
