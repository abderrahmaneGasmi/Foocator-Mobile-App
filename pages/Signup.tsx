import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React from "react";
import { colors } from "../Constants/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { CredHeader } from "./Login";
export default function Signup() {
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
          Create Account
        </Text>
        <Text
          style={{
            color: colors.black,
            fontSize: 20,
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
            <Text style={{ color: colors.gray, fontSize: 25 }}>E-mail</Text>
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
                name="mail-outline"
                size={35}
                color={colors.gray}
                style={{
                  padding: 10,
                  borderRightWidth: 1,
                  borderRightColor: colors.gray,
                }}
              />
              <TextInput
                placeholder="Email"
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
              <Text style={{ color: colors.white, fontSize: 30 }}>
                Create Account
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={{ color: colors.gray, fontSize: 20 }}>
              Already have an account?
            </Text>
            <Text style={{ color: colors.secondary, fontSize: 20 }}>
              {" "}
              Login
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
