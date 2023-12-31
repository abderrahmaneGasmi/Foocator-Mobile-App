import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { typography } from "../Constants/typography";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./Home";
import Maps from "./Maps";
import { colors } from "../Constants/Colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Place from "./Place";
import Saved from "./Saved";
import Search from "./Search";

export default function Dashboard() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tabsnavigations" component={Tabsnavigations} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen
        name="Place"
        component={Place}
        // options={{
        //   headerShown: true,
        //   headerBackground: () => (
        //     <View
        //       style={{
        //         backgroundColor: colors.,
        //         width: "100%",
        //         height: "100%",
        //       }}
        //     />
        //   ),
        // }}
      />
    </Stack.Navigator>
  );
}
const Tabsnavigations = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
          elevation: 0,
          // height: 70,
          flex: 0.08,
          justifyContent: "center",
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: "oxygenBold",
          fontSize: typography.medium,
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
            case "Saved":
              iconName = focused ? "heart" : "heart-outline";
            default:
              break;
          }

          // You can return any component that you like here!
          return (
            <Ionicons
              name={iconName}
              size={typography.xxxlarge}
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
      <Tab.Screen name="Saved" component={Saved} />
      {/* <Tab.Screen name="First" component={First} />
        <Tab.Screen name="Login" component={Login} /> */}
      {/* <Tab.Screen name="Signup" component={Signup} /> */}
    </Tab.Navigator>
  );
};
