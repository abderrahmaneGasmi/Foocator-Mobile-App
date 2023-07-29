import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { colors } from "../Constants/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { typography } from "../Constants/typography";
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
            fontSize: typography.bigtitle,
            alignSelf: "center",
            fontFamily: "oxygenBold",
          }}
        >
          Login Page
        </Text>
        <Text
          style={{
            color: colors.darkgray,
            fontSize: typography.xlarge,
            // fontWeight: "bold",
            fontFamily: "oxygen",
            marginTop: 10,
          }}
        >
          Input your credentials here
        </Text>
        <View style={styles.form}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.formgroup}>
              <Text
                style={{
                  color: colors.gray,
                  fontSize: typography.large,
                  fontFamily: "oxygenBold",
                }}
              >
                Username
              </Text>
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
                  name="person"
                  size={typography.xxxlarge}
                  color={colors.gray}
                  style={{
                    padding: typography.mini,
                    borderRightWidth: 1,
                    borderRightColor: colors.gray,
                  }}
                />
                <TextInput
                  placeholder="Username"
                  style={{
                    flex: 1,
                    fontSize: typography.medium,
                    marginLeft: 10,
                    fontFamily: "oxygen",
                  }}
                />
              </View>
            </View>
            <View style={styles.formgroup}>
              <Text
                style={{
                  color: colors.gray,
                  fontSize: typography.large,
                  fontFamily: "oxygenBold",
                }}
              >
                Password
              </Text>
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
                  name="lock-closed"
                  size={typography.xxxlarge}
                  color={colors.gray}
                  style={{
                    padding: typography.mini,
                    borderRightWidth: 1,
                    borderRightColor: colors.gray,
                  }}
                />
                <TextInput
                  placeholder="Password"
                  style={{
                    flex: 1,
                    fontSize: typography.medium,
                    marginLeft: 10,
                    fontFamily: "oxygen",
                  }}
                />
              </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Text style={{ color: colors.gray, fontSize: typography.small }}>
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
                onTouchEnd={() => navigation.navigate("Dashboard")}
              >
                <Text
                  style={{ color: colors.white, fontSize: typography.large }}
                >
                  Login
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <Text style={{ color: colors.gray, fontSize: typography.large }}>
                Don't have an account?
              </Text>
              <Text
                style={{ color: colors.secondary, fontSize: typography.large }}
                onPress={() => navigation.navigate("Signup")}
              >
                {" "}
                Sign Up
              </Text>
            </View>
          </ScrollView>
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
    width: "90%",
    height: 120,
    resizeMode: "contain",
    marginBottom: 20,
    alignSelf: "center",
  },
  form: {
    flex: 1,
    marginTop: 10,
  },
  formgroup: {
    marginVertical: 15,
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
