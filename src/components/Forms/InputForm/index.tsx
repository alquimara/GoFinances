import React from 'react'
import { Container, Error } from './styles'
import { Input } from '../Input'
import { Control, Controller } from 'react-hook-form'
import { TextInputProps } from 'react-native'

interface PropsInputForm extends TextInputProps {
  control: Control;
  name: string;
  erro
}
export const InputForm = ({ control, name, erro, ...rest }: PropsInputForm) => {
  return (
    <Container>
      <Controller control={control} name={name} render={({ field: { onChange, onBlur, value } }) => (
        <Input onChangeText={onChange} value={value} {...rest} />
      )}
      />
      {erro && <Error>{erro}</Error>}
    </Container>
  )
}
