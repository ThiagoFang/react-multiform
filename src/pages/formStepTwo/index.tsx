import { useNavigate } from 'react-router-dom';
import { FormActions, useForm } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from 'react';
import * as C from './styles';

import { Theme } from '../../components/Theme';

export const FormStepTwo = () => {

    const { state, dispatch } = useForm();

    const navigate = useNavigate();
    
    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, []);

    const handleNextStep = () => {
        if(state.name !== '') {
            navigate('/steptwo');
            return
        };
    };

    return(
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>Vamos começar com o seu nome</h1>
                <p>Preencha o campo abaixo com o seu nome completo.</p>

                <hr/>

                <C.NextStepButton 
                    isLocked={state.name.length > 0 ? false : true} 
                    onClick={handleNextStep} >
                    PRÓXIMO
                </C.NextStepButton>
            </C.Container>
        </Theme>
    );
}