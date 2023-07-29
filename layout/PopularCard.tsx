import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../Constants/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { backendUrl } from "../Constants/Global";
import { typography } from "../Constants/typography";

export default function PopularCard({
  image,
  name,
  rating,
  type,
  navigateToPlace,
  id,
}: {
  image: string;
  name: string;
  rating: number;
  type: "cafe" | "restaurant";
  navigateToPlace: (params?: { id: string }) => void;
  id: string;
}) {
  return (
    <View
      style={styles.card}
      onTouchEnd={() => {
        navigateToPlace({ id });
      }}
    >
      <View style={styles.cardimage}>
        <Image
          source={{
            uri: `${backendUrl + "public/" + image}`,
          }}
          style={{ height: "100%", width: "100%" }}
        />
        <Text
          style={{
            backgroundColor: colors.white,
            color: colors.black,
            position: "absolute",
            fontSize: typography.large,
            bottom: 15,
            left: 15,
            right: 15,
            padding: 5,
            borderRadius: 5,
            textAlign: "center",
          }}
        >
          {name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            position: "absolute",
            right: 15,
            top: 15,
          }}
        >
          <Image
            source={require("../assets/open.png")}
            style={{ width: 50, height: 50 }}
          />
          <Ionicons
            name={type === "cafe" ? "cafe-outline" : "restaurant-outline"}
            size={typography.big}
            color={colors.primary}
            style={{
              backgroundColor: colors.white,
              borderRadius: 50,
              padding: 5,
              alignSelf: "center",
            }}
            //   style={{ marginLeft: 20 }}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 3,
            left: 3,
            flexDirection: "row",
            backgroundColor: colors.white,
            padding: 5,
          }}
        >
          <Text
            style={{
              fontSize: typography.medium,
              fontWeight: "bold",
            }}
          >
            {rating}
          </Text>
          <Ionicons
            name="star"
            size={typography.medium}
            color="#FFD700"
            style={{ alignSelf: "center" }}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {},
  cardimage: {
    height: 300,
    width: 300,
    marginRight: 20,
  },
});
