import { useNavigate, Link } from 'react-router-dom';
import { FormActions, useForm } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from 'react';
import * as C from './styles';

import { SelectOption } from '../../components/SelectOptions';
import { Theme } from '../../components/Theme';

export const FormStepTwo = () => {

    const { state, dispatch } = useForm();

    const navigate = useNavigate();
    
    useEffect(() => {
        if(state.name === '') {
            navigate('/');
            return
        };
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        });
    }, []);

    const handlePrevStep = () => navigate('/');
    const handleNextStep = () => navigate('/stepThree');

    const setLevel = (level: 0 | 1) => {
        dispatch({
            type:FormActions.setLevel,
            payload: level
        });
    };

    return(
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual profissionalmente!</p>

                <hr/>

                <SelectOption 
                    title="Sou iniciante"
                    description="Comecei a programar há menos de 2 anos"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption 
                    title="Sou programador"
                    description="Já programo a 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <C.PrevButton onClick={handlePrevStep}>VOLTAR</C.PrevButton>
                <C.NextStepButton 
                    isLocked={state.name.length > 0 ? false : true} 
                    onClick={handleNextStep} >
                    PRÓXIMO
                </C.NextStepButton>
            </C.Container>
        </Theme>
    );
}