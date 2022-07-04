import { useNavigate } from 'react-router-dom';
import { FormActions, useForm } from '../../contexts/FormContext'
import { ChangeEvent, useEffect, useState } from 'react';
import * as C from './styles';

import { Theme } from '../../components/Theme';

export const FormStepThree = () => {
    const [emailError, setEmailError] = useState<boolean>(false);
    const [githubError, setGithubError] = useState<boolean>(false);

    const { state, dispatch } = useForm();
    const navigate = useNavigate();
    
    useEffect(() => {
        if(state.name === '' ) {
            navigate('/');
        }
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        });
        setEmailError(false);
        setGithubError(false);
    }, []);

    const handlePrevStep = () => navigate('/steptwo');
    const handleNextStep = () => {
        if(state.email === '') {
            setEmailError(true);
            return
        };
        if(state.github === '') {
            setEmailError(false);
            setGithubError(true);
            return
        };
        setEmailError(false);
        setGithubError(false);
        console.log(state);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    };

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    };

    return(
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha seus dados para conseguirmos entrar em contato!</p>
                <hr/>

                <label>
                    Qual seu e-mail?
                    <input 
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                    {emailError &&
                        <C.ErrorMenssage>Por favor, preencha os dados!</C.ErrorMenssage>
                    }
                </label>

                <label>
                    Qual o seu Github?
                    <input 
                        type="url"
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                    {githubError &&
                        <C.ErrorMenssage>Por favor, preencha os dados!</C.ErrorMenssage>
                    }
                </label>

                <C.PrevButton onClick={handlePrevStep}>VOLTAR</C.PrevButton>
                <C.NextStepButton 
                    isLocked={state.name.length > 0 ? false : true} 
                    onClick={handleNextStep}>
                    FINALIZAR CADASTRO
                </C.NextStepButton>
            </C.Container>
        </Theme>
    );
}