import { useEffect, useState } from "react";
import { CategoryExpensesCard } from "../../Components/Cards/CategoryExpensesCard/CategoryExpensesCard";
import {
  StyledArrowLeft,
  StyledArrowRight,
  StyledExpensesPage,
  StyledMonthPicker,
  StyledMonthPickerText,
  StyledPlus,
  StyledTotalText,
} from "./StyledExpenses";
import { getAmountsPerCategory } from "../../Requests/transactionsRequests";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../Routes/Coordinator";
import { AddTransactionPopUp } from "../../Components/PopUps/AddTransactionPopUp/AddTransactionPopUp";
import { Loading } from "../../Components/Loading/Loading";

export const ExpensesPage = () => {
  const navigate = useNavigate();

  const [amountsPerCategory, setAmountsPerCategory] = useState([]);
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  const [monthPage, setMonthPage] = useState(new Date().getMonth() + 1);
  const [yearPage, setYearPage] = useState(new Date().getFullYear());
  const [showAddTransactionPopUp, setShowAddTransactionPopUp] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [totalMonthAmount, setTotalMonthAmount] = useState(0);

  const fetchData = async (month, year) => {
    try {
      setIsLoading(true);

      let total = 0;
      const config = {
        headers: {
          Authorization: token,
        },
      };
      const response = await getAmountsPerCategory(config, month, year);
      if (response) {
        setAmountsPerCategory(response);
        response.map((amount) => {
          total += Number(amount.total_amount);
        });
        setTotalMonthAmount(
          total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
        );
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  const handleMonthChange = async (operation) => {
    let newMonth = monthPage + operation;
    let newYear = yearPage;

    if (newMonth > 12) {
      newMonth = 1;
      newYear = yearPage + 1;
    } else if (newMonth < 1) {
      newMonth = 12;
      newYear = yearPage - 1;
    }

    setMonthPage(newMonth);
    setYearPage(newYear);

    await fetchData(newMonth, newYear);
  };

  useEffect(() => {
    if (!token) {
      goToPage(navigate, "/login");
    }
    fetchData(monthPage, yearPage);
  }, [monthPage, yearPage]);

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

  const cardsOfAmountPerCategory = amountsPerCategory.map((amount, index) => {
    return (
      <CategoryExpensesCard
        key={index}
        amount={amount}
        handleOnClick={handleOnClick}
      />
    );
  });

  return (
    <>
      {isLoading && <Loading svgSize="20vw" conteinerSize="90vh" />}

      {!isLoading && (
        <StyledExpensesPage>
          <StyledMonthPicker>
            <StyledArrowLeft onClick={() => handleMonthChange(-1)} />
            <StyledMonthPickerText>
              {`${months[monthPage]} / ${yearPage}`}
            </StyledMonthPickerText>
            <StyledArrowRight onClick={() => handleMonthChange(1)} />
          </StyledMonthPicker>

          {amountsPerCategory.length > 0 && cardsOfAmountPerCategory}

          <StyledTotalText>Total: {totalMonthAmount}</StyledTotalText>

          <StyledPlus
            onClick={() => setShowAddTransactionPopUp(!showAddTransactionPopUp)}
          />

          {showAddTransactionPopUp && (
            <AddTransactionPopUp
              setShowAddTransactionPopUp={setShowAddTransactionPopUp}
              token={token}
            />
          )}
        </StyledExpensesPage>
      )}
    </>
  );
};
