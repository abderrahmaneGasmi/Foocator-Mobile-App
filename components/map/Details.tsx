import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../../Constants/Colors";
import { backendUrl } from "../../Constants/Global";

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
          flexGrow: 2,
        }}
      >
        <Text
          style={{
            fontSize: 23,
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
          <Text style={{ fontSize: 13 }}>Type:{type}</Text>
        </View>
        <View style={styles.group}>
          <Ionicons
            name="location-outline"
            size={35}
            color={colors.primary}
            style={{ backgroundColor: colors.white, borderRadius: 50 }}
          />
          <Text style={{ fontSize: 13 }}>Address: {address}</Text>
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
          <Text style={{ fontSize: 13 }}>rating: {rating}</Text>
        </View>
        <Text style={styles.btn}>Book Now</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `${backendUrl + "public/" + image}` }}
        style={styles.image}
      />
      <View style={{ flexDirection: "column", marginRight: 10 }}>
        <Text
          style={{
            fontSize: 23,
            fontWeight: "bold",
            textAlign: "center",
            // width: "90%",
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
          <Text style={{ fontSize: 13 }}>Type:{type}</Text>
        </View>
        <View style={styles.group}>
          <Ionicons
            name="location-outline"
            size={35}
            color={colors.primary}
            style={{ backgroundColor: colors.white, borderRadius: 50 }}
          />
          <Text style={{ fontSize: 13 }}>Address: {address}</Text>
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
          <Text style={{ fontSize: 13 }}>rating: {rating}</Text>
        </View>
        <View style={styles.group}>
          <Ionicons
            name="people-circle-outline"
            size={35}
            color={colors.primary}
            style={{
              backgroundColor: colors.white,
              borderRadius: 50,
              width: "90%",
            }}
          />
          <Text style={{ fontSize: 13, alignSelf: "baseline" }}>
            total rating: {ratingnumber}
          </Text>
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
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    paddingRight: 30,
  },
  image: {
    width: 200,
    height: "100%",
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
    fontSize: 20,
    marginLeft: 10,
    alignSelf: "flex-start",
    marginTop: 10,
  },
});
