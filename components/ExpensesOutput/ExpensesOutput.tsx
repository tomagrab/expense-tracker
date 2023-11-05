import { FlatList, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { Expense } from "../../Types/Expenses";

type ExpensesOutputProps = {
  period: string;
  expenses: Expense[];
};

export default function ExpensesOutput({
  period,
  expenses,
}: ExpensesOutputProps) {
  return (
    <View>
      <ExpensesSummary period={period} expenses={expenses} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}
