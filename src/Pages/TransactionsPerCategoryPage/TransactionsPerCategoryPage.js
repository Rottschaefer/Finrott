import { useEffect, useState } from "react";
import {
  getFixedTransactions,
  getTransactionsPerCategory,
} from "../../Requests/transactionsRequests";
import {
  BackButton,
  StyledTransactionsPerCategoryPage,
} from "./StyledTransactionsPerCategoryPage";
import { useLocation, useNavigate } from "react-router-dom";
import { CategoryTransactionsCard } from "../../Components/Cards/CategoryTransactionsCard/CategoryTransactionsCard";
import { goToPage } from "../../Routes/Coordinator";
import { Loading } from "../../Components/Loading/Loading";
import { useCallback } from "react";
import { AddTransactionPopUp } from "../../Components/PopUps/AddTransactionPopUp/AddTransactionPopUp";
import { AddingPlus } from "../../Components/AddingPlus/AddingPlus";
import categories from "../../Assets/categories.json";

export const TransactionsPerCategoryPage = () => {
  const navigate = useNavigate();

  const [transactionsPerCategory, setTransactionsPerCategory] = useState([]);
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  const [isLoading, setIsLoading] = useState(true);
  const [updatePage, setUpdatePage] = useState(false);
  const [showAddTransactionPopUp, setShowAddTransactionPopUp] = useState(false);

  const [fadeIn, setFadeIn] = useState(false);

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const month = queryParams.get("month") || "fixo";
  const year = queryParams.get("year") || "fixo";

  const categoryId = location.pathname.split("/")[2];

  const category = categories.results.find(
    (category) => category.id === categoryId
  );

  const fetchData = useCallback(async () => {
    try {
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

        const dataToSave = {
          transactionsPerCategory: response,
        };

        localStorage.setItem(
          `${month}--${year}--categoryId`,
          JSON.stringify(dataToSave)
        );
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    const localData = JSON.parse(
      localStorage.getItem(`${month}--${year}--categoryId`)
    );

    if (localData) {
      setTransactionsPerCategory(localData.transactionsPerCategory);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
    fetchData();

    setTimeout(() => setFadeIn(true), 500);
  }, [fetchData]);

  const handleBackOnClick = () => {
    setFadeIn(false);

    goToPage(navigate, `/expenses`);
  };

  return (
    <>
      {isLoading && <Loading svgSize="20vw" conteinerSize="90vh" />}

      {!isLoading && (
        <StyledTransactionsPerCategoryPage fadeIn={fadeIn}>
          <div>
            <BackButton onClick={handleBackOnClick}>Voltar</BackButton>
          </div>
          {transactionsPerCategory.map((transaction) => {
            return (
              <CategoryTransactionsCard
                transaction={transaction}
                setUpdatePage={setUpdatePage}
              />
            );
          })}
          <AddingPlus
            handleOnClick={() =>
              setShowAddTransactionPopUp(!showAddTransactionPopUp)
            }
          />
          <AddTransactionPopUp
            category={category}
            setUpdatePage={setUpdatePage}
            showAddTransactionPopUp={showAddTransactionPopUp}
            setShowAddTransactionPopUp={setShowAddTransactionPopUp}
            token={token}
          />
        </StyledTransactionsPerCategoryPage>
      )}
    </>
  );
};
