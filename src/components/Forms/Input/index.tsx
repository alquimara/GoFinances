import React from 'react'
import { Container } from './styles'
import { TextInputProps } from 'react-native'

export const Input = ({ ...rest }: TextInputProps) => {
  return (
    <Container {...rest} />
  )
}
