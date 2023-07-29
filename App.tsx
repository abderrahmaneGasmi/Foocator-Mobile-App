import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./pages/Dashboard";
import First from "./pages/First";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

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

  const Stack = createNativeStackNavigator();
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
        <Stack.Navigator>
          <Stack.Screen
            name="First"
            component={First}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
    // <ExpoStatusBar style="auto" />
    // </>
  );
}
