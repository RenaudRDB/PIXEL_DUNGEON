import React from "react";
import { ROUTES } from "./routes";
import { Image } from "react-native";

import { ActionScreen } from "../screens/ActionScreen";
import { MapScreen } from "../screens/MapScreen";
import { StatScreen } from "../screens/StatScreen";
import { ProfilScreen } from "../screens/ProfilScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator 
    // screenOptions={({ route }) => ({
    //   tabBarIcon: ({ focused }) => {
    //     let iconName;
    //     if (route.name === ROUTES.ACTION) {
    //       iconName = focused
    //         ? require("../assets/.png")
    //         : require("../assets/.png");
    //     } else if (route.name === ROUTES.MAP) {
    //       iconName = focused
    //         ? require("../assets/.png")
    //         : require("../assets/.png");
    //     }
    //     return <Image source={iconName} />;
    //   },
    // })}
    >
      <Tab.Screen options={{ headerShown: false }} name={ROUTES.ACTION} component={ActionScreen} />
      <Tab.Screen options={{ headerShown: false }} name={ROUTES.MAP}component={MapScreen} />
      <Tab.Screen options={{ headerShown: false }} name={ROUTES.STAT} component={StatScreen} />
      <Tab.Screen options={{ headerShown: false }} name={ROUTES.PROFIL} component={ProfilScreen} />
    </Tab.Navigator>
  );
};