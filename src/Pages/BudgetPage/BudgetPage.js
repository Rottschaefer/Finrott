import { useEffect, useState } from "react";
import { BudgetCard } from "../../Components/Cards/BudgetCard/BudgetCard.js";
import {
  StyledBudgetCardConteiner,
  StyledBudgetPage,
  StyledFadeforPopUp,
  StyledIncome,
  StyledIncomeText,
  StyledNewExpense,
} from "./StyledBudgetPage.js";
import { getExpenses } from "../../Requests/expenseRequests.js";
import { AddExpensePopUp } from "../../Components/PopUps/AddExpensePopUp/AddExpensePopUp.js";

export const BudgetPage = () => {
  const [expenses, setExpenses] = useState([]);
  const [addExpense, setAddExpense] = useState(false);

  useEffect(() => {
    handleExpenses();
  }, []);

  const handleExpenses = async () => {
    try {
      const output = await getExpenses();

      setExpenses(output);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <StyledBudgetPage>
      <StyledNewExpense
        onClick={() => {
          setAddExpense(!addExpense);
        }}
      >
        + Adicionar gasto
      </StyledNewExpense>
      <StyledIncome>
        <StyledIncomeText>Quanto posso gastar:</StyledIncomeText>
        <StyledIncomeText>R$1500</StyledIncomeText>
      </StyledIncome>
      {expenses && (
        <StyledBudgetCardConteiner>
          {expenses.map((expense) => {
            return (
              <BudgetCard
                key={expense.id}
                expense={expense}
                setAddExpense={setAddExpense}
              />
            );
          })}
        </StyledBudgetCardConteiner>
      )}
      {addExpense && (
        <>
          <AddExpensePopUp
            setAddExpense={setAddExpense}
            handleExpenses={handleExpenses}
          />
          <StyledFadeforPopUp />
        </>
      )}
    </StyledBudgetPage>
  );
};
