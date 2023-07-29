import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { colors } from "../Constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

export default function First({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.primary, colors.primaryopacity, colors.primaryopacity2]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: -1,
        }}
      ></LinearGradient>

      <ImageBackground
        source={require("../assets/background.jpg")}
        style={styles.backgroundimage}
      />
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 150,
          }}
        >
          <Image
            source={require("../assets/foocator-bigger.png")}
            style={{
              width: 500,
              height: 180,
              resizeMode: "contain",
              marginBottom: 20,
            }}
          />
          <Text
            style={{ color: colors.white, fontWeight: "bold", fontSize: 50 }}
          >
            Welcome to FooCator
          </Text>
          <Text style={{ color: colors.white, fontSize: 30 }}>
            find your food in your area now !
          </Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <Text
          style={{ ...styles.button, backgroundColor: colors.secondary }}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Text>
        <Text
          style={{ ...styles.button, backgroundColor: colors.tertiary }}
          onPress={() => navigation.navigate("Signup")}
        >
          Sign Up
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundimage: {
    // flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    zIndex: -2,
  },
  buttons: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    zIndex: 4,
    gap: 20,
  },
  button: {
    color: colors.white,
    fontSize: 30,
    padding: 20,
    textAlign: "center",
  },
});
