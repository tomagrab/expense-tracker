import { Expense } from "../Types/Expenses";

export const DUMMY_EXPENSES: Expense[] = [
  {
    id: "e1",
    amount: 94.12,
    description: "Car Insurance",
    date: new Date(2021, 1, 1),
  },
  {
    id: "e2",
    amount: 122.22,
    description: "Car Payment",
    date: new Date(2021, 3, 2),
  },
  {
    id: "e3",
    amount: 908.89,
    description: "Mortgage",
    date: new Date(2021, 4, 3),
  },
  {
    id: "e4",
    amount: 102.33,
    description: "Health Insurance",
    date: new Date(2021, 2, 4),
  },
  {
    id: "e5",
    amount: 299.33,
    description: "Hospital Bill",
    date: new Date(2021, 10, 5),
  },
];
