import { useEffect, useState } from "react";
import { CategoryExpensesCard } from "../../Components/Cards/CategoryExpensesCard/CategoryExpensesCard";
import {
  StyledArrowLeft,
  StyledArrowRight,
  StyledExpensesPage,
  StyledMonthPicker,
  StyledMonthPickerText,
  StyledTotalText,
} from "./StyledExpenses";
import {
  getAmountsPerCategory,
  getFixedTransactionsAmount,
} from "../../Requests/transactionsRequests";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../Routes/Coordinator";
import { AddTransactionPopUp } from "../../Components/PopUps/AddTransactionPopUp/AddTransactionPopUp";
import { Loading } from "../../Components/Loading/Loading";
import { AddingPlus } from "../../Components/AddingPlus/AddingPlus";
import { useCallback } from "react";

export const ExpensesPage = () => {
  const navigate = useNavigate();

  const [amountsPerCategory, setAmountsPerCategory] = useState([]);
  const [fixedTransactionsAmount, setFixedTransactionsAmount] = useState(0);
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  const [monthPage, setMonthPage] = useState(new Date().getMonth() + 1);
  const [yearPage, setYearPage] = useState(new Date().getFullYear());
  const [showAddTransactionPopUp, setShowAddTransactionPopUp] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [totalMonthAmount, setTotalMonthAmount] = useState(0);
  const [updatePage, setUpdatePage] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const fetchData = useCallback(
    async (month, year) => {
      try {
        let total = 0;
        const config = {
          headers: {
            Authorization: token,
          },
        };
        const response = await getAmountsPerCategory(config, month, year);
        const fixedTransactionsResponse = await getFixedTransactionsAmount(
          config,
          month,
          year
        );

        if (response) {
          setAmountsPerCategory(response);
          if (fixedTransactionsResponse) {
            setFixedTransactionsAmount(fixedTransactionsResponse);
          }
          response.forEach((amount) => {
            total += Number(amount.total_amount);
          });

          total += fixedTransactionsResponse;
          setTotalMonthAmount(
            total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          );

          const dataToSave = {
            amountsPerCategory: response,
            fixedTransactionsAmount: fixedTransactionsResponse,
            totalMonthAmount: total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            }),
          };

          localStorage.setItem(`${month}-${year}`, JSON.stringify(dataToSave));
        }

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    },
    [token]
  );

  const handleMonthChange = async (operation) => {
    let newMonth = monthPage + operation;
    let newYear = yearPage;

    if (newMonth > 12) {
      newMonth = 1;
      newYear += 1;
    } else if (newMonth < 1) {
      newMonth = 12;
      newYear -= 1;
    }

    setMonthPage(newMonth);
    setYearPage(newYear);

    await fetchData(newMonth, newYear);
  };

  useEffect(() => {
    if (!token) {
      goToPage(navigate, "/login");
    }
  }, [token, navigate]);

  useEffect(() => {
    const localData = localStorage.getItem(`${monthPage}-${yearPage}`);

    if (localData) {
      const data = JSON.parse(localData);
      setAmountsPerCategory(data.amountsPerCategory);
      setFixedTransactionsAmount(data.fixedTransactionsAmount);
      setTotalMonthAmount(data.totalMonthAmount);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
    fetchData(monthPage, yearPage);

    setTimeout(() => setFadeIn(true), 500);
  }, [fetchData, monthPage, yearPage]);

  const months = {
    1: "Janeiro",
    2: "Fevereiro",
    3: "Março",
    4: "Abril",
    5: "Maio",
    6: "Junho",
    7: "Julho",
    8: "Agosto",
    9: "Setembro",
    10: "Outubro",
    11: "Novembro",
    12: "Dezembro",
  };

  const handleOnClick = (amount) => {
    goToPage(
      navigate,
      `/expenses/${amount.category_id}?month=${monthPage}&year=${yearPage}`
    );
  };

  const handleOnClickFixedTransactions = (amount) => {
    goToPage(navigate, `/expenses/custos-fixos`);
  };

  const cardsOfAmountPerCategory = amountsPerCategory.map((amount, index) => {
    return (
      <CategoryExpensesCard
        key={index}
        amount={amount}
        handleOnClick={handleOnClick}
      />
    );
  });

  const fixedTransactionInfo = {
    total_amount: fixedTransactionsAmount,
    category: "Custos Fixos",
  };

  const cardOfFixedTransactionsAmount = (
    <CategoryExpensesCard
      amount={fixedTransactionInfo}
      handleOnClick={handleOnClickFixedTransactions}
    />
  );

  return (
    <>
      {isLoading && <Loading svgSize="20vw" conteinerSize="90vh" />}

      {!isLoading && (
        <StyledExpensesPage fadeIn={fadeIn}>
          <StyledMonthPicker>
            <StyledArrowLeft onClick={() => handleMonthChange(-1)} />
            <StyledMonthPickerText>
              {`${months[monthPage]} / ${yearPage}`}
            </StyledMonthPickerText>
            <StyledArrowRight onClick={() => handleMonthChange(1)} />
          </StyledMonthPicker>

          {cardOfFixedTransactionsAmount}

          {amountsPerCategory.length > 0 && cardsOfAmountPerCategory}

          <StyledTotalText>Total: {totalMonthAmount}</StyledTotalText>

          <AddingPlus
            handleOnClick={() =>
              setShowAddTransactionPopUp(!showAddTransactionPopUp)
            }
          />

          <AddTransactionPopUp
            setUpdatePage={setUpdatePage}
            showAddTransactionPopUp={showAddTransactionPopUp}
            setShowAddTransactionPopUp={setShowAddTransactionPopUp}
            token={token}
          />
        </StyledExpensesPage>
      )}
    </>
  );
};
