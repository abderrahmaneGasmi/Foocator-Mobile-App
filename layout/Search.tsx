import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../Constants/Colors";

export default function Search({
  input,
  updateinput,
  focusoninput,
  inputref,
}: {
  input: string;
  updateinput: (input: string) => void;
  focusoninput?: () => void;
  inputref?: React.RefObject<TextInput>;
}) {
  return (
    <View style={style.searchcontainer}>
      <TextInput
        placeholder="Search"
        style={{ fontSize: 22, width: "90%" }}
        onChangeText={(text) => updateinput(text)}
        value={input}
        onFocus={focusoninput}
        ref={inputref}
      />
      <Ionicons name="search-outline" size={35} color={colors.gray} />
    </View>
  );
}
const style = StyleSheet.create({
  searchcontainer: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    position: "relative",
    backgroundColor: colors.white,
    width: "100%",
    paddingHorizontal: 20,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 8,
    borderRadius: 10,
  },
});
