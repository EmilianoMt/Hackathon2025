import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

const SettingsScreen = () => {
  const [accountExpanded, setAccountExpanded] = useState(false);
  const [notificationExpanded, setNotificationExpanded] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const toggleAccount = () => setAccountExpanded((prev) => !prev);
  const toggleNotification = () => setNotificationExpanded((prev) => !prev);
  const toggleSwitch = () => setNotificationsEnabled((prev) => !prev);

  return (
    <View className="flex-1 bg-gray-900 p-4">
      <View className="mb-4">
        <Link href="/Dashboard" asChild>
          <TouchableOpacity onPress={() => console.log("Back pressed")}>
            <Ionicons name="arrow-back" size={40} color="#fff" />
          </TouchableOpacity>
        </Link>
        <Text className="text-white text-5xl mt-10 ms-10 font-bold mt-2">
          Ajustes
        </Text>
      </View>

      <View className="flex-1 justify-end">
        <View
          className="bg-white rounded-t-3xl p-4 shadow"
          style={{ height: "80%" }}
        >
          <Text className="text-gray-500 text-sm mb-2">GENERAL</Text>

          {/* Menú Desplegable: Cuenta */}
          <TouchableOpacity
            onPress={toggleAccount}
            className="flex-row justify-between items-center py-3 border-b border-gray-200"
          >
            <View className="flex-row items-center">
              <Ionicons name="person-outline" size={24} color="#333" />
              <Text className="text-gray-800 text-lg ml-4">Cuenta</Text>
            </View>
            <Ionicons
              name={accountExpanded ? "chevron-up" : "chevron-down"}
              size={24}
              color="#A0A0A0"
            />
          </TouchableOpacity>
          {accountExpanded && (
            <View className="pl-12 border-b border-gray-200 py-3">
              <TouchableOpacity
                onPress={() => console.log("Cambiar correo pressed")}
                className="py-2"
              >
                <Text className="text-gray-800 text-lg">Cambiar correo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log("Cambiar contraseña pressed")}
                className="py-2"
              >
                <Text className="text-gray-800 text-lg">
                  Cambiar contraseña
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Menú Desplegable: Notificaciones */}
          <TouchableOpacity
            onPress={toggleNotification}
            className="flex-row justify-between items-center py-3 border-b border-gray-200"
          >
            <View className="flex-row items-center">
              <Ionicons name="notifications-outline" size={24} color="#333" />
              <Text className="text-gray-800 text-lg ml-4">Notificaciones</Text>
            </View>
            <Ionicons
              name={notificationExpanded ? "chevron-up" : "chevron-down"}
              size={24}
              color="#A0A0A0"
            />
          </TouchableOpacity>
          {notificationExpanded && (
            <View className="pl-12 border-b border-gray-200 py-3">
              <View className="flex-row justify-between items-center">
                <Text className="text-gray-800 text-lg">
                  Activar notificaciones
                </Text>
                <Switch
                  trackColor={{ false: "black", true: "black" }}
                  thumbColor={notificationsEnabled ? "red" : "white"}
                  onValueChange={toggleSwitch}
                  value={notificationsEnabled}
                />
              </View>
            </View>
          )}

          {/* Opción: Cerrar Sesión */}
          <Link href={"/"} asChild>
            <TouchableOpacity className="flex-row justify-between items-center py-3">
              <View className="flex-row items-center">
                <Ionicons name="log-out-outline" size={24} color="#333" />
                <Text className="text-gray-800 text-lg ml-4">
                  Cerrar Sesión
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#A0A0A0" />
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;
