import React, { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getFixedTransactions,
  getTransactionsPerCategory,
  deleteTransaction,
  deleteFixedTransaction,
} from "../../Requests/transactionsRequests";
import { goToPage } from "../../Routes/Coordinator";
import { CategoryTransactionsCard } from "../../Components/Cards/CategoryTransactionsCard/CategoryTransactionsCard";
import { Loading } from "../../Components/Loading/Loading";
import { AddingPlus } from "../../Components/AddingPlus/AddingPlus";
import { AddTransactionPopUp } from "../../Components/PopUps/AddTransactionPopUp/AddTransactionPopUp";
import { TransactionInfoPopUp } from "../../Components/PopUps/TransactionInfoPopUp/TransactionInfoPopUp";
import { getCategoryMeta } from "../../Assets/categoriesIcons";
import categories from "../../Assets/categories.json";
import {
  StyledTransactionsPerCategoryPage,
  CategoryHeaderCard,
  HeaderTopRow,
  BackButton,
  CategoryMetaBadge,
  HeaderMainContent,
  CategoryTitleGroup,
  CategoryIconBox,
  CategoryHeading,
  CategoryCount,
  TotalAmountBadge,
  TotalLabel,
  TotalValue,
  TransactionsList,
  EmptyTransactionsState,
} from "./StyledTransactionsPerCategoryPage";
import { FaArrowLeft, FaReceipt } from "react-icons/fa6";

const MONTHS = [
  "",
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export const TransactionsPerCategoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [token] = useState(JSON.parse(localStorage.getItem("token")));
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const [updatePage, setUpdatePage] = useState(false);
  const [showAddTransactionPopUp, setShowAddTransactionPopUp] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);

  const queryParams = new URLSearchParams(location.search);
  const month = queryParams.get("month") || `${new Date().getMonth() + 1}`;
  const year = queryParams.get("year") || `${new Date().getFullYear()}`;
  const categoryId = location.pathname.split("/")[2];

  const isFixedCategory = categoryId === "custos-fixos";

  const matchedCategory = categories.results.find(
    (cat) => cat.id === categoryId
  );

  const categoryName = isFixedCategory
    ? "Custos Fixos"
    : (matchedCategory && matchedCategory.descriptionTranslated) || "Transações";

  const meta = getCategoryMeta(categoryName);
  const IconComponent = meta.svg;

  const fetchData = useCallback(async () => {
    try {
      const config = {
        headers: {
          Authorization: token,
        },
      };

      let response = [];
      if (isFixedCategory) {
        response = await getFixedTransactions(config);
      } else {
        response = await getTransactionsPerCategory(
          config,
          month,
          year,
          categoryId
        );
      }

      const list = response || [];
      setTransactions(list);

      // Save to localStorage with fixed unique key
      const dataToSave = { transactionsPerCategory: list };
      localStorage.setItem(
        `${month}--${year}--${categoryId}`,
        JSON.stringify(dataToSave)
      );

      setIsLoading(false);
      setFadeIn(true);
    } catch (error) {
      setIsLoading(false);
      setFadeIn(true);
    }
  }, [token, month, year, categoryId, isFixedCategory]);

  useEffect(() => {
    const cached = localStorage.getItem(`${month}--${year}--${categoryId}`);
    if (cached) {
      try {
        const data = JSON.parse(cached);
        setTransactions(data.transactionsPerCategory || []);
        setIsLoading(false);
        setFadeIn(true);
      } catch {
        setIsLoading(true);
      }
    } else {
      setIsLoading(true);
    }

    fetchData();
  }, [fetchData, month, year, categoryId, updatePage]);

  const handleBackOnClick = () => {
    goToPage(navigate, "/expenses");
  };

  const handleDeleteItem = async (transaction) => {
    const confirmDelete = window.confirm("Deseja realmente excluir esta transação?");
    if (!confirmDelete) return;

    try {
      const config = {
        headers: {
          Authorization: token,
        },
      };

      if (isFixedCategory || transaction.is_a_fixed_transaction) {
        await deleteFixedTransaction(config, transaction.id);
      } else {
        await deleteTransaction(config, transaction.id);
      }

      setUpdatePage((prev) => !prev);
    } catch (error) {
      alert("Erro ao excluir transação.");
    }
  };

  const totalSum = transactions.reduce(
    (acc, curr) => acc + (Number(curr.amount) || 0),
    0
  );

  const formattedTotal = totalSum.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const monthLabel = MONTHS[Number(month)] ? `${MONTHS[Number(month)]} de ${year}` : "Recorrente";

  return (
    <>
      {isLoading ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
          <Loading svgSize="60px" />
        </div>
      ) : (
        <StyledTransactionsPerCategoryPage fadeIn={fadeIn}>
          {/* Header Card */}
          <CategoryHeaderCard>
            <HeaderTopRow>
              <CategoryMetaBadge>{monthLabel}</CategoryMetaBadge>
            </HeaderTopRow>

            <BackButton onClick={handleBackOnClick}>
              <FaArrowLeft />
              <span>Despesas</span>
            </BackButton>

            <HeaderMainContent>
              <CategoryTitleGroup>
                <CategoryIconBox bg={meta.bg} color={meta.color}>
                  <IconComponent />
                </CategoryIconBox>
                <div>
                  <CategoryHeading>{categoryName}</CategoryHeading>
                  <CategoryCount>
                    {transactions.length}{" "}
                    {transactions.length === 1 ? "transação registrada" : "transações registradas"}
                  </CategoryCount>
                </div>
              </CategoryTitleGroup>

              <TotalAmountBadge>
                <TotalLabel>Total na categoria</TotalLabel>
                <TotalValue>{formattedTotal}</TotalValue>
              </TotalAmountBadge>
            </HeaderMainContent>
          </CategoryHeaderCard>

          {/* List of 3D Flip Cards */}
          {transactions.length === 0 ? (
            <EmptyTransactionsState>
              <FaReceipt />
              <h4>Nenhuma transação nesta categoria</h4>
              <p>
                Toque no botão "+" para registrar seu primeiro gasto em{" "}
                <strong>{categoryName}</strong>.
              </p>
            </EmptyTransactionsState>
          ) : (
            <TransactionsList>
              {transactions.map((tx) => (
                <CategoryTransactionsCard
                  key={tx.id}
                  transaction={tx}
                  setUpdatePage={setUpdatePage}
                  onEdit={(item) => setEditingTransaction(item)}
                  onDelete={handleDeleteItem}
                />
              ))}
            </TransactionsList>
          )}

          {/* Floating Action Button */}
          <AddingPlus
            label="Adicionar Gasto"
            handleOnClick={() => setShowAddTransactionPopUp(true)}
          />

          {/* Add Modal */}
          <AddTransactionPopUp
            category={matchedCategory || { descriptionTranslated: categoryName }}
            setUpdatePage={setUpdatePage}
            showAddTransactionPopUp={showAddTransactionPopUp}
            setShowAddTransactionPopUp={setShowAddTransactionPopUp}
            token={token}
          />

          {/* Edit Modal */}
          {editingTransaction && (
            <TransactionInfoPopUp
              transaction={editingTransaction}
              showTransactionInfoPopUp={!!editingTransaction}
              setShowTransactionInfoPopUp={() => setEditingTransaction(null)}
              setUpdatePage={setUpdatePage}
            />
          )}
        </StyledTransactionsPerCategoryPage>
      )}
    </>
  );
};
