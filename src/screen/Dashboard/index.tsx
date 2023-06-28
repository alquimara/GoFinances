import React, { useCallback, useEffect, useState } from 'react'

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  UserPhoto,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
  LogoutButton
} from './styles'

import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'


export interface TransactionListProps extends TransactionCardProps {
  id: string
}

export function Dashboard() {
  const datakey = '@goFinances:Transactions'
 const[data,setData]=useState<TransactionCardProps[]>([])

 async function LoadingTrasaction(){
  const dados = await AsyncStorage.getItem(datakey)
  const transactions = dados ? JSON.parse(dados): []
  console.log(transactions)
  const transactionFormatted : TransactionListProps[] = transactions.map((item:TransactionListProps) =>{
    const amount = Number(item.amount).toLocaleString('pt-BR',{
      style:'currency',
      currency:'BRL'
    });
    
    const date = Intl.DateTimeFormat('pt-BR',{
      day:'2-digit',
      month:'2-digit',
      year:'2-digit'
    }).format(new Date(item.date));
    return{
      id: item.id,
      name: item.name,
      amount,
      type:item.type,
      category: item.category,
      date,
    }
  }
  
  
  )
  setData(transactionFormatted)
 }
 async function deleteTrasaction(){
  await AsyncStorage.removeItem(datakey)

 }

 useEffect(()=>{
  LoadingTrasaction()
  // deleteTrasaction()

 

 },[])
 useFocusEffect(useCallback(()=>{
  LoadingTrasaction()

 },[]))





  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserPhoto source={{ uri: 'https://avatars.githubusercontent.com/u/30248962?v=4' }} />
            <User>
              <UserGreeting>Olá</UserGreeting>
              <UserName>Alquimara</UserName>
            </User>
          </UserInfo>
          <LogoutButton>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard type="entrada" title='Entradas' amount={'R$ 1.400,00'} lastTransaction={'Ultima transação dia 13 de abril'} />
        <HighlightCard type="saida" title='Saidas' amount={'R$ 400,00'} lastTransaction={'Ultima transação dia 20 de abril'} />
        <HighlightCard type="total" title='Total' amount={'R$ 1.000,00'} lastTransaction={'Ultima transação dia 20 de abril'} />
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionList 
        data={data} 
        keyExtractor={item => item.id} 
        renderItem={({ item }) => <TransactionCard data={item} />} />
      </Transactions>
    </Container>
  )
}
