import { RFValue } from 'react-native-responsive-fontsize';
import Styled from 'styled-components/native'


export const Container = Styled.View`
flex: 1;
background-color:${({ theme }) => theme.colors.background};


`;
export const Header = Styled.View`
background-color:${({ theme }) => theme.colors.primary}
width: 100%;
height: ${RFValue(113)}px;
align-items: center;
justify-content: flex-end;
padding-bottom:19px;
`;

export const Title = Styled.Text`
font-family:${({ theme }) => theme.fonts.regular};
color: ${({ theme }) => theme.colors.shape};
font-size:${RFValue(18)}px;
`;
export const Form = Styled.View`
flex: 1;
padding:24px;
justify-content:space-between;
`;
export const Inputs = Styled.View`
`;

export const TransactionsTypes = Styled.View`
flex-direction:row;
justify-content:space-between;
margin-top:8px;
margin-bottom:16px;
`;