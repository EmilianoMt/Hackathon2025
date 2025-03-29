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
        <View className="flex-1 justify-center items-center px-5 h-12">
      <Text
              style={{
                textShadowColor: "rgba(0, 0, 0, 0.1)",
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 8,
              }}
              className="text-left text-4xl font-bold text-white h-12"
            >
              Por un mundo{"\n"}
              <Text className="text-red-500">mejor</Text>
            </Text>
            </View>
        
        {/* Card centrada de registro */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-col justify-center items-center px-5 mb-32"
        >
          <View className="bg-white h-[25rem] flex flex-col justify-around rounded-xl shadow-lg p-6 w-full mb">
            {/* Título con efecto de sombra */}
            

            {/* Campos del formulario */}
            <TextInput
              placeholder="Nombre(s)"
              className="bg-gray-100 p-3 rounded mb-3"
              placeholderTextColor="#666"
            />
            <TextInput
              placeholder="Apellido(s)"
              className="bg-gray-100 p-3 rounded mb-3"
              placeholderTextColor="#666"
            />
            <TextInput
              placeholder="Correo electrónico"
              keyboardType="email-address"
              autoCapitalize="none"
              className="bg-gray-100 p-3 rounded mb-3"
              placeholderTextColor="#666"
            />
            <TextInput
              placeholder="Contraseña"
              secureTextEntry
              className="bg-gray-100 p-3 rounded mb-3"
              placeholderTextColor="#666"
            />
            <TextInput
              placeholder="Confirmar contraseña"
              secureTextEntry
              className="bg-gray-100 p-3 rounded mb-4"
              placeholderTextColor="#666"
            />

            </View>
            <TouchableOpacity className="bg-[#2C0A71] py-3 rounded mt-4 w-full">
              <Text className="text-white text-lg font-semibold text-center">
                Registrate
              </Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
        
          
        {/* Enlace inferior para navegar a Login */}
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
