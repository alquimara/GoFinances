
import Styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'
import { FlatList } from 'react-native';
import { TransactionListProps } from '.';
import { BorderlessButton } from 'react-native-gesture-handler'
import { TransactionCardProps } from '../../components/TransactionCard';


interface PropsTransaition{
  data: TransactionCardProps
}
export const Container = Styled.View`
flex: 1;
background-color:${({ theme }) => theme.colors.background};
`;

export const Header = Styled.View`
width:100%;
height:${RFPercentage(42)}px;
background - color:${({ theme }) => theme.colors.primary};
flex-direction: row;

`;

export const UserWrapper = Styled.View`
width: 100%;
padding: 0 24px;
flex-direction: row;
justify-content:space-between;
align-items:center;
position:absolute;
margin-top:${RFValue(60)}px;
`;

export const UserInfo = Styled.View`
flex-direction: row;
align-items:center;

`;
export const UserPhoto = Styled.Image`
width: ${RFValue(48)}px;
height: ${RFValue(48)}px;
border-radius:10px;
`;

export const User = Styled.View`
margin-left:17px;
`;

export const UserGreeting = Styled.Text`
color:${({ theme }) => theme.colors.shape}
font-size:${RFValue(18)}px;
font-family:${({ theme }) => theme.fonts.regular};
`;

export const UserName = Styled.Text`
color:${({ theme }) => theme.colors.shape}
font-size:${RFValue(18)}px;
font-family:${({ theme }) => theme.fonts.bold};
`;
export const LogoutButton = Styled(BorderlessButton)``;
export const Icon = Styled(Feather)`
color:${({ theme }) => theme.colors.secondary}
font-size:${RFValue(24)}px;
`;

export const HighlightCards = Styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 }
})`
width:100%;
position: absolute;
margin-top:${RFPercentage(22)}px;
`;

export const Transactions = Styled.View`
flex:1;
padding: 0 24px;
margin-top:${RFPercentage(15)}px;
`;
export const Title = Styled.Text`
font-size:${RFValue(18)}px;
font-family:${({ theme }) => theme.fonts.regular};
margin-bottom:17px;
`;

export const TransactionList = Styled(
  FlatList as new () => FlatList<TransactionListProps>
).attrs({
  showsVerticalScrollIndicator: false
})``;




