import { View, Text } from "react-native";
import React from "react";
import { formatNumber } from "react-native-currency-input";
const ExpensesSummary = ({ expenses, periodName }) => {
  const expenseSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  const formattedValue = formatNumber(expenseSum, {
    separator: ".",
    prefix: "₹ ",
    precision: 2,
    delimiter: ",",
  });
  return (
    <View className="flex flex-row justify-between bg-purple-300 p-4">
      <Text className="text-lg font-bold text-white">{periodName}</Text>
      <Text className="text-lg font-bold text-red-500">- {formattedValue}</Text>
    </View>
  );
};

export default ExpensesSummary;
