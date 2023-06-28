import React, { useEffect, useState } from 'react'
import { Container, Header, Title, Form, Inputs, TransactionsTypes } from './styles'
import { Button } from '../../components/Forms/Button'
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton'
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton'
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { CategorySelect } from '../CategorySelect'
import { InputForm } from '../../components/Forms/InputForm'
import { useForm } from 'react-hook-form'
import uuid from 'react-native-uuid'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'


interface PropsForm {
  name: string;
  amount: string;
}
const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  amount: Yup.number().typeError('Informe um valor numerico').required('Preço é obrigatório').positive('o preço não pode ser negativo')

})

export const Register = () => {
  const navigation = useNavigation();
  const datakey = '@goFinances:Transactions'
  const [type, setType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  });
  const { control,reset, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function handleTransactionTypeSelect(type: string) {
    setType(type);
  }
  function handleModalCloseSelectCategory() {
    setCategoryModalOpen(false);
  }
  function handleModalOpenSelectCategory() {
    setCategoryModalOpen(true);

  }
   async function handleSubmitRegister(form: PropsForm) {
    if (!type) {
      return Alert.alert('Selecione o tipo de Transação')
    }
    if (category.key === 'category') {
      return Alert.alert('Selecione a categoria')
    }
    const newdata = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      type,
      category: category.key,
      date: new Date()

    }
    try {
      const data = await AsyncStorage.getItem(datakey)
      const currentData = data ? JSON.parse(data): []
      const dataFormatted = [
        ...currentData,
        newdata
      ]
      await AsyncStorage.setItem(datakey, JSON.stringify(dataFormatted))
      reset();
      setType('');
      setCategory({
        key:'category',
        name:'Categoria'
      })
      navigation.navigate('Home');
    
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possivel salvar os dados')
      
    }

  }
  useEffect(()=>{
    async function loadKey(){
      const keyTrasaction = await AsyncStorage.getItem(datakey)
      console.log(JSON.parse(keyTrasaction))
    }
    loadKey()

  },[])

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
              name='amount'
              placeholder='Preço'
              keyboardType='numeric'
              erro={errors.amount && errors.amount.message}
            />
            <TransactionsTypes>
              <TransactionTypeButton
                title='Receita'
                type='entrada'
                onPress={() => handleTransactionTypeSelect('entrada')}
                isActive={type === 'entrada'}
              />
              <TransactionTypeButton title='Despesas' type='saida' onPress={() => handleTransactionTypeSelect('saida')}
                isActive={type === 'saida'} />
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
