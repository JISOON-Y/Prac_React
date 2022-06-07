import React from 'react';
import img from './notfound.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const NotFound = () => {
    // console.log(props)
    const nav = useNavigate();
    const goMain = () => { nav('/') };

    return (
        <Container>
            <ImgStyle src={img} />

            <DescStyle>
                잘못된 경로 접근입니다! <br />주소를 한번 더 확인해주세요 :)
            </DescStyle>

            <ButtonStyle onClick={goMain}>
                메인으로 가기
            </ButtonStyle>
        </Container >
    )
}

const Container = styled.div`
display: flex;
height: 100vh; 
flex-direction: column;
align-items: center;
justify-content: center;
padding: 14px;
box-sizing: border-box;
`;

const ImgStyle = styled.img`
width: 54vw;
margin: 16px;
`;

const DescStyle = styled.h1`
font-size: 1.5em;
line-height: 1.8;
text-align: center;
// margin: 18px;
`;

const ButtonStyle = styled.button`
background-color: slateblue;
margin: 14px;
padding: 18px 48px;
border: 0;
border-radius: 100px;
color: #fff;
font-weight: bold;
font-size: 18px;
box-shadow: 0px 2px 8px darkgray;
`;

export default NotFound;