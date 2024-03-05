import { useEffect, useState } from "react";
import {
  getFixedTransactions,
  getTransactionsPerCategory,
} from "../../Requests/transactionsRequests";
import { StyledTransactionsPerCategoryPage } from "./StyledTransactionsPerCategoryPage";
import { useLocation, useNavigate } from "react-router-dom";
import { CategoryTransactionsCard } from "../../Components/Cards/CategoryTransactionsCard/CategoryTransactionsCard";
import { goToPage } from "../../Routes/Coordinator";
import { Loading } from "../../Components/Loading/Loading";
import FadeIn from "react-fade-in/lib/FadeIn";

export const TransactionsPerCategoryPage = () => {
  const navigate = useNavigate();

  const [transactionsPerCategory, setTransactionsPerCategory] = useState([]);
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  const [isLoading, setIsLoading] = useState(true);
  const [updatePage, setUpdatePage] = useState(false);

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const month = queryParams.get("month");
  const year = queryParams.get("year");

  const categoryId = location.pathname.split("/")[2];

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const config = {
        headers: {
          Authorization: token,
        },
      };

      let response;

      if (categoryId === "custos-fixos") {
        response = await getFixedTransactions(config);
      } else {
        response = await getTransactionsPerCategory(
          config,
          month,
          year,
          categoryId
        );
      }

      if (response) {
        setTransactionsPerCategory(response);
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [updatePage]);

  const handleBackOnClick = () => {
    goToPage(navigate, `/expenses`);
  };

  return (
    <FadeIn>
      {isLoading && <Loading svgSize="20vw" conteinerSize="90vh" />}

      {!isLoading && (
        <StyledTransactionsPerCategoryPage>
          <h1 onClick={handleBackOnClick}>Voltar</h1>

          {transactionsPerCategory.map((transaction) => {
            return (
              <CategoryTransactionsCard
                transaction={transaction}
                setUpdatePage={setUpdatePage}
              />
            );
          })}
        </StyledTransactionsPerCategoryPage>
      )}
    </FadeIn>
  );
};
