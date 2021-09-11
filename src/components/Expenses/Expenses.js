import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (seletedYear) => {
    setFilteredYear(seletedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        seleted={filteredYear}
        onSelectYear={filterChangeHandler}
      />

      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
