import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { AccountCard } from "../Components/Cards/AccountCard/AccountCard";
import { CategoryExpensesCard } from "../Components/Cards/CategoryExpensesCard/CategoryExpensesCard";
import { SpecialCheckBox } from "../Components/SpecialCheckBox/SpecialCheckBox";
import { DonutChart } from "../Components/Charts/DonutChart";

describe("Pixel Art UI Components", () => {
  describe("AccountCard", () => {
    it("renders bank name and properly formatted BRL balance", () => {
      const mockAccount = {
        bank_name: "Nubank Roxinho",
        balance: 2450.5,
        primary_color: "820AD1",
      };

      render(<AccountCard account={mockAccount} />);

      expect(screen.getByText("Nubank Roxinho")).toBeInTheDocument();
      expect(screen.getByText(/2\.450,50/)).toBeInTheDocument();
      expect(screen.getByText("Saldo Disponível")).toBeInTheDocument();
    });

    it("handles null or undefined balance safely with fallback", () => {
      const mockAccount = {
        bank_name: "Itaú",
        balance: null,
      };

      render(<AccountCard account={mockAccount} />);
      expect(screen.getByText("R$ 0,00")).toBeInTheDocument();
    });
  });

  describe("CategoryExpensesCard", () => {
    it("renders category name, amount, and percentage correctly", () => {
      const mockAmount = {
        category: "Alimentação & Mercado",
        total_amount: 500,
      };

      const handleOnClick = vi.fn();

      render(
        <CategoryExpensesCard
          amount={mockAmount}
          totalMonth={2000}
          handleOnClick={handleOnClick}
        />
      );

      expect(screen.getByText("Alimentação & Mercado")).toBeInTheDocument();
      expect(screen.getByText(/500,00/)).toBeInTheDocument();
      expect(screen.getByText("25.0%")).toBeInTheDocument();

      // Click card
      fireEvent.click(screen.getByText("Alimentação & Mercado"));
      expect(handleOnClick).toHaveBeenCalledWith(mockAmount);
    });
  });

  describe("SpecialCheckBox", () => {
    it("toggles fixed transaction boolean flag when clicked", () => {
      let state = { is_a_fixed_transaction: false };
      const setState = vi.fn((updater) => {
        state = typeof updater === "function" ? updater(state) : updater;
      });

      const { rerender } = render(
        <SpecialCheckBox state={state} setState={setState} />
      );

      const checkbox = screen.getByRole("switch");
      expect(checkbox).toHaveAttribute("aria-checked", "false");

      fireEvent.click(checkbox);
      expect(setState).toHaveBeenCalled();

      // Rerender with updated state
      rerender(<SpecialCheckBox state={{ is_a_fixed_transaction: true }} setState={setState} />);
      expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "true");
    });
  });

  describe("DonutChart", () => {
    it("renders chart information and category slices correctly", () => {
      const chartData = [
        { category: "Moradia", total_amount: 1200 },
        { category: "Transporte", total_amount: 300 },
      ];

      render(<DonutChart data={chartData} totalAmount={1500} />);

      expect(screen.getByText("Total do Mês")).toBeInTheDocument();
      expect(screen.getByText("2 categorias")).toBeInTheDocument();
      expect(screen.getByText("Moradia")).toBeInTheDocument();
      expect(screen.getByText("Transporte")).toBeInTheDocument();
      expect(screen.getByText("80.0%")).toBeInTheDocument();
      expect(screen.getByText("20.0%")).toBeInTheDocument();
    });
  });
});
