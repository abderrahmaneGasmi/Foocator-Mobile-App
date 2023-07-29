import { View, Text, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Iplace } from "../Constants/interfaces";
import { searchplaces } from "../api/placesapi";
import Ionicons from "react-native-vector-icons/Ionicons";
import { backendUrl } from "../Constants/Global";
import { typography } from "../Constants/typography";

export default function Search(props: { navigation: any; route: any }) {
  // if (props.route.params.search === undefined) {
  //   props.navigation.navigate("Home");
  // }
  const gotoPlace = (id: string) => {
    props.navigation.navigate("Place", { id });
  };
  const [items, setItems] = useState([] as Iplace[]);
  useEffect(() => {
    if (props.route.params === undefined) {
      props.navigation.navigate("Home");
    }
    if (props.route.params.search === undefined) {
      props.navigation.navigate("Home");
    }
    if (props.route.params.search.length < 2) {
      props.navigation.navigate("Home");
    }

    const fetchplaces = async () => {
      const res = await searchplaces(props.route.params.search);
      console.log(res);
      if (res.data) {
        setItems(res.data);
      }
    };
    fetchplaces();
  }, []);

  if (props.route.params === undefined) {
    return <View></View>;
  }
  if (props.route.params.search === undefined) {
    return <View></View>;
  }
  if (props.route.params.search.length < 2) {
    return <View></View>;
  }
  if (items.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: typography.xxlarge, fontWeight: "bold" }}>
          No Results Found
        </Text>
      </View>
    );
  }
  return (
    <View>
      <Text
        style={{
          fontSize: typography.xxlarge,
          fontWeight: "bold",
        }}
      >
        Search For {`(${props.route.params.search})`}
      </Text>
      <View style={{ flex: 1, marginTop: 20 }}>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <PlaceSearched
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

const PlaceSearched = ({
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
