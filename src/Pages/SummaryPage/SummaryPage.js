import axios from "axios";
import { BASE_URL } from "../../constants";
import { useEffect, useState } from "react";
import { AccountCard } from "../../Components/Cards/AccountCard/AccountCard";
import { StyledSummaryPage } from "./StyledSummaryPage";

export const SummaryPage = () => {
  const [accounts, setAccounts] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const setUp = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/accounts`, config);
      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  useEffect(() => {
    setUp().then((response) => {
      if (response) {
        setAccounts(response.data);
      }
    });
  }, []);

  return (
    <StyledSummaryPage>
      {accounts.map((account) => (
        <>
          <AccountCard
            color={account.bank_primary_color}
            bankName={account.bank_name}
            balance={account.balance}
          />
          {/* <img src={account.institution_image_url} />
          <div>{account.balance}</div> */}
        </>
      ))}
    </StyledSummaryPage>
  );
};
