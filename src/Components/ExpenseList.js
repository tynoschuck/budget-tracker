import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
    const expenses = [
        { id:1231231231, name: "Shopping", cost: 50},
        { id:1231231232, name: "Food", cost: 40},    
        { id:1231231233, name: "Transports", cost: 10},
        { id:1231231234, name: "Bills", cost: 600},
        { id:1231231235, name: "Medicines", cost: 20},
    ];  

    return (
        <ul>
            {expenses.map((expenses) => (
                <ExpenseItem
                    id = {expenses.id}
                    name = {expenses.name}
                    cost = {expenses.cost} />
            ))}
        </ul>
    );
};

export default ExpenseList