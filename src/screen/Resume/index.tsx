import React, { useEffect, useState } from 'react'
import { Container, Header, Title,Content } from './style'
import { HistoryCard } from '../../components/HistoryCard'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TransactionListProps } from '../Dashboard'
import { Categorias } from '../../util/Categoria'

interface PropsCategory{
  key:string;
  name:string;
  total:string;
  color:string;
}

export const Resume = () => {
    const datakey = '@goFinances:Transactions'
    const [totalByCategory,setTotalByCategory]= useState<PropsCategory[]>([]);

async function LoadingData(){
    const data = await AsyncStorage.getItem(datakey)
    const currentData = data ? JSON.parse(data): []
    const dataCategoria = currentData.filter((categoria:TransactionListProps)=> categoria.type === 'saida')
    const totalByCategoria:PropsCategory[] = [];

    Categorias.forEach(category =>{
        let categoriasoma = 0;
       dataCategoria.forEach((cate:TransactionListProps) =>{
         if(category.key === cate.category){
            categoriasoma += Number(cate.amount)
       }
    });
    const totalsum = categoriasoma.toLocaleString('pt-BR',{
        style:'currency',
        currency:'BRL'
    }
    
    )
      if(categoriasoma > 0){
        totalByCategoria.push({
          key: category.key,
            name: category.name,
            total: totalsum,
            color:category.color
        })
      }
    })
    setTotalByCategory(totalByCategoria)
    console.log(totalByCategory)

}
useEffect(()=>{
    LoadingData()
},[])
  return (
    <Container>
        <Header>
            <Title>Resumo por categoria</Title>
        </Header>
        <Content>
       {totalByCategory.map((item)=> <HistoryCard key={item.key} color={item.color} title={item.name} amount={item.total}/>
       )}
       </Content>

    </Container>
  )
}
