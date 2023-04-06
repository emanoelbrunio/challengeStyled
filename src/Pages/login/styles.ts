import { useRef,  }from 'react'
import styled from "styled-components/native"




export const Container = styled.View `
    
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 100%;

`


export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#a7a7a7",
})<{hasValue: boolean; isFocused: boolean}> `
    
    border: 1px solid ${ props => (props.isFocused ? '#FF6B00' : '#a7a7a7') };
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 10px;
    font-size: 18px;
    width: 100%;

    color: ${ props => (props.isFocused ? '#FF6B00' : '#00aa11') };
    ${props => props.hasValue && !props.isFocused ? `border-color: #00AA11;` : ``}
`

export const Button = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})<{hasValueE: boolean; hasValueP: boolean}>  `
    border-radius: 5px;
    padding: 15px 30px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    width: 100%;

    background: ${(props) => props.hasValueE && props.hasValueP ? '#00AA11' : '#a7a7a7'};
    
`
export const TextButton = styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: #000;
`

export const SeePass = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})`
    width: 100%;
    margin: 5px 0 15px;
   
`

export const TextSeePass = styled.Text`
    font-size: 16px;
    color: #000;
`