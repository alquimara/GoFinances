import React from 'react'

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


export interface TransactionListProps extends TransactionCardProps {
  id: string
}

export function Dashboard() {
  const dados: TransactionListProps[] = [
    {
      id: '1',
      type: 'saida',
      title: 'Hamburguer',
      amount: 'R$ 250,00',
      category: {
        name: 'Alimentação',
        icon: 'dollar-sign'
      },
      date: '14/06/2023'

    },
    {
      id: '2',
      type: 'saida',
      title: 'Aluguel',
      amount: 'R$ 900,00',
      category: {
        name: 'Moradia',
        icon: 'dollar-sign'
      },
      date: '14/06/2023'
    },
    {
      id: '3',
      type: 'entrada',
      title: 'Desenvolvimento de site',
      amount: 'R$ 1.000,00',
      category: {
        name: 'Venda',
        icon: 'dollar-sign'
      },
      date: '14/06/2023'
    },
    {
      id: '4',
      type: 'entrada',
      title: 'Desenvolvimento de site',
      amount: 'R$ 1.000,00',
      category: {
        name: 'Venda',
        icon: 'dollar-sign'
      },
      date: '14/06/2023'
    }
  ]
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
        <TransactionList data={dados} keyExtractor={item => item.id} renderItem={({ item }) => <TransactionCard data={item} />} />
      </Transactions>
    </Container>
  )
}
