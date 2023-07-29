import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getplace } from "../api/placesapi";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../Constants/Colors";
import { Iplace } from "../Constants/interfaces";
import { typography } from "../Constants/typography";
import { backendUrl } from "../Constants/Global";
type navitems = "info" | "reviews" | "photos" | "items";
export default function Place(props: { navigation: any; route: any }) {
  if (props.route.params.id === undefined) {
    return <Text>loading</Text>;
  }
  const [item, setItem] = useState({} as Iplace);
  const [selectednav, setSelectednav] = useState<navitems>("items");
  useEffect(() => {
    const fetchplace = async () => {
      const res = await getplace(props.route.params.id);
      if (res.data) setItem(res.data);
    };
    fetchplace();
  }, []);

  if (!item) return <Text>loading</Text>;
  return (
    <View style={styles.container}>
      <View style={styles.navigatorcontainer}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          color={colors.black}
          style={{
            backgroundColor: colors.white,
            padding: 5,
            borderRadius: 10,
          }}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Text
          style={{
            fontSize: typography.large,
            fontFamily: "oxygenBold",
            color: colors.white,
          }}
        >
          {item.name}
        </Text>
        <Ionicons
          name="heart-outline"
          size={30}
          color="red"
          style={{
            backgroundColor: colors.white,
            padding: 5,
            borderRadius: 10,
          }}
        />
      </View>
      <View style={{ flex: 0.3 }}>
        <Image
          source={{ uri: `${backendUrl + "public/" + item.image}` }}
          style={styles.image}
        />
      </View>
      <View style={{ flex: 0.7, padding: 20 }}>
        <View style={{ flex: 0.15, gap: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Text
              style={{ fontFamily: "oxygenBold", fontSize: typography.large }}
            >
              {item.name}
            </Text>
            {item.image && (
              <Ionicons
                name={`${
                  item.image.startsWith("restaurant") ? "restaurant" : "cafe"
                }`}
                size={typography.xlarge}
                color={colors.secondary}
              />
            )}
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Ionicons
              name="location-outline"
              size={typography.medium}
              color={colors.black}
            />
            <Text style={{ fontFamily: "oxygen", fontSize: typography.mini }}>
              {item.address}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Ionicons
              name="star-outline"
              size={typography.medium}
              color={colors.primary}
            />
            <Text style={{ fontFamily: "oxygen", fontSize: typography.mini }}>
              {item.rating} | {item.ratingnumber} Reviews
            </Text>
          </View>
        </View>
        <View style={styles.navlist}>
          <Text
            style={[
              {
                fontFamily: "oxygenBold",
                fontSize: typography.large,
                borderBottomColor: colors.primary,
                borderBottomWidth: selectednav === "items" ? 2 : 0,
              },
            ]}
            onPress={() => setSelectednav("items")}
          >
            Menu Items
          </Text>
          <Text
            style={{
              fontFamily: "oxygenBold",
              fontSize: typography.large,
              borderBottomColor: colors.primary,
              borderBottomWidth: selectednav === "reviews" ? 2 : 0,
            }}
            onPress={() => setSelectednav("reviews")}
          >
            Reviews
          </Text>
          <Text
            style={{
              fontFamily: "oxygenBold",
              fontSize: typography.large,
              borderBottomColor: colors.primary,
              borderBottomWidth: selectednav === "photos" ? 2 : 0,
            }}
            onPress={() => setSelectednav("photos")}
          >
            Photos
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigatorcontainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 70,
    // backgroundColor: colors.blackopacity,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingRight: 20,
    // paddingLeft: 2,
    paddingHorizontal: 20,
    zIndex: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    // alignSelf: "center",
  },
  navlist: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "space-between",
  },
});
