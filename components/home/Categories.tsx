import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../../Constants/Colors";
import { margin, titlestyle } from "../../Constants/Styles";
import { typography } from "../../Constants/typography";

export default function Categories() {
  return (
    <View style={style.categoriescontainer}>
      <Text style={[titlestyle, { marginBottom: margin.md }]}>Categories</Text>
      <View style={style.bigcategory}>
        <Image
          source={require("../../assets/resturant.jpg")}
          style={{ width: "100%", height: "100%", borderRadius: 10 }}
        />
        <View
          style={{
            position: "absolute",
            bottom: 5,
            left: 10,
            zIndex: 1,
          }}
        >
          <Text
            style={{
              color: colors.white,
              fontSize: typography.xxxlarge,
              fontFamily: "oxygenBold",
            }}
          >
            Resturant
          </Text>
          <Text
            style={{
              color: colors.white,
              fontSize: typography.large,
              fontFamily: "oxygen",
            }}
          >
            Find your favorite resturant
          </Text>
        </View>
        <View style={style.overlay} />
      </View>
      <View style={style.bigcategory}>
        <Image
          source={require("../../assets/coffee.jpg")}
          style={{ width: "100%", height: "100%", borderRadius: 20 }}
        />
        <View
          style={{
            position: "absolute",
            bottom: 5,
            left: 10,
            zIndex: 1,
          }}
        >
          <Text
            style={{
              color: colors.white,
              fontSize: typography.xxxlarge,
              fontFamily: "oxygenBold",
            }}
          >
            Coffee Shop
          </Text>
          <Text
            style={{
              color: colors.white,
              fontSize: typography.large,
              fontFamily: "oxygen",
            }}
          >
            Find your favorite coffee shop
          </Text>
        </View>
        <View style={style.overlay} />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  categoriescontainer: {
    height: 700,
  },
  bigcategory: {
    flex: 0.5,
    position: "relative",
    marginBottom: 10,
    // borderRadius: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Adjust alpha value (0 to 1) to control the brightness
    borderRadius: 20,
  },
});
