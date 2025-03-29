import React, { useState } from "react";
import {
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import fondo from "../../assets/images/fondo.png";
import { Link, useRouter } from "expo-router";

export default function RegistrationScreen() {
  // Estados para los campos del formulario
  const [name, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  // Función para manejar el registro
  const handleRegister = async () => {
    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await fetch("http://148.220.60.103:4000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, lastName, email, password }),
      });
      
      console.log("Response:", response);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error registrando usuario:", errorData);
        Alert.alert("Error", errorData.message || "Error registrando usuario");
        return;
      }

      const data = await response.json();
      console.log("Usuario registrado:", data);
      // Al mostrar la alerta de éxito, aprovechamos el botón OK para redirigir
      Alert.alert("Éxito", "Usuario registrado exitosamente", [
        { text: "OK", onPress: () => router.push("/") },
      ]);
      // También podrías limpiar el formulario o redirigir inmediatamente
      // router.push("/") 
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      Alert.alert("Error", "No se pudo registrar el usuario.");
    }
  };

  return (
    <ImageBackground source={fondo} className="flex-1">
      {/* Overlay semitransparente para mejorar la legibilidad */}
      <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1 justify-center items-center px-5"
        >
          {/* Título ubicado arriba de la card, alineado al inicio */}
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
              value={name}
              onChangeText={setFirstName}
              className="bg-gray-100 p-3 rounded mb-3"
              placeholderTextColor="#666"
            />

            {/* Campo: Apellido(s) */}
            <Text className="text-gray-700 font-medium mb-1">Apellido(s)</Text>
            <TextInput
              placeholder="Ingresa tu apellido(s)"
              value={lastName}
              onChangeText={setLastName}
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
              value={email}
              onChangeText={setEmail}
              className="bg-gray-100 p-3 rounded mb-3"
              placeholderTextColor="#666"
            />

            {/* Campo: Contraseña */}
            <Text className="text-gray-700 font-medium mb-1">Contraseña</Text>
            <TextInput
              placeholder="Ingresa tu contraseña"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
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
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              className="bg-gray-100 p-3 rounded mb-4"
              placeholderTextColor="#666"
            />

            {/* Botón de Registro */}
            <TouchableOpacity
              onPress={handleRegister}
              className="bg-purple-600 py-3 rounded"
            >
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
