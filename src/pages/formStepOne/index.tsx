import { useNavigate } from 'react-router-dom';
import { FormActions, useForm } from '../../contexts/FormContext'
import { ChangeEvent, useEffect, useState } from 'react';
import * as C from './styles';

import { Theme } from '../../components/Theme';

export const FormStepOne = () => {
    const [nameError, setNameError] = useState<boolean>(false);

    const { state, dispatch } = useForm();

    const navigate = useNavigate();
    
    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
        setNameError(false);
    }, []);

    const handleNextStep = () => {
        if(state.name !== '') {
            setNameError(false);
            navigate('/steptwo');
            return
        };
        setNameError(true);
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    };

    return(
        <Theme>
            <C.Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com o seu nome</h1>
                <p>Preencha o campo abaixo com o seu nome completo.</p>

                <hr/>
                <label>
                    Seu nome Completo
                    <input 
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>
                {nameError &&
                    <C.ErrorMenssage>Por favor, preencha os dados!</C.ErrorMenssage>
                }

                <C.NextStepButton 
                    isLocked={state.name.length > 0 ? false : true} 
                    onClick={handleNextStep} >
                    PRÓXIMO
                </C.NextStepButton>
            </C.Container>
        </Theme>
    );
}