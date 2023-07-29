import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import ExploreCard from "../../layout/ExploreCard";
import { titlestyle } from "../../Constants/Styles";
import { mockdata } from "../../Constants/mockdata";
import { Iplace } from "../../Constants/interfaces";
import { getplaces } from "../../api/placesapi";
export default function Explore({
  navigateToPlace,
}: {
  navigateToPlace: (params?: { id: string }) => void;
}) {
  const [places, setPlaces] = useState<Array<Iplace>>([]);

  useEffect(() => {
    const fetchplaces = async () => {
      const places = await getplaces();
      if (places.data) {
        setPlaces(places.data);
      }
      // console.log("fists");
    };
    fetchplaces();
  }, []);

  if (places.length === 0) {
    return <Text>Loading</Text>;
  }
  return (
    <View style={styles.explorecontainer}>
      <Text style={titlestyle}>Explore</Text>
      {places.map((item, i) => (
        <ExploreCard
          key={i}
          name={item.name}
          rating={item.rating}
          location={item.address}
          image={item.image}
          type={item.image.startsWith("coffee") ? "cafe" : "restaurant"}
          navigateToPlace={navigateToPlace}
          id={item._id}
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
