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
  font-family: var(--font-pixel-mono);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 130px;
`;

const CenterValue = styled.span`
  font-family: var(--font-pixel-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  text-shadow: 2px 2px 0px var(--pixel-ink);
  margin-top: 2px;
`;

const CenterSub = styled.span`
  font-family: var(--font-pixel-mono);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--bg-outer-beige);
  background: var(--pixel-ink);
  padding: 1px 6px;
  border: 2px solid var(--border-beige);
  margin-top: 4px;
`;

const LegendGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  max-width: 480px;
  width: 100%;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-pixel-mono);
  font-size: 0.75rem;
  font-weight: 600;
  color: ${(props) => (props.active ? "var(--text-on-beige)" : "var(--text-primary)")};
  cursor: pointer;
  padding: 0.25rem 0.55rem;
  border-radius: 0;
  border: 2px solid var(--pixel-ink);
  background: ${(props) => (props.active ? "var(--bg-outer-beige)" : "var(--bg-surface)")};
  box-shadow: 2px 2px 0px var(--pixel-ink);

  &:hover {
    background: var(--bg-outer-beige);
    color: var(--text-on-beige);
    transform: translate(-1px, -1px);
    box-shadow: 3px 3px 0px var(--pixel-ink);
  }
`;

const LegendDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 0;
  border: 2px solid var(--pixel-ink);
  background: ${(props) => props.color};
`;

export const DonutChart = ({ data = [], totalAmount = 0 }) => {
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
            fill="none"
            stroke="rgba(255, 255, 255, 0.04)"
            strokeWidth={strokeWidth}
          />

          {slices.length === 0 ? (
            <circle
              cx="110"
              cy="110"
              r={radius}
              fill="none"
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
                  fill="none"
                  stroke={slice.color}
                  strokeWidth={isHovered ? strokeWidth + 4 : strokeWidth}
                  strokeDasharray={slice.strokeDasharray}
                  strokeDashoffset={slice.strokeDashoffset}
                  strokeLinecap="butt"
                  style={{
                    cursor: "default",
                    transition: "all 0.1s steps(2)",
                    filter: isHovered
                      ? "drop-shadow(3px 3px 0px #22050C)"
                      : "none",
                    opacity: activeItem && !isHovered ? 0.55 : 1,
                  }}
                  onMouseEnter={() => setHovered(slice)}
                  onMouseLeave={() => setHovered(null)}
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
              style={{ cursor: "default" }}
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
