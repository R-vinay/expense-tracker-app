import { StatusBar } from "expo-status-bar";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import AllExpenses from "./screens/AllExpenses";
import ManageExpenses from "./screens/ManageExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import { GlobalStyles } from "./constants/styles";
import { FontAwesome, FontAwesome6, Ionicons } from "@expo/vector-icons";
import IconButton from "./components/IconButton";
import ExpenseStore from "./store/ExpenseStore";
import { ExpenseStoreProvider } from "./store/ExpenseStore";
import React, { useContext } from "react";
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
import dayjs from "dayjs";
function ExpensesOverview({ navigation }) {
  const { expenses } = useContext(ExpenseStoreProvider);
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveBackgroundColor: "orange",
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "white",
        headerRight: () => (
          <IconButton
            name={"add-circle"}
            onPress={() => {
              navigation.navigate("ManageExpenses", {
                intention: "add",
                data: {
                  id: expenses.length + 1,
                  amount: 0,
                  desc: "",
                  date: dayjs().format("YYYY-MM-DD"),
                },
              });
            }}
            color={"white"}
            size={26}
          />
        ),
      }}
    >
      <BottomTab.Screen
        name="allexpenses"
        options={{
          title: "All Expenses",
          tabBarLabel: "Expenses",
          tabBarLabelStyle: { fontWeight: "bold", marginBottom: 8 },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="money" size={size} color={color} />
          ),
        }}
        component={AllExpenses}
      />

      <BottomTab.Screen
        name="recentexpenses"
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarLabelStyle: { fontWeight: "bold", marginBottom: 4 },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="clock-rotate-left" size={size} color={color} />
          ),
        }}
        component={RecentExpenses}
      />
    </BottomTab.Navigator>
  );
}
export default function App() {
  return (
    <ExpenseStore>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ExpensesOverView"
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="ManageExpenses"
            component={ManageExpenses}
            options={{ title: "Manage Expenses", presentation: "modal" }}
          />
          <Stack.Screen
            name="ExpensesOverView"
            component={ExpensesOverview}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ExpenseStore>
  );
}
