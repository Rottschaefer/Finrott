import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../Routes/Coordinator";
import { AccountCard } from "../../Components/Cards/AccountCard/AccountCard";
import {
  StyledSummaryPage,
  AccountsHeader,
  AccountsTitle,
  AccountsSubtitle,
  AccountsGrid,
  EmptyAccountsState,
} from "./StyledAccountsPage";
import { AddingPlus } from "../../Components/AddingPlus/AddingPlus";
import { AddAccountPopUp } from "../../Components/PopUps/AddAccountPopUp/AddAccountPopUp";
import { Loading } from "../../Components/Loading/Loading";
import { FaBuildingColumns } from "react-icons/fa6";

export const AccountsPage = () => {
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddAccountPopUp, setShowAddAccountPopUp] = useState(false);
  const [updatePage, setUpdatePage] = useState(false);
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (!token) {
      goToPage(navigate, "/login");
      return;
    }

    const fetchAccounts = async () => {
      try {
        const config = {
          headers: {
            Authorization: token,
          },
        };
        const response = await axios.get(`${BASE_URL}/accounts`, config);
        if (response && response.data) {
          setAccounts(response.data);
        }
      } catch (error) {
        console.error("Error fetching accounts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAccounts();
  }, [token, updatePage, navigate]);

  return (
    <StyledSummaryPage>
      <AccountsHeader>
        <div>
          <AccountsTitle>Contas Bancárias</AccountsTitle>
          <AccountsSubtitle>
            Gerencie seus saldos e contas conectadas
          </AccountsSubtitle>
        </div>
      </AccountsHeader>

      {isLoading ? (
        <div style={{ display: "flex", justifyContent: "center", padding: "4rem 0" }}>
          <Loading svgSize="50px" />
        </div>
      ) : accounts.length === 0 ? (
        <EmptyAccountsState>
          <FaBuildingColumns />
          <h4>Nenhuma conta cadastrada</h4>
          <p>Adicione suas contas bancárias manualmente para acompanhar seus saldos.</p>
        </EmptyAccountsState>
      ) : (
        <AccountsGrid>
          {accounts.map((account, index) => (
            <AccountCard key={account.id || index} account={account} />
          ))}
        </AccountsGrid>
      )}

      <AddingPlus
        label="Nova Conta"
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
