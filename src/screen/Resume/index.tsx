import React, { useEffect } from 'react'
import { Container, Header, Title } from './style'
import { HistoryCard } from '../../components/HistoryCard'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TransactionListProps } from '../Dashboard'


export const Resume = () => {
    const datakey = '@goFinances:Transactions'

async function LoadingData(){
    const data = await AsyncStorage.getItem(datakey)
    const currentData = data ? JSON.parse(data): []
    const dataCategoria = currentData.filter((categoria:TransactionListProps)=> categoria.category[0])
    console.log(dataCategoria)

}
useEffect(()=>{
    LoadingData()
})
  return (
    <Container>
        <Header>
            <Title>Resumo por categoria</Title>
        </Header>
        <HistoryCard color={'blue'} title={'Alimentacao'} amount={'2000'}/>
    </Container>
  )
}
