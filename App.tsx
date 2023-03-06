import React from "react";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";

import { DialoguesScreen, HomeScreen, LoginScreen, ProfileScreen } from "./src/screens";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MessageScreen: React.FC = () => {
  return <DialoguesScreen />
};

const ManagerScreen: React.FC = () => {
  return <></>;
};

const UsefulScreen: React.FC = () => {
  return <></>;
};

const HomeRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={({ route }) => ({
        tabBarLabelStyle: {
          fontFamily: "Roboto_400Regular",
        },
        tabBarIcon: ({ focused, color, size }) => {
          const iconColor = focused ? "#202020" : "gray";
          switch (route.name) {
            case "Feed":
              return <Fontisto name="photograph" size={24} color={iconColor} />;
            case "Messages":
              return <AntDesign name="message1" size={24} color={iconColor} />;
            case "Profile":
              return <AntDesign name="user" size={24} color={iconColor} />;
            case "Useful":
              return <AntDesign name="staro" size={24} color={iconColor} />;
            case "Manager":
              return (
                <FontAwesome5
                  name="kiss-wink-heart"
                  size={24}
                  color={iconColor}
                />
              );
          }
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarBadgeStyle: {
          maxWidth: "auto",
          maxHeight: 14,
          borderRadius: 7,
          fontSize: 10,
          fontWeight: 500,
          lineHeight: 14,
          textAlign: "center",
        },
      })}
    >
      <Tab.Screen
        name="Manager"
        component={ManagerScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Useful"
        component={UsefulScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessageScreen}
        options={{
          headerShown: false,
          tabBarBadge: 1000,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  const loggedIn = true;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <PaperProvider>
          <StatusBar style="auto" />
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Home"
              component={HomeRoutes}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
