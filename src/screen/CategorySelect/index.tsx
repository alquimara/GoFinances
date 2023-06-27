import React from 'react'
import { Container, Header, Title, Category, Icon, Name, Separador, Footer } from './styles'
import { FlatList } from 'react-native';
import { Categorias } from '../../util/Categoria';
import { Button } from '../../components/Forms/Button';

interface Category {
  key: string;
  name: string;
}
interface PropsCategory {
  categoria: Category;
  setCategoria: (categoria: Category) => void;
  closeSelectCategory: () => void;
}

export const CategorySelect = ({ categoria, setCategoria, closeSelectCategory }: PropsCategory) => {
  function handleCategorySelect(category: Category) {
    setCategoria(category)
  }
  return (
    <Container>
      <Header>
        <Title>{categoria.name}</Title>
      </Header>
      <FlatList data={Categorias} style={{ flex: 1, width: '100%' }} keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category onPress={() => handleCategorySelect(item)} isActive={categoria.key === item.key}>
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )} ItemSeparatorComponent={() => <Separador />}
      />
      <Footer>
        <Button title={'Selecionar'} onPress={closeSelectCategory} />
      </Footer>
    </Container>
  )
}
