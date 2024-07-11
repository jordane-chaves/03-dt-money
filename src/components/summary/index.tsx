import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp color="#00b37e" />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown color="#f75a68" />
        </header>

        <strong>R$ 1.259,00</strong>
      </SummaryCard>

      <SummaryCard $variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar color="#ffffff" />
        </header>

        <strong>R$ 16.141,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
