import { useEffect, useState } from "react";
import { CategoryExpensesCard } from "../../Components/Cards/CategoryExpensesCard/CategoryExpensesCard";
import {
  StyledArrowLeft,
  StyledArrowRight,
  StyledExpensesPage,
  StyledMonthPicker,
  StyledMonthPickerText,
  StyledPlus,
} from "./StyledExpenses";
import { getAmountsPerCategory } from "../../Requests/transactionsRequests";
import { response } from "msw";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../Routes/Coordinator";
import { AddTransactionPopUp } from "../../Components/PopUps/AddTransactionPopUp/AddTransactionPopUp";

export const ExpensesPage = () => {
  const navigate = useNavigate();

  const [amountsPerCategory, setAmountsPerCategory] = useState([]);
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  const [monthPage, setMonthPage] = useState(new Date().getMonth() + 1);
  const [yearPage, setYearPage] = useState(new Date().getFullYear());
  const [showAddTransactionPopUp, setShowAddTransactionPopUp] = useState(false);

  const fetchData = async (month, year) => {
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const response = await getAmountsPerCategory(config, month, year);
    if (response) {
      setAmountsPerCategory(response);
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
    fetchData(monthPage, yearPage);
    console.log(amountsPerCategory);
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

  return (
    <StyledExpensesPage>
      <StyledMonthPicker>
        <StyledArrowLeft onClick={() => handleMonthChange(-1)} />
        <StyledMonthPickerText>
          {`${months[monthPage]} / ${yearPage}`}
        </StyledMonthPickerText>
        <StyledArrowRight onClick={() => handleMonthChange(1)} />
      </StyledMonthPicker>

      {amountsPerCategory.length > 0 &&
        amountsPerCategory.map((amount, index) => (
          <CategoryExpensesCard
            key={index}
            amount={amount}
            handleOnClick={handleOnClick}
          />
        ))}
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
  );
};
