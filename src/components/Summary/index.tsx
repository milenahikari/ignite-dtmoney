import { useTransactions } from "../../hooks/useTransactions";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

import * as S from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  const sumary = transactions.reduce((acumulator, transaction) => {
    if (transaction.type === 'deposit') {
      acumulator.deposit += transaction.amount;
      acumulator.total += transaction.amount;
    } else {
      acumulator.withdraw += transaction.amount;
      acumulator.total -= transaction.amount;
    }

    return acumulator;
  }, {
    deposit: 0,
    withdraw: 0,
    total: 0
  });

  return (
    <S.Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(sumary.deposit)}
        </strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(sumary.withdraw)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(sumary.total)}
        </strong>
      </div>
    </S.Container>
  );
}
