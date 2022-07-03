import * as C from './styles';
import { Theme } from '../../components/Theme'

import { Link } from 'react-router-dom';

export const FormStepOne = () => {
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
                    />
                </label>
            </C.Container>
        </Theme>
    );
}