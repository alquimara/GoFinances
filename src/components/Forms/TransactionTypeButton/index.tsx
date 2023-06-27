import React from 'react'
import { Container, Icon, Title, Button } from './styles'
import { TouchableOpacityProps } from 'react-native';

const icons = {
  entrada: 'arrow-up-circle',
  saida: 'arrow-down-circle'
}
interface PropsTransactionTypeButton extends TouchableOpacityProps {
  title: string;
  type: 'entrada' | 'saida';
  isActive: boolean;
}
export const TransactionTypeButton = ({ type, title, isActive, ...rest }: PropsTransactionTypeButton) => {
  return (
    <Container isActive={isActive} type={type}>
      <Button {...rest}>
        <Icon name={icons[type]} type={type} />
        <Title>{title}</Title>
      </Button>
    </Container>
  )
}
