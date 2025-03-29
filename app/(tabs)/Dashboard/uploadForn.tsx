import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Header from "@/components/Header";

const uploadForn = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = async () => {
    if (!selectedImage) {
      alert("Por favor selecciona una imagen.");
      return;
    }
  
    try {
      // Obtén los datos de la imagen como Blob
      const response = await fetch(selectedImage);
      const blob = await response.blob();
  
      // Construye el formulario FormData
      const formData = new FormData();
      formData.append("title", "Imagen subida");
      formData.append("ubicacion", "Queretaro");
      formData.append("userId", "648c0f3a4b1e2d3f8c5e4b1e");
      formData.append("file", {
        uri: selectedImage, // URI de la imagen seleccionada
        name: "image.jpg", // Nombre del archivo
        type: blob.type || "image/jpeg", // Tipo MIME
      });
  
      // Realiza la solicitud POST
      const uploadResponse = await fetch(
        "http://148.220.60.103:4000/api/reports/report",
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          method: "POST",
          body: formData,
        }
      );
  
      if (!uploadResponse.ok) {
        const errorData = await uploadResponse.json();
        console.error("Error subiendo imagen:", errorData);
        alert("Error subiendo imagen: " + errorData.message);
        return;
      }
  
      const data = await uploadResponse.json();
      console.log("Imagen subida:", data);
      alert("Imagen subida exitosamente");
    } catch (error) {
      console.error("Error al subir imagen:", error);
      alert("Error al subir imagen.");
    }
  };

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert("Se necesitan permisos para acceder a la galería.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri); // Guarda la URI de la imagen seleccionada
    }
  };

  return (
    <>
      <View className="bg-[#110D22] h-screen">
        <Header pagina="Subir Foto" />
        <View className="flex flex-col items-center justify-start h-full">
          {/* Input para subir imágenes */}
          <TouchableOpacity
            onPress={pickImage}
            className="bg-white h-80 w-[27rem] my-5 rounded-[10px] flex items-center justify-center"
          >
            {selectedImage ? (
              <Image
                source={{ uri: selectedImage }}
                style={{ width: 150, height: 150, borderRadius: 10 }}
                resizeMode="contain"
              />
            ) : (
              <Text className="text-gray-500 text-lg font-bold">
                Seleccionar Imagen
              </Text>
            )}
          </TouchableOpacity>

          <View className="h-auto w-[27rem] flex flex-row justify-around items-center">
            <TouchableOpacity className="bg-[#2C0A71] h-12 w-52 rounded-full items-center justify-center flex">
              <Text className="text-white text-lg font-bold">Subir Foto</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#2C0A71] h-12 w-52 rounded-full items-center justify-center flex">
              <Text className="text-white text-lg font-bold">Cancelar</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={handleImageUpload}
            className="bg-[#2C0A71] h-12 w-[27rem] rounded-full items-center justify-center flex mt-5"
          >
            <Text className="text-white text-lg font-bold">Analizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default uploadForn;
