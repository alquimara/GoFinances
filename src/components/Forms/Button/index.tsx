import React from 'react'
import { Container, Title } from './styles'
import { RectButtonProps } from 'react-native-gesture-handler';

interface PropsButton extends RectButtonProps {
  title: string;
  onPress: () => void;
}

export const Button = ({ title, onPress, ...rest }: PropsButton) => {
  return (
    <Container onPress={onPress} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
