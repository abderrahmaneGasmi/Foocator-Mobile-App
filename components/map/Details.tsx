import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../../Constants/Colors";
import { backendUrl } from "../../Constants/Global";
import { normalize, typography } from "../../Constants/typography";

export default function Details({
  image,
  name,
  rating,
  type,
  ratingnumber,
  address,
}: {
  image: string;
  name: string;
  rating: string;
  type: "cafe" | "restaurant";
  ratingnumber: number;
  address: string;
}) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `${backendUrl + "public/" + image}` }}
        style={styles.image}
      />
      <View
        style={{
          flexDirection: "column",
          marginRight: 10,
          width: "70%",
        }}
      >
        <Text
          style={{
            fontSize: typography.large,
            fontWeight: "bold",
            textAlign: "center",
            width: "80%",
          }}
        >
          {name}
        </Text>
        <View style={styles.group}>
          <Ionicons
            name={type === "cafe" ? "cafe-outline" : "restaurant-outline"}
            size={35}
            color={colors.primary}
            style={{
              backgroundColor: colors.white,
              borderRadius: 50,
            }}
          />
          <Text style={{ fontSize: typography.mini }}>Type:{type}</Text>
        </View>
        <View style={styles.group}>
          <Ionicons
            name="location-outline"
            size={35}
            color={colors.primary}
            style={{ backgroundColor: colors.white, borderRadius: 50 }}
          />
          <Text style={{ fontSize: typography.mini }}>Address: {address}</Text>
        </View>
        <View style={styles.group}>
          <Ionicons
            name="star"
            size={32}
            color={colors.primary}
            style={{
              backgroundColor: colors.white,
              borderRadius: 50,
              marginLeft: 3,
            }}
          />
          <Text style={{ fontSize: typography.mini }}>rating: {rating}</Text>
        </View>
        <Text style={styles.btn}>Book Now</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    left: 0,
    right: 0,
    flex: 1,

    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    paddingRight: 30,
  },
  image: {
    width: "30%",
    resizeMode: "cover",
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  group: { flexDirection: "row", alignItems: "center", marginLeft: 10 },
  btn: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    // width:100,
    // alignItems: "center",
    // justifyContent: "center",
    color: colors.white,
    fontWeight: "bold",
    fontSize: typography.medium,
    marginLeft: 10,
    alignSelf: "flex-start",
    marginTop: 10,
  },
});
