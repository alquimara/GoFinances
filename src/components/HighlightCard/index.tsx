import React from 'react'
import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from './styles'

interface PropsCard {
  title: string;
  amount: string;
  lastTransaction: string;
  type: 'entrada' | 'saida' | 'total';
}
const icon = {
  entrada: 'arrow-up-circle',
  saida: 'arrow-down-circle',
  total: 'dollar-sign'
}
export const HighlightCard = ({ title, amount, lastTransaction, type }: PropsCard) => {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>
          {title}
        </Title>
        <Icon name={icon[type]} type={type} />
      </Header>
      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>

    </Container>
  )
}
