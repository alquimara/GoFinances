import React, { useState } from 'react'
import { Container, Header, Title, Form, Inputs, TransactionsTypes } from './styles'
import { Button } from '../../components/Forms/Button'
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton'
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton'
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { CategorySelect } from '../CategorySelect'
import { InputForm } from '../../components/Forms/InputForm'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


interface PropsForm {
  name: string;
  valor: string;
}
const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  valor: Yup.number().typeError('Informe um valor numerico').required('Preço é obrigatório').positive('o preço não pode ser negativo')

})

export const Register = () => {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  });
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function handleTransactionTypeSelect(type: string) {
    setTransactionType(type);
    console.log("estou no type")
  }
  function handleModalCloseSelectCategory() {
    setCategoryModalOpen(false);
    console.log("fecehei o modal")
  }
  function handleModalOpenSelectCategory() {
    setCategoryModalOpen(true);

  }
  function handleSubmitRegister(form: PropsForm) {
    if (!transactionType) {
      return Alert.alert('Selecione o tipo de Transação')
    }
    if (category.key === 'category') {
      return Alert.alert('Selecione a categoria')
    }
    const data = {
      name: form.name,
      valor: form.valor,
      transactionType,
      category: category.key

    }
    console.log(data)

  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro
          </Title>
        </Header>
        <Form>
          <Inputs>
            <InputForm control={control}
              name='name' placeholder='Nome'
              autoCapitalize='sentences'
              autoCorrect={false}
              erro={errors.name && errors.name.message}
            />
            <InputForm
              control={control}
              name='valor'
              placeholder='Preço'
              keyboardType='numeric'
              erro={errors.valor && errors.valor.message}
            />
            <TransactionsTypes>
              <TransactionTypeButton
                title='Receita'
                type='entrada'
                onPress={() => handleTransactionTypeSelect('entrada')}
                isActive={transactionType === 'entrada'}
              />
              <TransactionTypeButton title='Despesas' type='saida' onPress={() => handleTransactionTypeSelect('saida')}
                isActive={transactionType === 'saida'} />
            </TransactionsTypes>
            <CategorySelectButton title={category.name} onPress={handleModalOpenSelectCategory} />
          </Inputs>
          <Button title='Enviar' onPress={handleSubmit(handleSubmitRegister)} />
        </Form>
        <Modal visible={categoryModalOpen}>
          <CategorySelect categoria={category} setCategoria={setCategory} closeSelectCategory={handleModalCloseSelectCategory} />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  )
}
