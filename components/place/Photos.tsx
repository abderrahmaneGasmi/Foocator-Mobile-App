import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
const resimages = [
  require("../../assets/menuItems/resturant1.png"),
  require("../../assets/menuItems/resturant2.png"),
  require("../../assets/menuItems/resturant3.png"),
  require("../../assets/menuItems/resturant4.png"),
  require("../../assets/menuItems/resturant5.png"),
];
export default function Photos() {
  return (
    <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        {resimages.map((item, index) => (
          <Image
            source={item}
            style={{
              width: "31%",
              height: 180,
              borderRadius: 10,
              resizeMode: "cover",
              marginBottom: 10,
            }}
            key={index}
          />
        ))}
        {resimages.map((item, index) => (
          <Image
            source={item}
            style={{
              width: "31%",
              height: 180,
              borderRadius: 10,
              resizeMode: "cover",
              marginBottom: 10,
            }}
            key={index}
          />
        ))}
      </View>
    </ScrollView>
  );
}
