import { useEffect, useState } from "react";
import { CategoryExpensesCard } from "../../Components/Cards/CategoryExpensesCard/CategoryExpensesCard";
import { StyledExpensesPage } from "./StyledExpenses";
import { getAmountsPerCategory } from "../../Requests/transactionsRequests";
import { response } from "msw";

export const ExpensesPage = () => {
  const [amountsPerCategory, setAmountsPerCategory] = useState([]);
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));

  const initialSetup = async () => {
    const config = {
      headers: {
        Authorization: token,
      },
    };

    return await getAmountsPerCategory(config);
  };

  useEffect(() => {
    initialSetup().then((response) => {
      if (response) {
        setAmountsPerCategory(response);
      }
    });
  }, []);

  return (
    <StyledExpensesPage>
      {amountsPerCategory.length > 0 &&
        amountsPerCategory.map((amount, index) => (
          <CategoryExpensesCard amount={amount} />
        ))}
    </StyledExpensesPage>
  );
};
