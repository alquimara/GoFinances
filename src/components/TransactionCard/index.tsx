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
import { Categorias } from '../../util/Categoria';


export interface TransactionCardProps {
  name: string;
  amount: string;
  type: 'entrada' | 'saida'
  category: string;
  date: string;
}
interface PropsTransactionCard {
  data: TransactionCardProps
}
export const TransactionCard = ({ data }: PropsTransactionCard) => {
  const [category] = Categorias.filter(item => item.key === data.category)
  
  return (
    <Container>
      <Title>{data.name}</Title>
      <Amount type={data.type}>
        {data.type === 'saida' && '-'}
        {data.amount}
      </Amount>
      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  )
}
