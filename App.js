import React from "react";
import { StyleSheet, Platform, SafeAreaView } from "react-native";

import { Element } from "./components/Element";
import { Settings } from "./components/Settings";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Entypo, FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Trending"
            component={Element}
            options={{
              tabBarIcon: () => <Entypo name="star" size={24} color="black" />,
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarIcon: () => (
                <FontAwesome5 name="cog" size={24} color="black" />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Constants.statusBarHeight,
    paddingTop: Platform.OS === "android" ? 40 : 20,
    flex: 1,
  },
});
