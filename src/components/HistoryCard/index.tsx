import React from 'react'
import { Amount, Container, Title } from './style';


interface PropsHistoryCard{
    color:string;
    title:string;
    amount:string;
}
export const HistoryCard = ({color,title,amount}:PropsHistoryCard) => {
  return (
    <Container color={color}>
        <Title>{title}</Title>
        <Amount>{amount}</Amount>
    </Container>
  )
}

