import axios from "axios";
const PATH = "https://expense-tracker-1f44d-default-rtdb.firebaseio.com";

export function storeExpense(expenseData) {
  axios.post(PATH + "/expenses.json", expenseData);
}
export async function fetchExpenses() {
  const response = await axios.get(PATH + "/expenses.json");
  const expenses = [];
  for (key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: response.data[key].date,
      desc: response.data[key].desc,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}
export function updateExpenses(id, expenseData) {
  console.log(id, expenseData);
  return axios.put(PATH + `/expenses/${id}.json`, expenseData);
}

export function deleteExpenses(id) {
  console.log(id);
  return axios.delete(PATH + `/expenses/${id}.json`);
}
