import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../Constants/Colors";
import { ImageSourcePropType } from "react-native";
import { backendUrl } from "../Constants/Global";

export default function ExploreCard({
  name,
  rating,
  location,
  type,
  image,
}: {
  name: string;
  rating: string;
  location: string;
  image: string;
  type: "restaurant" | "cafe";
}) {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: `${backendUrl + "public/" + image}`,
        }}
        // source={require(`file://../assets/photos/${image}`)}
        // source={require("../assets/photos/coffee-0.jpg")}
        style={{
          width: "100%",
          height: 280,
          borderRadius: 10,
          alignSelf: "center",
        }}
      />
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <View style={styles.left}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: name.length > 20 ? 18 : 20,
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              {name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#FFD700",
                borderRadius: 5,
                padding: 5,
              }}
            >
              <Ionicons name="star" size={25} color="#fff" style={{}} />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                {rating}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="location-outline"
              size={23}
              color={colors.darkgray}
              style={{ alignSelf: "flex-end" }}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: colors.darkgray,
              }}
            >
              {location}
            </Text>
          </View>
        </View>
        <View style={styles.right}>
          <Image
            source={require("../assets/open.png")}
            style={{ width: 50, height: 50 }}
          />
          <Ionicons
            name={`${type == "restaurant" ? "restaurant" : "cafe"}-outline`}
            size={40}
            color={colors.primary}
            //   style={{ marginLeft: 20 }}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    marginTop: 18,
    flex: 1,
    // padding: 20,
    paddingHorizontal: 40,
    paddingVertical: 20,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
    position: "relative",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  left: {
    flex: 0.8,
  },
  right: {
    flex: 0.2,
    alignItems: "flex-end",
  },
});
// <View
//   style={{
//     flexDirection: "row",
//     marginTop: 10,
//     alignItems: "center",
//     justifyContent: "space-between",
//   }}
// >
//   <View style={{ flex: 0.7 }}>
//     <View
//       style={{
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between",
//         // flex: 0.3,
//       }}
//     >
//       <View style={{ flexDirection: "row" }}>
//         <Text
//           style={{
//             fontSize: 20,
//             fontWeight: "bold",
//             marginTop: 10,
//             maxWidth: "80%",
//           }}
//         >
//           {name}
//         </Text>
//       </View>
//       <View style={{ flexDirection: "row" }}>
//         <Text
//           style={{
//             fontSize: 20,
//             fontWeight: "bold",
//             marginTop: 10,
//             marginLeft: 20,
//           }}
//         >
//           {rating}
//         </Text>
//         <Ionicons
//           name="star"
//           size={23}
//           color="#FFD700"
//           style={{ alignSelf: "flex-end" }}
//         />
//       </View>
//     </View>
//     <View
//       style={{
//         flexDirection: "row",
//       }}
//     >
//       <Ionicons
//         name="location-outline"
//         size={23}
//         color={colors.gray}
//         style={{ alignSelf: "flex-end" }}
//       />
//       <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 10 }}>
//         {location}
//       </Text>
//     </View>
//   </View>
//   <View style={{ flexDirection: "row", gap: 10, flex: 0.3 }}>
//     <Image
//       source={require("../assets/open.png")}
//       style={{ width: 50, height: 50 }}
//     />
//     <Ionicons
//       name="restaurant-outline"
//       size={40}
//       color={colors.primary}
//       //   style={{ marginLeft: 20 }}
//     />
//   </View>
// </View>;
