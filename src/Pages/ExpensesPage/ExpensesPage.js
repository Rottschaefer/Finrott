import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../Routes/Coordinator";
import {
  getAmountsPerCategory,
  getFixedTransactionsAmount,
  getTransactionsPerCategory,
  getFixedTransactions,
  deleteTransaction,
  deleteFixedTransaction,
} from "../../Requests/transactionsRequests";
import { CategoryExpensesCard } from "../../Components/Cards/CategoryExpensesCard/CategoryExpensesCard";
import { CategoryTransactionsCard } from "../../Components/Cards/CategoryTransactionsCard/CategoryTransactionsCard";
import { DonutChart } from "../../Components/Charts/DonutChart";
import { AddTransactionPopUp } from "../../Components/PopUps/AddTransactionPopUp/AddTransactionPopUp";
import { TransactionInfoPopUp } from "../../Components/PopUps/TransactionInfoPopUp/TransactionInfoPopUp";
import { Loading } from "../../Components/Loading/Loading";
import { AddingPlus } from "../../Components/AddingPlus/AddingPlus";
import { getCategoryMeta } from "../../Assets/categoriesIcons";
import {
  StyledExpensesPage,
  TopNavBar,
  BrandGroup,
  BrandLogo,
  BrandBadge,
  StyledMonthPicker,
  MonthArrowButton,
  StyledMonthPickerText,
  CurrentMonthBadge,
  TopActions,
  PrimaryActionBtn,
  HeroSummaryCard,
  HeroLeft,
  HeroSubtitle,
  HeroAmount,
  HeroStatsRow,
  StatBox,
  StatLabel,
  StatValue,
  MainSplitGrid,
  LeftColumn,
  SectionTitle,
  CategoriesList,
  ChartCard,
  RightSplitPanel,
  EmptyDetailState,
  SplitDetailHeader,
  SplitDetailTitleGroup,
  SplitDetailTitle,
  SplitDetailTotal,
  SplitTransactionsList,
} from "./StyledExpenses";
import { FaChevronLeft, FaChevronRight, FaPlus, FaReceipt } from "react-icons/fa6";

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

