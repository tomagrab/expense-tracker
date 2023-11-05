import { StatusBar } from "expo-status-bar";
import AllExpenses from "./screens/AllExpenses/AllExpenses";
import ManageExpense from "./screens/ManageExpenses/ManageExpenses";
import RecentExpenses from "./screens/RecentExpenses/RecentExpenses";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClock, faList, faPen } from "@fortawesome/free-solid-svg-icons";
import FaButton from "./components/UI/faButton/faButton";
import {
  GlobalStyles,
  colorScheme,
} from "./constants/Styles/GlobalStyles/GlobalStyles";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview({ navigation }: any) {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colorScheme.colors.primary500,
        },
        headerTintColor: GlobalStyles.white.color,
        headerTitleStyle: {
          fontWeight: GlobalStyles.text_bold.fontWeight,
        },
        tabBarStyle: {
          backgroundColor: colorScheme.colors.primary500,
        },
        tabBarActiveTintColor: GlobalStyles.white.color,
      }}
    >
      <BottomTabs.Screen
        name="Recent Expenses"
        component={RecentExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faClock} color={color} size={size} />
          ),
          headerRight: () => (
            <FaButton
              icon={faPen}
              onPress={() => navigation.navigate("Manage Expenses")}
              style={[GlobalStyles.mr_4, GlobalStyles.mt_4]}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="All Expenses"
        component={AllExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faList} color={color} size={size} />
          ),
          headerRight: () => (
            <FaButton
              icon={faPen}
              onPress={() => navigation.navigate("Manage Expenses")}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Expenses"
            component={ExpensesOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Manage Expenses"
            component={ManageExpense}
            options={{
              presentation: "modal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
