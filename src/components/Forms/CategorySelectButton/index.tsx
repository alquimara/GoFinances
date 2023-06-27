import React from 'react'
import { Container, Title, Icon } from './styles'
import { TouchableOpacityProps } from 'react-native'

interface PropsCategory {
  title: string,
  onPress: () => void;
}

export const CategorySelectButton = ({ title, onPress }: PropsCategory) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
      <Icon name="chevron-down" />
    </Container>
  )
}
