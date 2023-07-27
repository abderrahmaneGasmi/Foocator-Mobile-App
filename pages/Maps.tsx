import { View, Text, FlatList, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { getplaces, searchplaces } from "../api/placesapi";
import { Iplace } from "../Constants/interfaces";
import { backendUrl } from "../Constants/Global";
import Details from "../components/map/Details";
import Search from "../layout/Search";
import SearchItem from "../components/map/SearchItem";
import { colors } from "../Constants/Colors";
type searchinputhistory = {
  searchinput: string;
  places: Array<Iplace>;
};
export default function Maps() {
  const [places, setPlaces] = useState<Array<Iplace>>([]); // all places
  const [selectedplace, setSelectedplace] = useState({} as Iplace); // selected place to show details
  const [searchinput, setSearchinput] = useState(""); // search input
  const [searchlistplaces, setSearchlistplaces] = useState<Array<Iplace>>([]); // search list places
  const [fetchloading, setFetchloading] = useState(false); // fetch loading in search
  const [inputfocused, setInputfocused] = useState(false); // track input focus
  const mapref = React.createRef<MapView>();
  const inputref = React.createRef<TextInput>();
  const [searchinputhistory, setSearchinputhistory] = useState(
    [] as Array<searchinputhistory>
  ); // search input history

  const focusoninput = () => {
    setInputfocused(true);
    if (searchinput.length > 3) {
      const checkexist = checksearchinputhistory(searchinput);
      if (checkexist.status) {
        setSearchlistplaces(searchinputhistory[checkexist.index].places);
      }
    }
  };

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
  const checksearchinputhistory = (searchinput: string) => {
    const searchinputhistoryindex = searchinputhistory.findIndex(
      (item) => item.searchinput === searchinput
    );
    if (searchinputhistoryindex === -1) {
      return { status: false, index: searchinputhistoryindex };
    }
    return { status: true, index: searchinputhistoryindex };
  };
  useEffect(() => {
    setSearchlistplaces([]);
    if (searchinput.length > 3) {
      setFetchloading(true);
      const check = checksearchinputhistory(searchinput);
      if (check.status) {
        setSearchlistplaces(searchinputhistory[check.index].places);
        setFetchloading(false);
        return;
      }
      const fetchplaces = async () => {
        const places = await searchplaces(searchinput);
        if (places.data) {
          setSearchlistplaces(places.data);
          setSearchinputhistory([
            ...searchinputhistory,
            {
              searchinput: searchinput,
              places: places.data,
            },
          ]);
        }
        // console.log("fists");
      };
      const timer = setTimeout(() => {
        fetchplaces();
        setFetchloading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [searchinput]);
  const chooseSearchPlce = (place: Iplace) => {
    mapref.current?.animateCamera(
      {
        center: {
          latitude: parseFloat(place.lat),
          longitude: parseFloat(place.lng),
        },
        heading: 0,
        pitch: 0,
        altitude: 1500,
        zoom: 20,
      },
      { duration: 1000 }
    );
    setSearchlistplaces([]);
    setSelectedplace(place);
  };
  if (places.length === 0) {
    return <Text>Loading</Text>;
  }
  return (
    <View style={{ position: "relative", flex: 1 }}>
      <View
        style={{
          position: "absolute",
          top: 50,
          left: 10,
          right: 10,
          zIndex: 12,
        }}
      >
        <Search
          input={searchinput}
          focusoninput={focusoninput}
          updateinput={(input: string) => setSearchinput(input)}
          inputref={inputref}
        />
        {searchinput !== "" && fetchloading && inputfocused ? (
          <View
            style={{
              alignItems: "center",
              borderWidth: 1,
              borderColor: colors.lightgray,
              padding: 10,
              marginTop: 3,
              backgroundColor: "white",
            }}
          >
            <Text style={{ color: colors.darkgray }}>Loading...</Text>
          </View>
        ) : searchinput.length > 3 &&
          !fetchloading &&
          inputfocused &&
          searchlistplaces.length === 0 ? (
          <View
            style={{
              alignItems: "center",
              borderWidth: 1,
              borderColor: colors.lightgray,
              padding: 10,
              marginTop: 3,
              backgroundColor: "white",
            }}
          >
            <Text style={{ color: colors.darkgray }}>No results found</Text>
          </View>
        ) : null}
        {searchlistplaces.length > 0 && (
          <FlatList
            data={searchlistplaces}
            style={{}}
            renderItem={({ item }) => (
              <View onTouchEnd={() => chooseSearchPlce(item)}>
                <SearchItem
                  address={item.address}
                  rating={item.rating}
                  title={item.name}
                  type={
                    item.image.startsWith("coffee") ? "coffee" : "restaurant"
                  }
                />
              </View>
            )}
          />
        )}
      </View>

      <MapView
        ref={mapref}
        style={{ width: "100%", height: "100%" }}
        scrollEnabled={true}
        zoomEnabled={true}
        // minZoomLevel={10}
        initialRegion={{
          latitude: parseFloat(places[0].lat),
          longitude: parseFloat(places[0].lng),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        zoomTapEnabled={true}
        onPress={() => {
          setSelectedplace({} as Iplace);
          setSearchlistplaces([]);
          inputref.current?.blur();
          setInputfocused(false);
        }}
        // region={{
        //   latitude: mapPosition.latitude,
        //   longitude: mapPosition.longitude,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,

        // }}
        initialCamera={{
          center: {
            latitude: parseFloat(places[0].lat),
            longitude: parseFloat(places[0].lng),
          },
          pitch: 0,
          heading: 0,
          altitude: 1000,
          zoom: 15,
        }}
      >
        {places.map((place, i) => (
          <Marker
            key={i}
            coordinate={{
              latitude: parseFloat(place.lat),
              longitude: parseFloat(place.lng),
            }}
            title={""}
            description={""}
            // image={{
            //   uri: `${backendUrl}public/${
            //     place.image.startsWith("coffee") ? "coffee" : "restaurant"
            //   }.png`,
            //   // height: 5,
            //   // width: 5,
            //   // scale: 0.05,
            // }}

            // image={{
            //   uri: "https://banner2.cleanpng.com/20171202/3b7/light-bulb-png-pic-5a230db7edc4e2.7934527515122467119739.jpg",
            // }}
            style={{ width: 7, height: 7, borderRadius: 10 }}
            icon={
              place.image.startsWith("coffee")
                ? require("../assets/coffee.png")
                : require("../assets/restaurant.png")
            }
            onPress={() => {
              setInputfocused(false);

              setSelectedplace(place);
              setSearchlistplaces([]);
              inputref.current?.blur();
            }}
          />
        ))}
      </MapView>
      {selectedplace.name && (
        <Details
          image={selectedplace.image}
          name={selectedplace.name}
          address={selectedplace.address || ""}
          rating={selectedplace.rating}
          type={
            selectedplace.image.startsWith("coffee") ? "cafe" : "restaurant"
          }
          ratingnumber={selectedplace.ratingnumber}
        />
      )}
    </View>
  );
}
