import * as C from './styles'
import { Theme } from '../../components/Theme';
import { FormActions, useForm } from '../../contexts/FormContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import {ReactComponent as ProfileIcon} from '../../svgs/userprofile.svg'
import { SelectOption } from '../../components/SelectOptions';

export const UserInfo = () => {
    const {state, dispatch} = useForm();
    
    const navigate = useNavigate();

    useEffect(() => {
        if(state.name === '' || state.email === '' || state.github === '') {
            navigate('/');
        }
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 4
        })
    }, [])

    return(
        <Theme>
            <C.Container>
                <C.ProfilePic>
                    <ProfileIcon width={90} height={90} fill="white"/>
                </C.ProfilePic>
                <C.Title>Olá {state.name}, Aqui estão seu dados:</C.Title>

                {state.level === 0 &&
                    <SelectOption 
                        title="Sou iniciante"
                        description="Comecei a programar há menos de 2 anos"
                        icon="🥳"
                        selected={state.level === 0}
                    />
                }

                {state.level === 1 &&
                    <SelectOption 
                        title="Sou programador"
                        description="Já programo a 2 anos ou mais"
                        icon="😎"
                        selected={state.level === 1}
                    />
                }

                <C.SubTitle>Seu Email e Github são:</C.SubTitle>

                <C.ContactArea>
                    <C.AreaTitle>E-Mail:</C.AreaTitle>
                    <C.InfoArea>{state.email}</C.InfoArea>
                </C.ContactArea>

                <C.ContactArea>
                    <C.AreaTitle>GitHub:</C.AreaTitle>
                    <C.InfoArea>{state.github}</C.InfoArea>
                </C.ContactArea>

            </C.Container>
        </Theme>
    );
};