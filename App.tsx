import { StatusBar } from "expo-status-bar";
import AllExpenses from "./screens/AllExpenses/AllExpenses";
import ManageExpense from "./screens/ManageExpenses/ManageExpenses";
import RecentExpenses from "./screens/RecentExpenses/RecentExpenses";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <BottomTabs.Navigator>
          <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses} />
          <BottomTabs.Screen name="AllExpenses" component={AllExpenses} />
          <BottomTabs.Screen name="ManageExpense" component={ManageExpense} />
        </BottomTabs.Navigator>
      </NavigationContainer>
    </>
  );
}
