import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { css } from 'styled-components';
import Styled from "styled-components/native";



interface PropsIcon {
  type: 'entrada' | 'saida';
}
interface PropsTransactionType extends PropsIcon {
  isActive: boolean;
}

export const Container = Styled.View<PropsTransactionType>`
width:48%;

border-width:${({ isActive }) => isActive ? 0 : 1.5}px;
border-style: solid;
border-color:${({ theme }) => theme.colors.text}
border-radius: 5px;


${({ isActive, type }) => isActive && type === 'entrada' && css`
background-color: ${({ theme }) => theme.colors.suecess_light};
`}
${({ isActive, type }) => isActive && type === 'saida' && css`
background-color: ${({ theme }) => theme.colors.attention_light};
`}


`;
export const Button = Styled(TouchableOpacity)`
flex-direction:row;
align-items: center;
justify-content:center;
padding: 16px;
`;
export const Icon = Styled(Feather) <PropsIcon>`
font-size:${RFValue(24)}px;
margin-right: 12px;
color:${({ theme, type }) => type === 'entrada' ? theme.colors.sucess : theme.colors.attention};
`;


export const Title = Styled.Text`
font-family:${({ theme }) => theme.fonts.regular}
font-size:${RFValue(14)}px;
`;