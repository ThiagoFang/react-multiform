import * as C from './styles';

import { Link } from 'react-router-dom';

export const FormStepOne = () => {
    return(
        <C.Container>
            step 1
            
            <Link to={'/steptwo'}>Next</Link>
        </C.Container>
    );
}