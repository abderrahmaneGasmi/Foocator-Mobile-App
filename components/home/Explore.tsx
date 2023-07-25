import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ExploreCard from "../../layout/ExploreCard";
import { titlestyle } from "../../Constants/Styles";
import { mockdata } from "../../Constants/mockdata";
export default function Explore() {
  return (
    <View style={styles.explorecontainer}>
      <Text style={titlestyle}>Explore</Text>
      {mockdata.map((item, i) => (
        <ExploreCard
          key={i}
          name={item.name}
          rating={item.rating}
          location={item.vicinity}
          image={item.image}
          type={item.image.startsWith("coffee") ? "cafe" : "restaurant"}
        />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  explorecontainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 40,
  },
});
