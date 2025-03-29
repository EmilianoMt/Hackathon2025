import React from "react";
import { View, Text, Image } from "react-native";

type HeaderProps = {
  pagina: string; // Define el tipo de la propiedad 'pagina'
};

const Header: React.FC<HeaderProps> = ({ pagina }) => {
  return (
    <View className="h-32 w-full bg-[#110D22] flex flex-row items-center">
      <View className="absolute left-5">
        <Image
          source={require("../assets/images/icono_hexagono.png")}
          style={{ width: 40, height: 40 }}
        />
      </View>

      <Text className="text-white text-3xl font-bold mx-auto">{pagina}</Text>
    </View>
  );
};

export default Header;
