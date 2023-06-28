
import Styled from 'styled-components/native'
import { AntDesign} from '@expo/vector-icons'

import { RFValue } from 'react-native-responsive-fontsize';

interface TransactionType {
  type: 'entrada' | 'saida'
}

export const Container = Styled.View`
background-color:${({ theme }) => theme.colors.shape}
border-radius:5px;
padding:17px 24px;
margin-bottom:16px;
`;

export const Title = Styled.Text`
font-size:${RFValue(14)}px;
font-family:${({ theme }) => theme.fonts.regular};

`;

export const Amount = Styled.Text<TransactionType>`
font-size:${RFValue(20)}px;
margin-top:2px;
font-family:${({ theme }) => theme.fonts.regular}
color:${({ theme, type }) => type === 'entrada' ? theme.colors.sucess : theme.colors.attention}
`;

export const Footer = Styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top:19px;
`;

export const Category = Styled.View`
flex-direction: row;
align-items: center;

`;

export const Icon = Styled(AntDesign)`
font-size:${RFValue(20)}px;
color:${({ theme }) => theme.colors.text};
`;

export const CategoryName = Styled.Text`
font-size:${RFValue(14)}px;
color:${({ theme }) => theme.colors.text};
margin-left:10px;

`;

export const Date = Styled.Text`
font-size:${RFValue(14)}px;
color:${({ theme }) => theme.colors.text}

`;
