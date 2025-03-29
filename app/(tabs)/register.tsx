import React from "react";
import {
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import fondo from "../../assets/images/fondo.png";
import { Link } from "expo-router";

export default function RegistrationScreen() {
  return (
    <ImageBackground source={fondo} className="flex-1">
      {/* Overlay semitransparente para mejorar la legibilidad */}
      <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1 justify-center items-center px-5"
        >
          {/* Título ubicado arriba de la card, alineado al inicio (izquierdo) */}
          <View className="w-full mb-4">
            <Text
              style={{
                textShadowColor: "rgba(0, 0, 0, 0.8)",
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 8,
              }}
              className="text-white text-4xl font-bold text-left"
            >
              Por un mundo{"\n"}
              <Text className="text-red-500">mejor</Text>
            </Text>
          </View>

          {/* Card del formulario */}
          <View className="bg-white rounded-xl shadow-lg p-6 w-full">
            {/* Campo: Nombre(s) */}
            <Text className="text-gray-700 font-medium mb-1">Nombre(s)</Text>
            <TextInput
              placeholder="Ingresa tu nombre(s)"
              className="bg-gray-100 p-3 rounded mb-3"
              placeholderTextColor="#666"
            />

            {/* Campo: Apellido(s) */}
            <Text className="text-gray-700 font-medium mb-1">Apellido(s)</Text>
            <TextInput
              placeholder="Ingresa tu apellido(s)"
              className="bg-gray-100 p-3 rounded mb-3"
              placeholderTextColor="#666"
            />

            {/* Campo: Correo electrónico */}
            <Text className="text-gray-700 font-medium mb-1">
              Correo electrónico
            </Text>
            <TextInput
              placeholder="Ingresa tu correo electrónico"
              keyboardType="email-address"
              autoCapitalize="none"
              className="bg-gray-100 p-3 rounded mb-3"
              placeholderTextColor="#666"
            />

            {/* Campo: Contraseña */}
            <Text className="text-gray-700 font-medium mb-1">Contraseña</Text>
            <TextInput
              placeholder="Ingresa tu contraseña"
              secureTextEntry
              className="bg-gray-100 p-3 rounded mb-3"
              placeholderTextColor="#666"
            />

            {/* Campo: Confirmar contraseña */}
            <Text className="text-gray-700 font-medium mb-1">
              Confirmar contraseña
            </Text>
            <TextInput
              placeholder="Confirma tu contraseña"
              secureTextEntry
              className="bg-gray-100 p-3 rounded mb-4"
              placeholderTextColor="#666"
            />

            {/* Botón de Registro */}
            <TouchableOpacity className="bg-purple-600 py-3 rounded">
              <Text className="text-white text-lg font-semibold text-center">
                Regístrate
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

        {/* Enlace inferior para navegar al login */}
        <View className="absolute bottom-10 w-full px-5">
          <Link href={"/"} asChild>
            <TouchableOpacity>
              <Text className="text-white text-center text-base underline">
                ¿Ya tienes cuenta? Inicia sesión
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      <StatusBar barStyle="light-content" />
    </ImageBackground>
  );
}
