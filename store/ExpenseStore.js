import React, { createContext, useState } from "react";

// const ExpenseStore = createContext({});
// export default ExpenseStore;
const DUMMY_EXPENSES = [
  { id: 1, amount: 3499.99, desc: "Groceries", date: "2024-09-15" },
  { id: 2, amount: 9000.5, desc: "Electricity Bill", date: "2024-09-10" },
  { id: 3, amount: 7000.0, desc: "Dining Out", date: "2024-09-12" },
  { id: 4, amount: 990.3, desc: "Coffee", date: "2024-09-14" },
  { id: 5, amount: 27500.75, desc: "Rent", date: "2024-09-01" },
  { id: 6, amount: 4500.25, desc: "Gym Membership", date: "2024-09-05" },
  { id: 7, amount: 1500.49, desc: "Movie Ticket", date: "2024-09-20" },
  { id: 8, amount: 16500.0, desc: "Car Maintenance", date: "2024-09-18" },
  { id: 9, amount: 2500.9, desc: "Books", date: "2024-09-21" },
  { id: 10, amount: 5625.0, desc: "Internet Bill", date: "2024-09-07" },
];
export const ExpenseStoreProvider = createContext({
  expenses: [],
  addExpense: () => {},
  updateExpense: () => {},
  deleteExpense: () => {},
});
const ExpenseStore = ({ children }) => {
  const [expenses, setExpenses] = useState([...DUMMY_EXPENSES]);
  function addExpense(expense) {
    setExpenses([expense, ...expenses]);
  }
  function updateExpense(given_expense) {
    setExpenses((prevValues) => {
      return prevValues.map((expense) => {
        return expense.id === given_expense.id ? given_expense : expense;
      });
    });
  }
  function deleteExpense(id) {
    setExpenses((prevValues) =>
      prevValues.filter((expense) => expense.id !== id)
    );
  }
  return (
    <ExpenseStoreProvider.Provider
      value={{
        expenses: expenses,
        addExpense: addExpense,
        updateExpense: updateExpense,
        deleteExpense: deleteExpense,
      }}
    >
      {children}
    </ExpenseStoreProvider.Provider>
  );
};

export default ExpenseStore;
