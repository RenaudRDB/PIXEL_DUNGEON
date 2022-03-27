import React from "react";
import { ROUTES } from "./routes";

import { ActionScreen } from "../screens/ActionScreen";
import { MapScreen } from "../screens/MapScreen";
import { StatScreen } from "../screens/StatScreen";
import { ProfilScreen } from "../screens/ProfilScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{ headerShown: false }} name={ROUTES.ACTION} component={ActionScreen} />
      <Tab.Screen options={{ headerShown: false }} name={ROUTES.MAP}component={MapScreen} />
      <Tab.Screen options={{ headerShown: false }} name={ROUTES.STAT} component={StatScreen} />
      <Tab.Screen options={{ headerShown: false }} name={ROUTES.PROFIL} component={ProfilScreen} />
    </Tab.Navigator>
  );
};