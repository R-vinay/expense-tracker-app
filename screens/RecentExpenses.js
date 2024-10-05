import { View, Text } from "react-native";
import React from "react";
import ExpensesOutput from "../components/expenses-output/ExpensesOutput";

const RecentExpenses = () => {
  return (
    <View>
      <ExpensesOutput userexpenses={[]} periodName={"Last 7 days"} />
    </View>
  );
};

export default RecentExpenses;
