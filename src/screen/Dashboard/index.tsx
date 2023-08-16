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
  LogoutButton,
  LoadingContainer
} from './styles'

import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import { ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components'
import { useAuth } from '../../Hooks/Auth'


export interface TransactionListProps extends TransactionCardProps {
  id: string
}
interface resultcard {
  totalsum:string;
  lastTransaction:string | number
}
interface resultcarddata{
  entrada:resultcard;
  saida:resultcard;
  result: resultcard;

}

export function Dashboard() {
  const {signOut,user}= useAuth();
  const datakey = `@goFinances:Transactions_user:${user.id}`
  const[transactionsData,setTransactionsData]=useState<TransactionCardProps[]>([])
  const[resultcard, setResultCard] = useState<resultcarddata>({} as resultcarddata);
  const [isLoading,setIsLoading]= useState(true);
  const theme = useTheme();




 async function LoadingTrasaction(){

  try {
    const dados = await AsyncStorage.getItem(datakey)
  const transactions = dados ? JSON.parse(dados): []
  let sumentrada=0;
  let sumsaida=0;
 
   const transactionsFormatted:TransactionListProps[] = transactions.map((item:TransactionListProps) =>{
    if(item.type === 'entrada'){
      sumentrada += Number(item.amount)
    }else{
      sumsaida+=Number(item.amount)
    }

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
  
  })
  setTransactionsData(transactionsFormatted)

  const lastTransactionEntrada = LastTransactionDate(transactions, 'entrada')
  const lastTransactionSaida = LastTransactionDate(transactions, 'saida')
  const transactionInital = new Date(transactions[0].date).getDate()
  const transactionFinal = DateFormatted(transactions.at(-1).date)
  const lastTransactionTotal = `${transactionInital} a ${transactionFinal}`

  const total = sumentrada - sumsaida;

  setResultCard({
    entrada:{
      totalsum: sumentrada.toLocaleString('pt-BR',{
        style: 'currency',
        currency:'BRL'
      }),
      lastTransaction:lastTransactionEntrada
    },
    saida:{
      totalsum:sumsaida.toLocaleString('pt-BR',{
        style:'currency',
        currency:'BRL'
      }),
      lastTransaction:lastTransactionSaida
    },
    result:{
      totalsum:total.toLocaleString('pt-BR',{
        style:'currency',
        currency: 'BRL'
      }),
      lastTransaction: lastTransactionTotal
    }
  })
  setIsLoading(false)
    
  } catch (error) {
    console.log(error)
  }

 }
 function LastTransactionDate(collection:TransactionCardProps[], type: 'entrada' | 'saida'){
  const filterTransaction = collection.filter(transaction => 
    transaction.type === type)

    if(filterTransaction.length ===0){
      return 0;
    }
    const lastransaction = new Date(Math.max(...filterTransaction.map(transaction => new Date(transaction.date).getTime())))
    const dateFunction  = DateFormatted(lastransaction)
    return dateFunction
   
 }

 async function deleteTrasaction(){
  await AsyncStorage.removeItem(datakey)

 }
 function DateFormatted(data:Date):string{
  const dates = new Date(data)
  return Intl.DateTimeFormat('pt-BR',{
    day:'2-digit',
    month:'long',
    year:'numeric'
  }).format(dates)

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
    {
      isLoading ? 
      <LoadingContainer>
        <ActivityIndicator color={theme.colors.primary} size="large"/>
      </LoadingContainer> :
      <>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserPhoto source={{ uri: user.photo }} />
            <User>
              <UserGreeting>Olá</UserGreeting>
              <UserName>{user.name}</UserName>
            </User>
          </UserInfo>
          <LogoutButton onPress={signOut}>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard type="entrada" title='Entradas' amount={resultcard.entrada.totalsum} lastTransaction={`Ultima Transaçao ${resultcard.entrada.lastTransaction}`} />
        <HighlightCard type="saida" title='Saidas' amount={resultcard.saida.totalsum} lastTransaction={`Ultima Transaçao ${resultcard.saida.lastTransaction}`} />
        <HighlightCard type="total" title='Total' amount={resultcard.result.totalsum} lastTransaction={`Transações entre ${resultcard.result.lastTransaction}`} />
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionList 
        data={transactionsData} 
        keyExtractor={item => item.id} 
        renderItem={({ item }) => <TransactionCard data={item} />} />
      </Transactions>
      </>
    }
    </Container>
  )
}
