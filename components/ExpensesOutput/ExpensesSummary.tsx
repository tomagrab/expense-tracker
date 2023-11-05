import { Text, View } from "react-native";
import { GlobalStyles } from "../../constants/Styles/GlobalStyles/GlobalStyles";
import { Expense } from "../../Types/Expenses";

type ExpensesSummaryProps = {
  period: string;
  expenses: Expense[];
};

export default function ExpensesSummary({
  period,
  expenses,
}: ExpensesSummaryProps) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={[GlobalStyles.flex_1]}>
      <Text style={[GlobalStyles.text_white]}>{period}</Text>
      <Text style={[GlobalStyles.text_white]}>{expensesSum.toFixed(2)}</Text>
    </View>
  );
}
