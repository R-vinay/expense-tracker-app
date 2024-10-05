import { View, Text, FlatList } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import { ExpenseStoreProvider } from "../../store/ExpenseStore";
import { useContext } from "react";
import ExpensesList from "./ExpensesList";
import dayjs from "dayjs";

const ExpensesOutput = ({ userexpenses, periodName }) => {
  const { expenses } = useContext(ExpenseStoreProvider);
  let allExpenses = expenses;
  if (periodName === "Last 7 days") {
    const today = dayjs();
    const sevenDaysAgo = dayjs(today).subtract(7, "day");
    const LastSevenDayExpenses = allExpenses.filter((expense) => {
      const expenseDate = dayjs(expense.date);
      return expenseDate.isAfter(sevenDaysAgo);
    });
    allExpenses = LastSevenDayExpenses;
  }
  return (
    <View>
      <ExpensesSummary expenses={allExpenses} periodName={periodName} />
      <ExpensesList expenses={allExpenses} />
    </View>
  );
};

export default ExpensesOutput;
