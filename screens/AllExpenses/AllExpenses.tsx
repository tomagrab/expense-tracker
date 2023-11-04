import { Text, View } from "react-native";
import { GlobalStyles } from "../../constants/Styles/GlobalStyles/GlobalStyles";

export default function AllExpenses() {
  return (
    <View
      style={[
        GlobalStyles.flex_1,
        GlobalStyles.center_all,
        GlobalStyles.bg_blue_500,
      ]}
    >
      <Text style={[GlobalStyles.text_base, GlobalStyles.text_white]}>
        AllExpenses Screen
      </Text>
    </View>
  );
}
