import styled from "styled-components";

export const Container = styled.div`
    p {
        font-size: 13px;
        color: #B8B8D4;
    }
    h1 {
        margin: 0;
        padding: 0;
        font-size: 26px;
    }
    hr {
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin: 30px 0;
    }

    label {
        font-size: 13px;
        display: block;
        margin-bottom: 20px;
        
        input {
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #25Cd89;
            border-radius: 10px;
            color: #FFF;
            outline: 0;
            font-size: 15px;
            background-color: #02044A;
        }
    }
`;

export const PrevButton = styled.button`
    background: none;
    color: #B8B8D4;
    font-size: 14px;
    font-weight: bold;
    padding: 15px 50px;
    border: 0;
    cursor: pointer;
    margin-top: 30px;
    margin-right: 15px;
`;

export const NextStepButton = styled.button<{isLocked?: boolean}>`
    background-color: #25Cd89;
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
    padding: 15px 50px;
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 30px;
    opacity: ${props => props.isLocked ?  0.5 : 1};
    transition: .2s;

    &:hover {
        background-color: ${props => props.isLocked ? '#25Cd89' : '#1b9665'};
    }
`;

export const ErrorMenssage = styled.div`
    margin-top: 5px;
`;