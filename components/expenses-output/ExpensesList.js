import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { formatNumber } from "react-native-currency-input";
const ExpensesList = ({ expenses }) => {
  const navigation = useNavigation();
  function renderExpense(expenseData) {
    function handleExpensePress(expense) {
      navigation.navigate("ManageExpenses", {
        intention: "edit",
        data: expenseData.item,
      });
    }
    const value = expenseData.item.amount;
    const formattedValue = formatNumber(value, {
      separator: ".",
      prefix: "₹ ",
      precision: 2,
      delimiter: ",",
      signPosition: "beforePrefix",
    });
    return (
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={handleExpensePress}
        key={expenseData.item.id}
      >
        <View className="flex flex-row justify-between m-1 bg-red-400 border-red-500 p-4 rounded-lg">
          <View>
            <Text className="text-lg text-white font-bold">
              {expenseData.item.desc}
            </Text>
          </View>
          <View>
            <Text className="text-xl text-white font-bold">
              {formattedValue}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  }
  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={(expenseData) => renderExpense(expenseData)}
        keyExtractor={(expenseData) => {
          expenseData.id;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
export default ExpensesList;
