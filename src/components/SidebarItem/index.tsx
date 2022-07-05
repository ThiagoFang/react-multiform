import { useNavigate } from 'react-router-dom';
import { useForm } from '../../contexts/FormContext';
import * as C from './style';

import { ReactComponent as ProfileIcon } from '../../svgs/profile.svg';
import { ReactComponent as BookIcon } from '../../svgs/book.svg';
import { ReactComponent as MailIcon } from '../../svgs/mail.svg';
import { ReactComponent as UserIcon } from '../../svgs/userprofile.svg';

type Props = {
    title: string,
    description: string,
    icon: 'profile' | 'book' | 'mail' | 'user',
    path: '/' | '/steptwo' | '/stepthree' | '/userinfo',
    active: boolean
}

export const SidebarItem = ( {title, description, icon, path, active}:Props ) => {
    const navigate = useNavigate();
    const {state} = useForm();

    const handleSwitchStep = () => {
        if(state.name !== '') {
            navigate(path)
        };
    };

    return(
        <C.Container>
            <div className="itemArea" onClick={handleSwitchStep}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.IconArea active={active}>
                    {icon === 'profile' &&
                        <ProfileIcon fill='white' width={24} height={24} />
                    }

                    {icon === 'book' &&
                        <BookIcon fill='white' width={24} height={24} />
                    }

                    {icon === 'mail' &&
                        <MailIcon fill='white' width={24} height={24} />
                    }

                    {icon === 'user' &&
                        <UserIcon fill='white' width={24} height={24} />
                    }
                </C.IconArea>
                <C.Point active={active}>

                </C.Point>
            </div>
        </C.Container>
    );
}
