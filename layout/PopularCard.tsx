import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../Constants/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function PopularCard({
  image,
  name,
  rating,
  type,
}: {
  image: string;
  name: string;
  rating: number;
  type: "cafe" | "restaurant";
}) {
  return (
    <View style={styles.card}>
      <View style={styles.cardimage}>
        <Image
          source={{
            uri: `http://192.168.1.9:8081/assets/photos/${image}`,
          }}
          style={{ height: "100%", width: "100%" }}
        />
        <Text
          style={{
            backgroundColor: colors.white,
            color: colors.black,
            position: "absolute",
            fontSize: 17,
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
            size={40}
            color={colors.primary}
            style={{
              backgroundColor: colors.white,
              borderRadius: 50,
              paddingVertical: 9,
              paddingHorizontal: 13,
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
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {rating}
          </Text>
          <Ionicons
            name="star"
            size={23}
            color="#FFD700"
            style={{ alignSelf: "flex-end" }}
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
