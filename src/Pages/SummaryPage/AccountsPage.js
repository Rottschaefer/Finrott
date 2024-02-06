import axios from "axios";
import { BASE_URL } from "../../constants";
import { useEffect, useState } from "react";
import { AccountCard } from "../../Components/Cards/AccountCard/AccountCard";
import { StyledSummaryPage } from "./StyledAccountsPage";
import { AddingPlus } from "../../Components/AddingPlus/AddingPlus";
import { AddAccountPopUp } from "../../Components/PopUps/AddAccountPopUp/AddAccountPopUp";

export const AccountsPage = () => {
  const [accounts, setAccounts] = useState([]);
  const [showAddAccountPopUp, setShowAddAccountPopUp] = useState(false);
  const [updatePage, setUpdatePage] = useState(false);
  const token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const setUp = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/accounts`, config);
      console.log(response.data);
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
  }, [updatePage]);

  return (
    <StyledSummaryPage>
      {accounts.map((account) => (
        <>
          <AccountCard account={account} />
        </>
      ))}
      <AddingPlus
        handleOnClick={() => setShowAddAccountPopUp(!showAddAccountPopUp)}
      />
      {showAddAccountPopUp && (
        <AddAccountPopUp
          setUpdatePage={setUpdatePage}
          setShowAddAccountPopUp={setShowAddAccountPopUp}
          token={token}
        />
      )}
    </StyledSummaryPage>
  );
};
