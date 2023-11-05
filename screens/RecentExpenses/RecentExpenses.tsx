import { Text, View } from "react-native";
import { GlobalStyles } from "../../constants/Styles/GlobalStyles/GlobalStyles";
import ExpensesOutput from "../../components/ExpensesOutput/ExpensesOutput";
import { DUMMY_EXPENSES } from "../../Data/dumm-expense";

export default function RecentExpenses() {
  const expenses = DUMMY_EXPENSES;
  return (
    <View
      style={[
        GlobalStyles.flex_1,
        GlobalStyles.center_all,
        GlobalStyles.bg_green_500,
      ]}
    >
      <ExpensesOutput period="Recent" expenses={expenses} />
    </View>
  );
}
