import { ScrollView, Text } from "react-native";
import React from "react";
import ExpensesOutput from "../components/expenses-output/ExpensesOutput";
import { useNavigation } from "@react-navigation/native";

const AllExpenses = () => {
  return (
    <ScrollView>
      <ExpensesOutput periodName={"Total"} userexpenses={[]} />
    </ScrollView>
  );
};

export default AllExpenses;
