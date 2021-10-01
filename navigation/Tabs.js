import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Supports from "../screens/Supports";
import Bonus from "../screens/Bonus";
import Policy from "../screens/Policy";
import Profile from "../screens/Profile";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#FFFFFF",
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/icon/home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#DA291CFF" : "#56A8CBFF",
                }}
              />
              <Text
                style={{
                  color: focused ? "#DA291CFF" : "#56A8CBFF",
                  fontSize: 12,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Support"
        component={Supports}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/icon/support.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#DA291CFF" : "#56A8CBFF",
                }}
              />
              <Text
                style={{
                  color: focused ? "#DA291CFF" : "#56A8CBFF",
                  fontSize: 12,
                }}
              >
                Support
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Bonus"
        component={Bonus}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/icon/bonus.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#DA291CFF" : "#56A8CBFF",
                }}
              />
              <Text
                style={{
                  color: focused ? "#DA291CFF" : "#56A8CBFF",
                  fontSize: 12,
                }}
              >
                Bonus
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Policy"
        component={Policy}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/icon/insurance.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#DA291CFF" : "#56A8CBFF",
                }}
              />
              <Text
                style={{
                  color: focused ? "#DA291CFF" : "#56A8CBFF",
                  fontSize: 12,
                }}
              >
                Policy
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/icon/user.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#DA291CFF" : "#56A8CBFF",
                }}
              />
              <Text
                style={{
                  color: focused ? "#DA291CFF" : "#56A8CBFF",
                  fontSize: 12,
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#53A567FF",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default Tabs;
