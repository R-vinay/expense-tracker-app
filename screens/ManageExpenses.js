import { View, TextInput, Text, Alert } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState, useContext } from "react";
import DateTimePicker from "react-native-ui-datepicker";
import CurrencyInput from "react-native-currency-input";
import { ExpenseStoreProvider } from "../store/ExpenseStore";
import dayjs from "dayjs";
import Button from "../components/Button";
const ManageExpenses = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { intention, data } = route.params;
  navigation.setOptions({ title: intention + " Expense" });
  const [editData, setEditData] = useState({ ...data });
  const [date, setDate] = useState(dayjs(editData?.date));
  useEffect(() => {
    let formattedDate = dayjs(date).format("YYYY-MM-DD");
    setEditData({ ...editData, date: formattedDate });
  }, [date]);

  const [value, setValue] = useState(editData.amount);
  useEffect(() => {
    setEditData({ ...editData, amount: value });
  }, [value]);
  const { addExpense, updateExpense, deleteExpense } =
    useContext(ExpenseStoreProvider);
  function addNewExpense() {
    if (editData.amount === "" || editData.amount <= 0) {
      console.log(editData);
      Alert.alert("Invalid Amount", "Amount cannot be zero or less than it", [
        { text: "Okay", style: "destructive" },
      ]);
    } else if (editData.desc === "" || editData.desc.length < 5) {
      Alert.alert(
        "Invalid Expense",
        "Expense name cannot be less than 5 chars",
        [{ text: "Okay", style: "destructive" }]
      );
    } else {
      setEditData({ ...editData, amount: value });
      addExpense(editData);
      navigation.navigate("allexpenses");
      console.log(editData);
    }
  }
  function updateNewExpense() {
    if (editData.amount === "" || editData.amount <= 0) {
      console.log(editData);
      Alert.alert("Invalid Amount", "Amount cannot be zero or less than it", [
        { text: "Okay", style: "destructive" },
      ]);
    } else if (editData.desc === "" || editData.desc.length < 5) {
      Alert.alert(
        "Invalid Expense",
        "Expense name cannot be less than 5 chars",
        [{ text: "Okay", style: "destructive" }]
      );
    } else {
      updateExpense(editData);
      navigation.navigate("allexpenses");
    }
  }
  function deleteCurrentExpense() {
    deleteExpense(editData.id);
    navigation.navigate("allexpenses");
  }
  return (
    <View className="">
      <TextInput
        className="border-2 p-2 m-2 rounded-md border-indigo-700 text-md font-bold"
        value={editData?.desc}
        placeholder="Expense Name"
        onChangeText={(enteredText) =>
          setEditData({ ...editData, desc: enteredText })
        }
      />
      <CurrencyInput
        className="border-2 p-2 m-2 rounded-md border-indigo-700 text-md font-bold"
        value={value}
        onChangeValue={setValue}
        prefix="₹"
        delimiter="," // Use comma for thousands
        minValue={0} // Minimum value
        separator="."
        precision={0}
        onChangeText={(formattedValue) => {
          const numericValue = formattedValue.replace(/₹|,/g, "");
          const numberValue = parseFloat(numericValue);
          // setEditData({ ...editData, amount: numberValue });
          console.log(numberValue);
        }}
      />
      <Text className="text-center text-xl font-bold">Expense Date</Text>
      <DateTimePicker
        mode="single"
        date={date}
        onChange={(params) => setDate(params.date)}
        maxDate={dayjs()}
      />
      {intention === "add" ? (
        <Button onPress={addNewExpense} title={"Add Expense"} type="primary" />
      ) : (
        <View className="flex flex-row justify-evenly">
          <Button
            onPress={deleteCurrentExpense}
            title={"Delete Expense"}
            type="danger"
          />
          <Button
            onPress={updateNewExpense}
            title={"Update Changes"}
            type="primary"
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpenses;
