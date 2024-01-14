import { useEffect, useState } from "react";
import { getTransactionsPerCategory } from "../../Requests/transactionsRequests";
import { StyledTransactionsPerCategoryPage } from "./StyledTransactionsPerCategoryPage";
import { useLocation, useNavigate } from "react-router-dom";
import { CategoryTransactionsCard } from "../../Components/Cards/CategoryTransactionsCard/CategoryTransactionsCard";
import { goToPage } from "../../Routes/Coordinator";

export const TransactionsPerCategoryPage = () => {
  const navigate = useNavigate();

  const [transactionsPerCategory, setTransactionsPerCategory] = useState([]);
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const month = queryParams.get("month");
  const year = queryParams.get("year");

  const categoryId = location.pathname.split("/")[2];

  const fetchData = async () => {
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const response = await getTransactionsPerCategory(
      config,
      month,
      year,
      categoryId
    );
    if (response) {
      setTransactionsPerCategory(response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnClick = () => {
    goToPage(navigate, `/expenses`);
  };
  return (
    <StyledTransactionsPerCategoryPage>
      <h1 onClick={handleOnClick}>Voltar</h1>
      {transactionsPerCategory.map((transaction) => {
        return <CategoryTransactionsCard transaction={transaction} />;
      })}
    </StyledTransactionsPerCategoryPage>
  );
};
