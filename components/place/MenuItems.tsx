import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { typography } from "../../Constants/typography";
import { colors } from "../../Constants/Colors";

export default function MenuItems({
  image,
  name,
  price,
  discount,
}: {
  image: ImageSourcePropType;
  name: string;
  price: number;
  discount: number;
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightgray,
        paddingVertical: 10,
      }}
    >
      <Image
        source={image}
        style={{
          width: 130,
          height: 130,
          borderRadius: 10,
          resizeMode: "cover",
        }}
      />
      <View
        style={{
          flexDirection: "column",
          flexGrow: 2,
          justifyContent: "center",
          gap: 10,
        }}
      >
        <Text style={{ fontSize: typography.medium, fontWeight: "bold" }}>
          {name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text style={{ fontSize: typography.medium, color: colors.darkgray }}>
            {price} $
          </Text>
          <Text
            style={{
              fontSize: typography.medium,
              textDecorationStyle: "solid",
              textDecorationLine: "line-through",
              color: colors.darkgray,
            }}
          >
            {discount} $
          </Text>
        </View>
      </View>
      <Ionicons
        name="heart-outline"
        size={30}
        color="red"
        style={{ alignSelf: "center" }}
      />
    </View>
  );
}
