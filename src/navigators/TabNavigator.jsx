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
      <Tab.Screen name={ROUTES.ACTION} component={ActionScreen} />
      <Tab.Screen name={ROUTES.MAP}component={MapScreen} />
      <Tab.Screen name={ROUTES.STAT} component={StatScreen} />
      <Tab.Screen name={ROUTES.PROFIL} component={ProfilScreen} />
    </Tab.Navigator>
  );
};