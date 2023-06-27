import Styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

interface PropsType {
  type: 'entrada' | 'saida' | 'total';
}

export const Container = Styled.View<PropsType>`
background-color:${({ theme, type }) => type === 'total' ? theme.colors.secondary : theme.colors.shape};
width:${RFValue(300)}px;
border-radius:5px;
padding:19px 23px;
padding-bottom:${RFValue(42)}px;
margin-right:16px;
`;

export const Header = Styled.View`
flex-direction: row;
justify-content: space-between;
`;

export const Title = Styled.Text<PropsType>`
font-family:${({ theme }) => theme.fonts.medium};
font-size:${RFValue(14)}px;
color:${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.text_dark};
`;

export const Icon = Styled(Feather) <PropsType>`
font-size:${RFValue(40)}px;
${(props) => props.type === 'entrada' && css`
color:${({ theme }) => theme.colors.sucess}
`}
${(props) => props.type === 'saida' && css`
color:${({ theme }) => theme.colors.attention}
`}
${(props) => props.type === 'total' && css`
color:${({ theme }) => theme.colors.shape}
`}
`;

export const Footer = Styled.View``;

export const Amount = Styled.Text<PropsType>`
font-family:${({ theme }) => theme.fonts.medium}
font-size:${RFValue(32)}px;
color:${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.text_dark}
margin-top:${RFValue(38)}px;
`;

export const LastTransaction = Styled.Text<PropsType>`
font-size:${RFValue(12)}px;
font-family:${({ theme }) => theme.fonts.regular};
color:${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.text};
`;