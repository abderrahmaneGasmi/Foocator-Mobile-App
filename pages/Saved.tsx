import { View, Text, ImageSourcePropType, Image, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { typography } from "../Constants/typography";
import { Iplace } from "../Constants/interfaces";
import { getpopularplaces } from "../api/placesapi";

import Ionicons from "react-native-vector-icons/Ionicons";
import { backendUrl } from "../Constants/Global";

export default function Saved({ navigation }: { navigation: any }) {
  const [items, setItems] = useState([] as Iplace[]);
  useEffect(() => {
    const fetchplaces = async () => {
      const places = await getpopularplaces(6);
      if (places.data) {
        setItems(places.data);
      }
    };
    fetchplaces();
  }, []);

  const gotoPlace = (id: string) => {
    navigation.navigate("Place", { id });
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}
    >
      <Text
        style={{
          fontSize: typography.xxlarge,
          fontWeight: "bold",
        }}
      >
        Saved {`(${items.length})`}
      </Text>
      <View style={{ flex: 1, marginTop: 20 }}>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <ImageSaved
              image={item.image}
              name={item.name}
              rating={parseInt(item.rating)}
              address={item.address}
              gotoPlace={gotoPlace}
              id={item._id}
            />
          )}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
const ImageSaved = ({
  image,
  name,
  rating,
  address,
  gotoPlace,
  id,
}: {
  image: string;
  name: string;
  rating: number;
  address: string;
  gotoPlace: (id: string) => void;
  id: string;
}) => {
  return (
    <View
      style={{ gap: 10, paddingVertical: 10 }}
      onTouchEnd={() => gotoPlace(id)}
    >
      <Image
        source={{
          uri: `${backendUrl + "public/" + image}`,
        }}
        style={{
          width: "100%",
          height: 290,
          borderRadius: 10,
          resizeMode: "cover",
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <View style={{ flexDirection: "column", gap: 5 }}>
          <Text style={{ fontSize: typography.medium, fontWeight: "bold" }}>
            {name}
          </Text>
          <Text style={{ fontSize: typography.small, color: "gray" }}>
            {address}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Ionicons
                key={i}
                name="star"
                size={20}
                color={i < rating ? "#FFD700" : "gray"}
              />
            ))}
          <Text style={{ fontSize: typography.small, color: "gray" }}>
            {rating}
          </Text>
        </View>
      </View>
    </View>
  );
};
