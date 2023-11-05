import { FlatList, Text, View } from "react-native";
import { Expense } from "../../Types/Expenses";

type ExpensesListProps = {
  expenses: Expense[];
};

function renderItem(item: Expense) {
  return (
    <View>
      <Text>{item.amount}</Text>
    </View>
  );
}

export default function ExpensesList({ expenses }: ExpensesListProps) {
  return (
    <FlatList
      data={expenses}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={(item) => item.id}
    />
  );
}
