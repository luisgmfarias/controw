import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./app/views/Login";
import Wallet from "./app/views/Wallet";
import Stats from "./app/views/Stats";
import Help from "./app/views/Help";
import Profile from "./app/views/Profile";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MyAssets from "./app/views/MyAssets";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const isLogged = true;

function WalletScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Carteira" component={Wallet} />
      <Stack.Screen name="Meus ativos" component={MyAssets} />
    </Stack.Navigator>
  );
}

function LoginScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginPage" component={Login} />
      <Stack.Screen name="LandingPageScreen" component={LandingPage} />
    </Stack.Navigator>
  );
}

function LandingPage() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Minha carteira") {
            iconName = focused ? "wallet" : "wallet-outline";
          } else if (route.name === "Estatística") {
            iconName = focused ? "chart-donut" : "chart-donut";
          } else if (route.name === "Ajuda") {
            iconName = focused ? "help" : "help";
          } else if (route.name === "Perfil") {
            iconName = focused ? "face-profile" : "face-profile";
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "#f2f2f2",
        style: [
          {
            backgroundColor: "#260144",
            paddingBottom: 3,
            borderTopColor: "#260144",
          },
        ],
      }}
    >
      <Tab.Screen name="Minha carteira" component={WalletScreen} />
      <Tab.Screen name="Estatística" component={Stats} />
      <Tab.Screen name="Ajuda" component={Help} />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <LoginScreen />
    </NavigationContainer>
  );
}
