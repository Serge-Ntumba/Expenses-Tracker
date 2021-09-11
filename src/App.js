import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Телефон",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "Компьютер", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Страхование",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Новый стол",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setexpenses] = useState(DUMMY_EXPENSES);

  const addEpenseHandler = (expense) => {
    setexpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addEpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
