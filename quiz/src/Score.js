import React from 'react';
import img from './dev_soon.png';
import styled from 'styled-components';


const Score = (props) => {
    console.log(props)

    return (
        <Container>
            {/* <ImgStyle src={img} /> */}

            <DescStyle>
                <PointStyle>{props.name}</PointStyle>퀴즈에 대한
                <br />내 점수는?
                <ScoreStyle><PointStyle>100</PointStyle>점!</ScoreStyle>
                <SubText>이 정도면 아주 친한 친구 사이!<br />앞으로도 더 친하게 지내요:)</SubText>
            </DescStyle>

            <ButtonStyle>
                다시하기
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

const PointStyle = styled.span`
background-color: #ffe17c;
padding: 5px 10px;
border-radius: 30px;
`;

const ScoreStyle = styled.h1`
font-size: 1.8em;
margin: 32px 0 0 0;
`;

const SubText = styled.p`
font-size: 0.7em;
line-height: 1.4;
margin: 10px 0 28px 0;
`;

const InputStyle = styled.input`
background-color: #eee;
width: 100%;
border-radius: 100px;
border: 0;
font-size: 18px;
font-weight: bold;
padding: 16px;
`;

const ButtonStyle = styled.button`
background-color: slateblue;
// margin: 30px;
padding: 18px 48px;
border: 0;
border-radius: 100px;
color: #fff;
font-weight: bold;
font-size: 18px;
box-shadow: 0px 2px 8px darkgray;
`;

export default Score;