export const ExpensesPage = () => {
  const navigate = useNavigate();

  const [token] = useState(JSON.parse(localStorage.getItem("token")));
  const [monthPage, setMonthPage] = useState(new Date().getMonth() + 1);
  const [yearPage, setYearPage] = useState(new Date().getFullYear());

  const [amountsPerCategory, setAmountsPerCategory] = useState([]);
  const [fixedTransactionsAmount, setFixedTransactionsAmount] = useState(0);
  const [totalMonthAmount, setTotalMonthAmount] = useState("R$ 0,00");
  const [numericTotal, setNumericTotal] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const [updatePage, setUpdatePage] = useState(false);
  const [showAddTransactionPopUp, setShowAddTransactionPopUp] = useState(false);

  // Desktop Split View state
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [splitTransactions, setSplitTransactions] = useState([]);
  const [isLoadingSplit, setIsLoadingSplit] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);

  // Fetch month summary data
  const fetchData = useCallback(
    async (month, year) => {
      try {
        const config = {
          headers: {
            Authorization: token,
          },
        };

        const [amountsResponse, fixedResponse] = await Promise.all([
          getAmountsPerCategory(config, month, year),
          getFixedTransactionsAmount(config, month, year),
        ]);

        let sum = 0;
        const validAmounts = amountsResponse || [];
        setAmountsPerCategory(validAmounts);

        validAmounts.forEach((item) => {
          sum += Number(item.total_amount) || 0;
        });

        const fixedAmount = Number(fixedResponse) || 0;
        setFixedTransactionsAmount(fixedAmount);
        sum += fixedAmount;

        setNumericTotal(sum);
        const formattedTotal = sum.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        setTotalMonthAmount(formattedTotal);

        // Cache in localStorage
        const dataToSave = {
          amountsPerCategory: validAmounts,
          fixedTransactionsAmount: fixedAmount,
          totalMonthAmount: formattedTotal,
          numericTotal: sum,
        };
        localStorage.setItem(`${month}-${year}`, JSON.stringify(dataToSave));

        setIsLoading(false);
        setFadeIn(true);
      } catch (error) {
        setIsLoading(false);
        setFadeIn(true);
      }
    },
    [token]
  );

  // Fetch transactions for selected category in Split View
  const fetchSplitCategoryTransactions = useCallback(
    async (categoryObj) => {
      if (!categoryObj) return;
      setIsLoadingSplit(true);

      try {
        const config = {
          headers: {
            Authorization: token,
          },
        };

        let response = [];
        if (categoryObj.category_id === "custos-fixos" || categoryObj.category === "Custos Fixos") {
          response = await getFixedTransactions(config);
        } else {
          response = await getTransactionsPerCategory(
            config,
            monthPage,
            yearPage,
            categoryObj.category_id
          );
        }

        setSplitTransactions(response || []);
        setIsLoadingSplit(false);
      } catch (error) {
        setSplitTransactions([]);
        setIsLoadingSplit(false);
      }
    },
    [token, monthPage, yearPage]
  );

  // Auth check
  useEffect(() => {
    if (!token) {
      goToPage(navigate, "/login");
    }
  }, [token, navigate]);

  // Load from cache or fetch
  useEffect(() => {
    const cached = localStorage.getItem(`${monthPage}-${yearPage}`);
    if (cached) {
      try {
        const data = JSON.parse(cached);
        setAmountsPerCategory(data.amountsPerCategory || []);
        setFixedTransactionsAmount(data.fixedTransactionsAmount || 0);
        setTotalMonthAmount(data.totalMonthAmount || "R$ 0,00");
        setNumericTotal(data.numericTotal || 0);
        setIsLoading(false);
        setFadeIn(true);
      } catch {
        setIsLoading(true);
      }
    } else {
      setIsLoading(true);
    }

    fetchData(monthPage, yearPage);
  }, [fetchData, monthPage, yearPage, updatePage]);

  // If a category was selected, update its split transactions on month change or update
  useEffect(() => {
    if (selectedCategory) {
      fetchSplitCategoryTransactions(selectedCategory);
    }
  }, [selectedCategory, monthPage, yearPage, updatePage, fetchSplitCategoryTransactions]);

  const handleMonthChange = (delta) => {
    let newMonth = monthPage + delta;
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
  };

  const handleGoCurrentMonth = () => {
    const now = new Date();
    setMonthPage(now.getMonth() + 1);
    setYearPage(now.getFullYear());
  };

  const handleCategoryClick = (amountObj) => {
    // Desktop Split View check
    if (window.innerWidth >= 1024) {
      setSelectedCategory(amountObj);
      fetchSplitCategoryTransactions(amountObj);
    } else {
      // Mobile navigation
      const catId = amountObj.category_id || "custos-fixos";
      goToPage(
        navigate,
        `/expenses/${catId}?month=${monthPage}&year=${yearPage}`
      );
    }
  };

  const handleFixedCostsClick = () => {
    const fixedObj = {
      category_id: "custos-fixos",
      category: "Custos Fixos",
      total_amount: fixedTransactionsAmount,
    };
    handleCategoryClick(fixedObj);
  };

  const handleDeleteSplitItem = async (transaction) => {
    const confirmDelete = window.confirm("Deseja realmente excluir esta transação?");
    if (!confirmDelete) return;

    try {
      const config = {
        headers: {
          Authorization: token,
        },
      };

      if (
        selectedCategory?.category_id === "custos-fixos" ||
        selectedCategory?.category === "Custos Fixos" ||
        transaction.is_a_fixed_transaction
      ) {
        await deleteFixedTransaction(config, transaction.id);
      } else {
        await deleteTransaction(config, transaction.id);
      }

      setUpdatePage((prev) => !prev);
    } catch (error) {
      alert("Erro ao excluir transação.");
    }
  };

  const fixedTransactionCardData = {
    category_id: "custos-fixos",
    category: "Custos Fixos",
    total_amount: fixedTransactionsAmount,
  };

  // Combine fixed costs and variable categories for the Donut Chart
  const chartData = [
    ...(fixedTransactionsAmount > 0 ? [fixedTransactionCardData] : []),
    ...amountsPerCategory,
  ];

  const isCurrentMonth =
    monthPage === new Date().getMonth() + 1 &&
    yearPage === new Date().getFullYear();

  return (
    <>
      {isLoading ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
          <Loading svgSize="60px" />
        </div>
      ) : (
        <StyledExpensesPage fadeIn={fadeIn}>
          {/* Top Navigation */}
          <TopNavBar>
            <BrandGroup>
              <BrandLogo>Finrott_</BrandLogo>
              <BrandBadge>Despesas</BrandBadge>
            </BrandGroup>

            {/* Month Navigator */}
            <StyledMonthPicker>
              <MonthArrowButton
                title="Mês anterior"
                onClick={() => handleMonthChange(-1)}
              >
                <FaChevronLeft />
              </MonthArrowButton>
              <StyledMonthPickerText>
                {`${MONTHS[monthPage]} ${yearPage}`}
              </StyledMonthPickerText>
              <MonthArrowButton
                title="Próximo mês"
                onClick={() => handleMonthChange(1)}
              >
                <FaChevronRight />
              </MonthArrowButton>

              {!isCurrentMonth && (
                <CurrentMonthBadge onClick={handleGoCurrentMonth}>
                  Hoje
                </CurrentMonthBadge>
              )}
            </StyledMonthPicker>

            <TopActions>
              <PrimaryActionBtn onClick={() => setShowAddTransactionPopUp(true)}>
                <FaPlus />
                <span>Nova Transação</span>
              </PrimaryActionBtn>
            </TopActions>
          </TopNavBar>

          {/* Hero Summary Card */}
          <HeroSummaryCard>
            <HeroLeft>
              <HeroSubtitle>Total gasto em {MONTHS[monthPage]}</HeroSubtitle>
              <HeroAmount>{totalMonthAmount}</HeroAmount>
            </HeroLeft>

            <HeroStatsRow>
              <StatBox>
                <StatLabel>Custos Fixos</StatLabel>
                <StatValue color="var(--primary)">
                  {fixedTransactionsAmount.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </StatValue>
              </StatBox>
              <StatBox>
                <StatLabel>Gastos Variáveis</StatLabel>
                <StatValue color="var(--accent-purple)">
                  {(numericTotal - fixedTransactionsAmount).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </StatValue>
              </StatBox>
              <StatBox>
                <StatLabel>Categorias</StatLabel>
                <StatValue>{amountsPerCategory.length + (fixedTransactionsAmount > 0 ? 1 : 0)} ativas</StatValue>
              </StatBox>
            </HeroStatsRow>
          </HeroSummaryCard>

          {/* Main Layout: Left Column (Donut + Categories) & Right Column (Desktop Split View) */}
          <MainSplitGrid>
            <LeftColumn>
              {/* Interactive Donut Chart */}
              <ChartCard>
                <SectionTitle style={{ width: "100%", marginBottom: "1rem" }}>
                  <span>Distribuição de Despesas</span>
                </SectionTitle>
                <DonutChart
                  data={chartData}
                  totalAmount={numericTotal}
                  onSelectCategory={handleCategoryClick}
                />
              </ChartCard>

              {/* Category Cards List */}
              <div>
                <SectionTitle>
                  <span>Por Categoria</span>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-tertiary)", fontWeight: 500 }}>
                    Clique para ver detalhes
                  </span>
                </SectionTitle>

                <CategoriesList>
                  {/* Custos Fixos Card */}
                  <CategoryExpensesCard
                    amount={fixedTransactionCardData}
                    handleOnClick={handleFixedCostsClick}
                    totalMonth={numericTotal}
                    isSelected={
                      selectedCategory?.category_id === "custos-fixos" ||
                      selectedCategory?.category === "Custos Fixos"
                    }
                  />

                  {/* Dynamic Category Cards */}
                  {amountsPerCategory.map((cat, idx) => (
                    <CategoryExpensesCard
                      key={cat.category_id || idx}
                      amount={cat}
                      handleOnClick={handleCategoryClick}
                      totalMonth={numericTotal}
                      isSelected={
                        selectedCategory?.category_id === cat.category_id &&
                        cat.category_id !== undefined
                      }
                    />
                  ))}
                </CategoriesList>
              </div>
            </LeftColumn>

            {/* Desktop Split View: Right Panel */}
            <RightSplitPanel>
              {selectedCategory ? (
                <>
                  <SplitDetailHeader>
                    <SplitDetailTitleGroup>
                      {(() => {
                        const meta = getCategoryMeta(selectedCategory.category);
                        const Icon = meta.svg;
                        return (
                          <div
                            style={{
                              width: 36,
                              height: 36,
                              borderRadius: 10,
                              background: meta.bg,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Icon style={{ color: meta.color, width: 18, height: 18 }} />
                          </div>
                        );
                      })()}
                      <div>
                        <SplitDetailTitle>{selectedCategory.category}</SplitDetailTitle>
                        <span style={{ fontSize: "0.75rem", color: "var(--text-tertiary)" }}>
                          {splitTransactions.length} transações no período
                        </span>
                      </div>
                    </SplitDetailTitleGroup>

                    <SplitDetailTotal>
                      {Number(selectedCategory.total_amount).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </SplitDetailTotal>
                  </SplitDetailHeader>

                  {isLoadingSplit ? (
                    <div style={{ padding: "3rem 0", display: "flex", justifyContent: "center" }}>
                      <Loading svgSize="36px" />
                    </div>
                  ) : splitTransactions.length === 0 ? (
                    <EmptyDetailState>
                      <FaReceipt />
                      <h4>Nenhuma transação encontrada</h4>
                      <p>Adicione transações a esta categoria clicando no botão abaixo.</p>
                    </EmptyDetailState>
                  ) : (
                    <SplitTransactionsList>
                      {splitTransactions.map((tx) => (
                        <CategoryTransactionsCard
                          key={tx.id}
                          transaction={tx}
                          setUpdatePage={setUpdatePage}
                          onEdit={(t) => setEditingTransaction(t)}
                          onDelete={handleDeleteSplitItem}
                        />
                      ))}
                    </SplitTransactionsList>
                  )}
                </>
              ) : (
                <EmptyDetailState>
                  <FaReceipt />
                  <h4>Visualização Rápida (Split View)</h4>
                  <p>
                    Clique em qualquer categoria ao lado para visualizar e gerenciar o extrato de transações aqui mesmo.
                  </p>
                </EmptyDetailState>
              )}
            </RightSplitPanel>
          </MainSplitGrid>

          {/* Floating Action Button (FAB) for mobile/convenience */}
          <AddingPlus
            label="Nova Transação"
            handleOnClick={() => setShowAddTransactionPopUp(true)}
          />

          {/* Add Transaction Modal */}
          <AddTransactionPopUp
            category={selectedCategory}
            token={token}
            setUpdatePage={setUpdatePage}
            showAddTransactionPopUp={showAddTransactionPopUp}
            setShowAddTransactionPopUp={setShowAddTransactionPopUp}
          />

          {/* Edit Transaction Modal */}
          {editingTransaction && (
            <TransactionInfoPopUp
              transaction={editingTransaction}
              showTransactionInfoPopUp={!!editingTransaction}
              setShowTransactionInfoPopUp={() => setEditingTransaction(null)}
              setUpdatePage={setUpdatePage}
            />
          )}
        </StyledExpensesPage>
      )}
    </>
  );
};
