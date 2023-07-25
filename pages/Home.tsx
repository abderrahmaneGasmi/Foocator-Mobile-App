import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import React from "react";
import Search from "../layout/Search";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../Constants/Colors";
import Categories from "../components/home/Categories";
import Explore from "../components/home/Explore";
import Popular from "../components/home/Popular";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.searchcontainer}>
        <LinearGradient
          colors={[
            colors.primary,
            colors.primaryopacity,
            // colors.primaryopacity2,
          ]}
          style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
        />
        <ImageBackground
          source={require("../assets/food.png")}
          style={styles.backgroundimage}
        />
        <Search />
      </View>
      <View style={{ flex: 0.9 }}>
        <ScrollView style={{ padding: 20 }}>
          <Categories />
          <Popular />
          <Explore />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchcontainer: {
    flex: 0.1,
    position: "relative",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  backgroundimage: {
    // flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    resizeMode: "cover",
    zIndex: -2,
  },
});
