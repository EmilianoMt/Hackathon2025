import { Tabs } from "expo-router";
import React from "react";
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useColorScheme } from "@/hooks/useColorScheme";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "white",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: "#110D22",
          borderTopWidth: 0,
          elevation: 5,
          shadowOpacity: 0.1,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="history" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Maps",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="map" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="configuration"
        options={{
          title: "Configuration",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="gear" size={28} color={color} />
          ),
        }}
      />
      {/* Eliminamos uploadForn */}
      <Tabs.Screen
        name="uploadForn"
        options={{
          tabBarButton: () => null, // Ocultar del navbar
          headerShown: false, // También ocultamos la cabecera si aplica
        }}
      />
    </Tabs>
  );
}
