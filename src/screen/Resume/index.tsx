import React, { useEffect, useState } from 'react'
import { Container, Header, Title,Content,ChartContainer } from './style'
import { HistoryCard } from '../../components/HistoryCard'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TransactionListProps } from '../Dashboard'
import { Categorias } from '../../util/Categoria'
import { VictoryPie } from 'victory-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

interface PropsCategory{
  key:string;
  name:string;
  total:string;
  totalNumber:number;
  color:string;
  percent:string;
}

export const Resume = () => {
    const datakey = '@goFinances:Transactions'
    const [totalByCategory,setTotalByCategory]= useState<PropsCategory[]>([]);
    const theme = useTheme();

async function LoadingData(){
    const data = await AsyncStorage.getItem(datakey)
    const currentData = data ? JSON.parse(data): []
    const dataCategoria = currentData.filter((categoria:TransactionListProps)=> categoria.type === 'saida')
    const totalByCategoria:PropsCategory[] = [];
    const saidaTotal = dataCategoria.reduce((acc:number,saida:TransactionListProps)=>{
      return acc + Number(saida.amount)
    },0)

    console.log(saidaTotal)

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
    })

    const percent = `${(categoriasoma /  saidaTotal * 100).toFixed(0)}%`
   
  
      if(categoriasoma > 0){
        totalByCategoria.push({
          key: category.key,
            name: category.name,
            total: totalsum,
            totalNumber:categoriasoma,
            color:category.color,
            percent

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
          <ChartContainer>
          <VictoryPie data={totalByCategory} x='percent' y='totalNumber' colorScale={totalByCategory.map(category=>category.color)}  innerRadius={0} labelRadius={60} style={
            {labels:
              {
                fontSize:RFValue(18),
                fontWeight:'bold',
                fill: theme.colors.shape,
                
                
              }
            }
          }/>
          </ChartContainer>
         
       {totalByCategory.map((item)=> <HistoryCard key={item.key} color={item.color} title={item.name} amount={item.total}/>
       )}
       </Content>

    </Container>
  )
}
