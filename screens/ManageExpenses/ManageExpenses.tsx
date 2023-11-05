import { Text, View } from "react-native";
import { GlobalStyles } from "../../constants/Styles/GlobalStyles/GlobalStyles";
import { DUMMY_EXPENSES } from "../../Data/dumm-expense";

export default function ManageExpense() {
  const expenses = DUMMY_EXPENSES;

  return (
    <View
      style={[
        GlobalStyles.flex_1,
        GlobalStyles.center_all,
        GlobalStyles.bg_red_500,
      ]}
    >
      <Text style={[GlobalStyles.text_base, GlobalStyles.text_white]}>
        ManageExpense Screen
      </Text>
    </View>
  );
}
