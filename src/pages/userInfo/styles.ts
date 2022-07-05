import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const ProfilePic = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #494A7C;
    border: 3px solid #25CD89;
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;

export const Title = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin: 20px 0;
`;

export const SubTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0;
`;

export const ContactArea = styled.div`
    width: 100%;
`;

export const AreaTitle = styled.div`
    font-weight: bold;
    padding: 0 25px;
    font-size: 18px;
    margin-top: 20px;
`;

export const InfoArea = styled.div`
    font-weight: 500;
    display: flex;
    align-items: center;
    padding: 0 30px;
    border: 2px solid #25CD89;
    height: 40px;
    margin:  10px 0;
    border-radius: 15px;
`;