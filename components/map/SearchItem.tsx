import { View, Text } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../../Constants/Colors";
import { Iplace } from "../../Constants/interfaces";

export default function SearchItem({
  title,
  address,
  rating,
  type,
}: {
  title: string;
  address: string;
  rating: string;
  type: "restaurant" | "coffee";
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: colors.lightgray,
        padding: 10,
        marginTop: 3,
        backgroundColor: "white",
      }}
    >
      <View style={{ flexDirection: "column" }}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            color: colors.primary,
          }}
        >
          {title.length > 20 ? title.substring(0, 20) + "..." : title}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="location-outline" size={32} color={colors.primary} />
          <Text>
            {address.length > 20 ? address.substring(0, 20) + "..." : address}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="star" size={32} color={colors.primary} />
          <Text>{rating}</Text>
        </View>
      </View>
      <Ionicons
        name={type === "restaurant" ? "restaurant-outline" : "cafe-outline"}
        size={32}
        color={colors.primary}
      />
    </View>
  );
}
