import { useEffect, useState } from "react"
import { LabenuLogo } from "../../Components/LabenuLogo/LabenuLogo"
import { useNavigate } from "react-router-dom"

import { StyledContinueButton, StyledDiv, StyledErrorMessage, StyledForm, StyledInput, StyledLoginPage, StyledSignUpButton, StyledSubTitle, StyledTitle } from "./StyledLoginPage"
import { goToSignUpPage } from "../../Routes/coordinator"
import { useRequestData } from "../../Hooks/UseRequestData"
import { PATH } from "../../Assets/constants"

export const LoginPage = () => {

    const navigate = useNavigate()

    const [fade, setFade] = useState(false)

    useEffect(() => {
        setFade(true)
    }, [])
    //Fade-in quando trocar pra esta página

    //Controle de inputs abaixo
    const [email, setEmail] = useState(undefined)
    const [password, setPassword] = useState(undefined)

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    //Requisição de LogIn abaixo

    const [badRequest, setBadRequest] = useState(false) //Estado que define se aparecerá uma mensagem de erro ou não
    const [errorMessage, setErrorMessage] = useState("")//Mensagem de erro que irá aparecer
    const [isLoading, setIsLoading] = useState(false)//Estado que define a animação de carregando no botão

    const path = `${PATH}/users/login`
    const { logInData } = useRequestData(path)

    const [token, setToken] = useState(undefined)
    const [loadingTimes, setLoadingTimes] = useState(0)//Estado para fazer com que a mensagem de erro não seja mostrada caso não tenha token no local storage 
    

    useEffect( () => {
        setLoadingTimes(1)
        handleLogIn()
    }, []) 

    


    const handleLogIn = () => {
        if(loadingTimes > 0){
        setIsLoading(true)
        }
        console.log(isLoading)
        const body = ({ email, password, token })
       logInData(body, setIsLoading, setErrorMessage, setBadRequest, loadingTimes)
    }



    return (
        <StyledLoginPage fade={fade}>
            <LabenuLogo size="9vw" time="4000" />
            <StyledTitle>LabEddit</StyledTitle>
            <StyledSubTitle>O projeto de rede social da Labenu</StyledSubTitle>

            <StyledForm>
                <StyledInput onChange={handleEmail} type="text" id="email" name="email" placeholder="E-mail" />
                <StyledInput onChange={handlePassword} type="password" id="password" name="password" placeholder="Senha" />
            </StyledForm>
            {badRequest && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
            <StyledContinueButton onClick={handleLogIn} onTouchStart={handleLogIn} isLoading={isLoading}>{isLoading ? "Só um instante" : "Continuar"}</StyledContinueButton>
            <StyledDiv />
            <StyledSignUpButton onClick={() => goToSignUpPage(navigate)}>Crie uma conta!</StyledSignUpButton>
        </StyledLoginPage>

    )
}

