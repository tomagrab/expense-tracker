import { Text, View } from "react-native";
import { GlobalStyles } from "../../constants/Styles/GlobalStyles/GlobalStyles";

export default function ManageExpense() {
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
