import { useState } from 'react'

import { Button, Container, Input, SeePass, TextButton, TextSeePass} from "./styles"
import { TouchableOpacity } from 'react-native'

export default function Login(){
    
    //estados do input de email
    const [email, setEmail] = useState('')
    const [emailFocused, setEmailFocused] = useState(false)
    function handleEmailChange(value: string){
        setEmail(value)
    }

    //estados do input de senha
    const [password, setPassword] = useState('')
    const [passwordFocused, setPasswordFocused] = useState(false)

    function handlePasswordChange(value: string){
        setPassword(value)
    }

    //estado para ocultar a senha
    const [eye, setEye] = useState(true)
    function handleEye(){
        setEye(!eye)
    }
    
    return (
        <Container >
            <Input
                value={email}
                onChangeText={handleEmailChange}
                hasValue={email !== ''}
                isFocused={emailFocused}
                onFocus={() => setEmailFocused(true)}
                onBlur={()=> setEmailFocused(false)}
                placeholder= 'Digite seu e-mail:'
            />
        
            <Input
                value={password}
                onChangeText={handlePasswordChange}
                hasValue={password !== ''}
                isFocused={passwordFocused}
                secureTextEntry={eye}
                onFocus={()=> setPasswordFocused(true)}
                onBlur={()=> setPasswordFocused(false)}
                placeholder='Digite sua senha: '
            />
            
            <SeePass
                onPress={() => handleEye()}
            >
                <TextSeePass>
                    {
                        eye ? 'Ver senha' : 'Ocultar senha'
                    }
                </TextSeePass>
            </SeePass>

            <Button
                hasValueE={email !== ''}
                hasValueP={password !== ''}
            >
                <TextButton>
                    Entrar
                </TextButton>
           </Button>

           
        </Container>
    )
}

