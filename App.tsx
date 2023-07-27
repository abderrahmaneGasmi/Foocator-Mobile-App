import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import First from "./pages/First";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import Home from "./pages/Home";
import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "./Constants/Colors";
import Maps from "./pages/Maps";

const customFonts = {
  oxygen: require("./assets/fonts/Oxygen-Regular.ttf"),
  oxygenBold: require("./assets/fonts/Oxygen-Bold.ttf"),
};
export default function App() {
  const [showpages, setShowpages] = useState(false);

  const _loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setShowpages(true);
  };
  const Tab = createBottomTabNavigator();

  // const [fontsLoaded] = useFonts({
  //   // oxygenBold: require("./assets/fonts/Oxygen-Bold.tff"),
  //   oxygen: require("./assets/fonts/Oxygen-Regular.ttf"),
  // });
  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     // await SplashScreen.hideAsync();
  //     setShowpages(true);
  //   }
  //   console.log(fontsLoaded);
  // }, [fontsLoaded]);

  useEffect(() => {
    _loadFontsAsync();
  }, []);

  if (!showpages) {
    return null;
  }
  return (
    // <>
    <SafeAreaView
      style={{ marginTop: StatusBar.currentHeight, flex: 1 }}
      // onLayout={onLayoutRootView}
    >
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarStyle: {
              backgroundColor: "white",
              borderTopWidth: 0,
              elevation: 0,
              height: 70,
            },
            headerShown: false,
            tabBarLabelStyle: {
              fontFamily: "oxygenBold",
              fontSize: 12,
            },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = "settings-outline";
              switch (route.name) {
                case "Home":
                  iconName = focused ? "home" : "home-outline";
                  break;
                case "Maps":
                  iconName = focused ? "map" : "map-outline";
                  break;
                case "First":
                  iconName = focused ? "list" : "list-outline";
                  break;
                case "Login":
                  iconName = focused ? "log-in" : "log-in-outline";
                  break;
                case "Signup":
                  iconName = focused ? "person" : "person-outline";
                  break;

                default:
                  break;
              }

              // You can return any component that you like here!
              return (
                <Ionicons
                  name={iconName}
                  size={40}
                  color={color}
                  style={{ paddingVertical: 5 }}
                />
              );
            },
            tabBarActiveTintColor: colors.secondary,
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Maps" component={Maps} />
          <Tab.Screen name="First" component={First} />
          <Tab.Screen name="Login" component={Login} />
          {/* <Tab.Screen name="Signup" component={Signup} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
    // <ExpoStatusBar style="auto" />
    // </>
  );
}
