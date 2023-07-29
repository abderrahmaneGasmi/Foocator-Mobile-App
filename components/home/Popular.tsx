import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { titlestyle } from "../../Constants/Styles";
import PopularCard from "../../layout/PopularCard";
import Ionicons from "react-native-vector-icons/Ionicons";
import { gettop5, mockdata } from "../../Constants/mockdata";
import { getplaces, getpopularplaces } from "../../api/placesapi";
import axios from "axios";
import { Iplace } from "../../Constants/interfaces";
export default function Popular({
  navigateToPlace,
}: {
  navigateToPlace: (params?: { id: string }) => void;
}) {
  const scrollViewRef = useRef<FlatList>(null);
  const [indexscroll, setIndexscroll] = useState(0);
  const handleScrollRight = () => {
    if (scrollViewRef.current?.props.data?.length) {
      if (indexscroll < scrollViewRef.current?.props.data?.length - 1) {
        setIndexscroll(indexscroll + 1);
        scrollViewRef.current?.scrollToIndex({
          index: indexscroll + 1,
          animated: true,
          viewOffset: 0,
          viewPosition: 0.5,
        });
      }
    }
  };
  const handleScrollLeft = () => {
    if (scrollViewRef.current?.props.data?.length) {
      if (indexscroll > 0) {
        setIndexscroll(indexscroll - 1);
        scrollViewRef.current?.scrollToIndex({
          index: indexscroll - 1,
          animated: true,
          viewOffset: 0,
          viewPosition: 0.5,
        });
      }
    }
  };
  const [places, setPlaces] = useState<Array<Iplace>>([]);
  const fetchplaces = async () => {
    const places = await getpopularplaces(6);
    if (places.data) {
      setPlaces(places.data);
    }
    // console.log("fists");
  };

  useEffect(() => {
    fetchplaces();
  }, []);

  if (places.length === 0) {
    return <Text>Loading</Text>;
  }

  return (
    <View>
      <Text style={[titlestyle, { marginVertical: 10 }]}>Popular</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <FlatList
          data={places}
          renderItem={(i) => (
            <PopularCard
              key={i.index}
              id={i.item._id}
              image={i.item.image}
              name={i.item.name}
              rating={i.item.rating}
              type={i.item.image.startsWith("coffee") ? "cafe" : "restaurant"}
              navigateToPlace={navigateToPlace}
            />
          )}
          // onScroll={(event) => {
          //   const contentWidth = event.nativeEvent.contentSize.width;
          //   const containerWidth = event.nativeEvent.layoutMeasurement.width;
          //   const currentOffset = event.nativeEvent.contentOffset.x;

          //   if (contentWidth - containerWidth - currentOffset < 1) {
          //     // handleScrollRight();
          //   } else if (currentOffset < 1) {
          //     handleScrollLeft();
          //   }
          // }}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          ref={scrollViewRef}
          //   scrollEnabled={true}
          //   contentContainerStyle={{ width: "90%" }}
          contentInset={{ top: 0, left: 0, bottom: 0, right: 0 }}
        />
        <Ionicons
          name="chevron-forward-outline"
          size={50}
          color="#000"
          style={{
            backgroundColor: "#fff",
            borderRadius: 50,
            paddingVertical: 9,
            paddingHorizontal: 13,
            position: "absolute",
            right: 0,
            top: "40%",
          }}
          onPress={handleScrollRight}
        />
        <Ionicons
          name="chevron-back-outline"
          size={50}
          color="#000"
          style={{
            backgroundColor: "#fff",
            borderRadius: 50,
            paddingVertical: 9,
            paddingHorizontal: 13,
            position: "absolute",
            left: 0,
            top: "40%",
          }}
          onPress={handleScrollLeft}
        />
      </View>
    </View>
  );
}
