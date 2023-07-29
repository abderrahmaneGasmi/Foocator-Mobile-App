import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { colors } from "../Constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { typography } from "../Constants/typography";

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
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -4,
        }}
      >
        <ImageBackground
          source={require("../assets/background.jpg")}
          style={styles.backgroundimage}
        />
      </View>
      <View
        style={{
          flex: 0.7,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
        }}
      >
        <Image
          source={require("../assets/foocator-bigger.png")}
          style={{
            width: "90%",
            height: 180,
            resizeMode: "contain",
            // marginBottom: 20,
          }}
        />
        <Text
          style={{
            color: colors.white,
            fontWeight: "bold",
            fontSize: typography.bigtitle,
          }}
        >
          Welcome to FooCator
        </Text>
        <Text style={{ color: colors.white, fontSize: typography.xlarge }}>
          find your food in your area now !
        </Text>
      </View>
      <View style={styles.buttons}>
        <View
          style={{ backgroundColor: colors.secondary, paddingVertical: 10 }}
          onTouchEnd={() => navigation.navigate("Login")}
        >
          <Text style={{ ...styles.button }}>Login</Text>
        </View>

        <View
          style={{ backgroundColor: colors.tertiary, paddingVertical: 10 }}
          onTouchEnd={() => navigation.navigate("SignUp")}
        >
          <Text style={{ ...styles.button }}>Sign Up</Text>
        </View>
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
    flex: 0.3,
    padding: 20,
    zIndex: 4,
    gap: 20,
    justifyContent: "center",
    alignItems: "stretch",
    width: "100%",
  },
  button: {
    color: colors.white,
    fontSize: typography.xxxlarge,
    textAlign: "center",
    fontWeight: "bold",
  },
});
