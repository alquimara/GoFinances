import React from 'react'
import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date
} from './styles'

interface CategoryCard {
  name: string;
  icon: string;
}
export interface TransactionCardProps {
  type: 'entrada' | 'saida'
  title: string;
  amount: string;
  category: CategoryCard;
  date: string;
}
interface PropsTransactionCard {
  data: TransactionCardProps
}
export const TransactionCard = ({ data }: PropsTransactionCard) => {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount type={data.type}>
        {data.type === 'saida' && '-'}
        {data.amount}
      </Amount>
      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  )
}
