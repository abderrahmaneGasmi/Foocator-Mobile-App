import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React from "react";
import { colors } from "../Constants/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function Login({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <CredHeader />
      <Image
        source={require("../assets/foocator-bigger-colored.png")}
        style={styles.logo}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: colors.secondary,
            fontSize: 50,
            fontWeight: "bold",
            alignSelf: "center",
          }}
        >
          Login Page
        </Text>
        <Text
          style={{
            color: colors.black,
            fontSize: 25,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          Input your credentials here
        </Text>
        <View style={styles.form}>
          <View style={styles.formgroup}>
            <Text style={{ color: colors.gray, fontSize: 25 }}>Username</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: colors.gray,
                borderRadius: 10,
                // padding: 10,
              }}
            >
              <Ionicons
                name="person-outline"
                size={35}
                color={colors.gray}
                style={{
                  padding: 10,
                  borderRightWidth: 1,
                  borderRightColor: colors.gray,
                }}
              />
              <TextInput
                placeholder="Username"
                style={{ flex: 1, fontSize: 20, marginLeft: 10 }}
              />
            </View>
          </View>
          <View style={styles.formgroup}>
            <Text style={{ color: colors.gray, fontSize: 25 }}>Password</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: colors.gray,
                borderRadius: 10,
                // padding: 10,
              }}
            >
              <Ionicons
                name="lock-closed-outline"
                size={35}
                color={colors.gray}
                style={{
                  padding: 10,
                  borderRightWidth: 1,
                  borderRightColor: colors.gray,
                }}
              />
              <TextInput
                placeholder="Password"
                style={{ flex: 1, fontSize: 20, marginLeft: 10 }}
              />
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Text style={{ color: colors.gray, fontSize: 20 }}>
              Forgot Password?
            </Text>
          </View>
          <View
            style={
              {
                //   flex: 1,
                //   justifyContent: "flex-end",
                //   marginBottom: 36,
              }
            }
          >
            <View
              style={{
                backgroundColor: colors.secondary,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 10,
                marginTop: 20,
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: colors.white, fontSize: 30 }}
                onPress={() => navigation.navigate("Dashboard")}
              >
                Login
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={{ color: colors.gray, fontSize: 20 }}>
              Don't have an account?
            </Text>
            <Text
              style={{ color: colors.secondary, fontSize: 20 }}
              onPress={() => navigation.navigate("Signup")}
            >
              {" "}
              Sign Up
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 150,
  },
  logo: {
    width: 500,
    height: 180,
    resizeMode: "contain",
    marginBottom: 20,
    alignSelf: "center",
  },
  form: {
    flex: 1,
    marginTop: 10,
    gap: 40,
  },
  formgroup: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
  },
});

export function CredHeader() {
  return (
    <>
      <View
        style={{
          position: "absolute",
          top: -120,
          left: -70,
          width: 250,
          height: 250,
          backgroundColor: colors.primary,
          borderRadius: 250,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: -10,
          right: -10,
          width: 60,
          height: 60,
          backgroundColor: colors.secondary,
          borderRadius: 50,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 50,
          right: 50,
          width: 60,
          height: 60,
          backgroundColor: colors.secondary,
          borderRadius: 50,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: -90,
          left: "50%",
          width: 180,
          height: 180,
          backgroundColor: colors.secondary,
          borderRadius: 180,
          padding: 20,
        }}
      >
        <View
          style={{
            position: "relative",

            width: 140,
            height: 140,
            backgroundColor: colors.white,
            borderRadius: 180,
            // opacity: 0.5,
          }}
        ></View>
      </View>
    </>
  );
}
