import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getplace } from "../api/placesapi";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../Constants/Colors";
import { Iplace } from "../Constants/interfaces";
import { typography } from "../Constants/typography";
import { backendUrl } from "../Constants/Global";
import MenuItems from "../components/place/MenuItems";
import Reviews from "../components/place/Reviews";
import Photos from "../components/place/Photos";
type navitems = "info" | "reviews" | "photos" | "items";

const resimages = [
  {
    id: 1,
    image: require("../assets/menuItems/resturant1.png"),
    name: "Pasta with tomato sauce",
    price: 15.6,
    discount: 20.6,
  },
  {
    id: 2,
    image: require("../assets/menuItems/resturant2.png"),
    name: "Soup with vegetables",
    price: 24.6,
    discount: 30.6,
  },
  {
    id: 3,
    image: require("../assets/menuItems/resturant3.png"),
    name: "Spaghetti with meatballs",
    price: 9.3,
    discount: 12.6,
  },
  {
    id: 4,
    image: require("../assets/menuItems/resturant4.png"),
    name: "Salad with vegetables",
    price: 36,
    discount: 40.6,
  },
  {
    id: 5,
    image: require("../assets/menuItems/resturant5.png"),
    name: "Dessert : OatMilk with fruits",
    price: 15.6,
    discount: 20.6,
  },
];
const reviews = [
  {
    id: 1,
    name: "John Doe",
    image: require("../assets/reviews/review(1).jpg"),
    review:
      "I love this place so much, the food is amazing and the service is great!",
    rating: 5,
  },
  {
    id: 2,
    name: "Chris Doe",
    image: require("../assets/reviews/review(2).jpg"),
    review: "i liked the food but the service was not that good",
    rating: 3,
  },
  {
    id: 3,
    name: "Jane Doe",
    image: require("../assets/reviews/review(3).jpg"),
    review: "the plate was dirty and the food was cold",
    rating: 1,
  },
  {
    id: 4,
    name: "John Doe",
    image: require("../assets/reviews/review(4).jpg"),
    review: "i love the chicken wings and the service was great",
    rating: 5,
  },
  {
    id: 5,
    name: "John Doe",
    image: require("../assets/reviews/review(5).jpg"),
    review:
      "I love this place so much, the food is amazing and the service is great!",
    rating: 4,
  },
];
export default function Place(props: { navigation: any; route: any }) {
  if (props.route.params.id === undefined) {
    return <Text>loading</Text>;
  }

  const [imageParentFlex, setImageParentFlex] = useState(0.3);
  const flatListRef = React.useRef();

  // const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
  //   const { contentOffset } = event.nativeEvent;
  //   // Calculate the new flex value for the image parent view based on the scroll position
  //   const newImageParentFlex = Math.max(0.3 - contentOffset.y * 0.001, 0);
  //   setImageParentFlex(newImageParentFlex);
  // };

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
      <View style={{ flex: imageParentFlex }}>
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
        <View style={{ flex: 0.85 }}>
          {selectednav === "items" ? (
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                // flexWrap: "wrap",
                gap: 10,
              }}
            >
              {/* {resimages.map((item, index) => (
                <MenuItems {...item} key={index} />
              ))} */}
              <FlatList
                data={resimages}
                renderItem={({ item }) => <MenuItems {...item} />}
                // onScroll={(event) => handleScroll(event)}
              />
            </View>
          ) : selectednav === "reviews" ? (
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                // flexWrap: "wrap",
                gap: 10,
              }}
            >
              <FlatList
                data={reviews}
                renderItem={({ item }) => <Reviews {...item} />}
                // onScroll={(event) => handleScroll(event)}
              />
            </View>
          ) : selectednav === "photos" ? (
            <Photos />
          ) : null}
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
    marginRight: 20,
  },
});
