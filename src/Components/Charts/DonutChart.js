import React, { useState } from "react";
import styled from "styled-components";
import { getCategoryMeta } from "../../Assets/categoriesIcons";

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  width: 100%;
`;

const SvgContainer = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    transform: rotate(-90deg);
    overflow: visible;
  }
`;

const CenterInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  pointer-events: none;
  width: 140px;
  padding: 0.5rem;
`;

const CenterLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 130px;
`;

const CenterValue = styled.span`
  font-family: 'Outfit', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-top: 2px;
`;

const CenterSub = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--primary);
  margin-top: 2px;
`;

const LegendGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem 1rem;
  max-width: 480px;
  width: 100%;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  color: ${(props) => (props.active ? "var(--text-primary)" : "var(--text-secondary)")};
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  background: ${(props) => (props.active ? "rgba(255, 255, 255, 0.08)" : "transparent")};
  transition: all 0.2s ease;

  &:hover {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.06);
  }
`;

const LegendDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) => props.color};
  box-shadow: 0 0 6px ${(props) => props.color};
`;

export const DonutChart = ({ data = [], totalAmount = 0, onSelectCategory }) => {
  const [hovered, setHovered] = useState(null);

  // Filter out zero/negative amounts
  const validData = data.filter((item) => Number(item.total_amount) > 0);
  const total = validData.reduce((acc, curr) => acc + Number(curr.total_amount), 0);

  const radius = 80;
  const strokeWidth = 24;
  const circumference = 2 * Math.PI * radius;

  let accumulatedPercent = 0;

  const slices = validData.map((item) => {
    const amount = Number(item.total_amount);
    const fraction = total > 0 ? amount / total : 0;
    const strokeDasharray = `${circumference * fraction} ${circumference * (1 - fraction)}`;
    const strokeDashoffset = -circumference * accumulatedPercent;
    accumulatedPercent += fraction;

    const meta = getCategoryMeta(item.category);

    return {
      category: item.category || "Outros",
      amount,
      percentage: (fraction * 100).toFixed(1),
      strokeDasharray,
      strokeDashoffset,
      color: meta.color,
      rawItem: item,
    };
  });

  const activeItem = hovered || null;

  return (
    <ChartWrapper>
      <SvgContainer>
        <svg width="220" height="220" viewBox="0 0 220 220">
          {/* Background circle */}
          <circle
            cx="110"
            cy="110"
            r={radius}
            fill="transparent"
            stroke="rgba(255, 255, 255, 0.04)"
            strokeWidth={strokeWidth}
          />

          {slices.length === 0 ? (
            <circle
              cx="110"
              cy="110"
              r={radius}
              fill="transparent"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth={strokeWidth}
              strokeDasharray="6 6"
            />
          ) : (
            slices.map((slice, i) => {
              const isHovered = activeItem && activeItem.category === slice.category;
              return (
                <circle
                  key={i}
                  cx="110"
                  cy="110"
                  r={radius}
                  fill="transparent"
                  stroke={slice.color}
                  strokeWidth={isHovered ? strokeWidth + 4 : strokeWidth}
                  strokeDasharray={slice.strokeDasharray}
                  strokeDashoffset={slice.strokeDashoffset}
                  strokeLinecap="round"
                  style={{
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    filter: isHovered
                      ? `drop-shadow(0 0 8px ${slice.color})`
                      : "none",
                    opacity: activeItem && !isHovered ? 0.45 : 1,
                  }}
                  onMouseEnter={() => setHovered(slice)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => onSelectCategory && onSelectCategory(slice.rawItem)}
                />
              );
            })
          )}
        </svg>

        <CenterInfo>
          {activeItem ? (
            <>
              <CenterLabel>{activeItem.category}</CenterLabel>
              <CenterValue>
                {activeItem.amount.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  maximumFractionDigits: 0,
                })}
              </CenterValue>
              <CenterSub>{activeItem.percentage}%</CenterSub>
            </>
          ) : (
            <>
              <CenterLabel>Total do Mês</CenterLabel>
              <CenterValue>
                {total > 0
                  ? total.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                      maximumFractionDigits: 0,
                    })
                  : "R$ 0"}
              </CenterValue>
              <CenterSub>{slices.length} categorias</CenterSub>
            </>
          )}
        </CenterInfo>
      </SvgContainer>

      {slices.length > 0 && (
        <LegendGrid>
          {slices.slice(0, 8).map((slice, i) => (
            <LegendItem
              key={i}
              active={activeItem && activeItem.category === slice.category}
              onMouseEnter={() => setHovered(slice)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => onSelectCategory && onSelectCategory(slice.rawItem)}
            >
              <LegendDot color={slice.color} />
              <span>{slice.category}</span>
              <span style={{ color: "var(--text-tertiary)", fontWeight: 600 }}>
                {slice.percentage}%
              </span>
            </LegendItem>
          ))}
        </LegendGrid>
      )}
    </ChartWrapper>
  );
};
