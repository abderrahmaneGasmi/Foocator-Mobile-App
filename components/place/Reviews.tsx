import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { colors } from "../../Constants/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { typography } from "../../Constants/typography";

export default function Reviews({
  image,
  name,
  review,
  rating,
}: {
  image: ImageSourcePropType;
  name: string;
  review: string;
  rating: number;
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
          width: 70,
          height: 70,
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
        <Text
          style={{
            fontSize: typography.medium,
            color: colors.darkgray,
            width: "70%",
          }}
        >
          {review}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Ionicons
                key={i}
                name={i < rating ? "star" : "star-outline"}
                size={typography.medium}
                color={i < rating ? colors.primary : colors.lightgray}
              />
            ))}
          <Text style={{ fontSize: typography.medium, color: colors.darkgray }}>
            {rating}
          </Text>
        </View>
      </View>
    </View>
  );
}
