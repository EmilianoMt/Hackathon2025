import React, { useState } from "react";
import {
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Alert,
} from "react-native";
import fondo from "../../assets/images/fondo.png";
import { Link, useRouter } from "expo-router";

export default function Initial() {
  const [showForm, setShowForm] = useState(false);
  // Estados para los campos del login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const router = useRouter();

  // Función para realizar el POST al login
  const handleLogin = async () => {
    try {
      const response = await fetch("http://148.220.60.103:4000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
      });
      console.log("Response:", response);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error al iniciar sesión:", errorData);
        Alert.alert("Error", errorData.message || "Error al iniciar sesión");
        return;
      }

      const data = await response.json();
      console.log("Login exitoso:", data);
      Alert.alert("Éxito", "Inicio de sesión exitoso", [
        { text: "OK", onPress: () => router.push("/Dashboard") },
      ]);
    } catch (error) {
      console.error("Error en login:", error);
      Alert.alert("Error", "No se pudo iniciar sesión");
    }
  };

  return (
    <ImageBackground source={fondo} className="flex-1">
      <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <View className="flex-1 justify-center items-center px-5 mb-40">
          <Text
            style={{
              textShadowColor: "rgba(0, 0, 0, 0.8)",
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 8,
            }}
            className={`${
              showForm
                ? "text-white text-5xl font-bold text-right w-full mb-[13rem]"
                : "text-white text-5xl font-bold text-right w-full"
            }`}
          >
            Por un mundo{"\n"}
            <Text className="text-red-500">mejor</Text>
          </Text>
        </View>

        {showForm ? (
          <View className="absolute bottom-10 w-full px-5 mb-32">
            <View className="bg-white rounded-xl shadow-lg p-6 my-8">
              <Text className="text-center text-lg font-bold text-gray-800 mb-4">
                ¡Te damos la bienvenida!
              </Text>

              <TextInput
                placeholder="mail-ejemplo@correo.com"
                value={loginEmail}
                onChangeText={setLoginEmail}
                className="bg-gray-100 p-3 rounded mb-4"
                placeholderTextColor="#666"
              />

              <TextInput
                placeholder="*********"
                secureTextEntry
                value={loginPassword}
                onChangeText={setLoginPassword}
                className="bg-gray-100 p-3 rounded"
                placeholderTextColor="#666"
              />

              <TouchableOpacity className="flex items-end justify-center">
                <Text className="text-blue-600 underline text-[.8rem]">
                  ¿Olvidaste tu contraseña?
                </Text>
              </TouchableOpacity>
            </View>
            {/* Botón para realizar el login */}
            <TouchableOpacity
              onPress={handleLogin}
              className="bg-[#2C0A71] py-3 rounded w-full"
            >
              <Text className="text-white text-lg font-semibold text-center">
                Iniciar sesión
              </Text>
            </TouchableOpacity>
            <Link href={"/register"} asChild>
              <TouchableOpacity className="mt-1">
                <Text className="text-white text-base text-[.8rem] underline text-center">
                  ¿Sin cuenta? Regístrate
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        ) : (
          <View className="absolute bottom-10 w-full px-5">
            <TouchableOpacity
              onPress={() => setShowForm(true)}
              className="bg-[#2C0A71] py-3 rounded w-full"
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
