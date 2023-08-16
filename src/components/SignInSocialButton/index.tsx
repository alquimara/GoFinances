import React, { SVGProps } from 'react'
import { ImagemContainer,ButtonSign,TextButton } from './style'
import { TouchableOpacityProps } from 'react-native';
import { SvgProps } from 'react-native-svg';



interface PropsSign extends TouchableOpacityProps{
    title:string;
    svg:React.FC<SvgProps>

}

export const SignInButton = ({title, svg:Svg,...rest}:PropsSign) => {
  return (
    <ButtonSign {...rest}>
        <ImagemContainer>
            <Svg/>
        </ImagemContainer>
        <TextButton>{title}</TextButton>

    </ButtonSign>
  )
}
