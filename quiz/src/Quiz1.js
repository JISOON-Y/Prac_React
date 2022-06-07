import React from "react";
import styled from "styled-components";
import img from './quiz1.png';
import { useNavigate } from "react-router-dom";

const Quiz1 = (props) => {
    console.log(props);

    const nav = useNavigate();
    const goQuiz2 = () => { nav('/q2') }

    return (
        <Container>
            <QuizTitle>첫 번째 문제</QuizTitle>
            <ImgStyle src={img} />

            <DescStyle>
                <PointStyle>{props.name}</PointStyle>은 인싸중에 아싸,
                <br />아싸중에 인싸인 <PointStyle>ISFJ</PointStyle>이다.
            </DescStyle>
            <ButtonContainer>
                <ButtonStyle onClick={goQuiz2}>O</ButtonStyle>
                <ButtonStyle onClick={goQuiz2}>X</ButtonStyle>
            </ButtonContainer>
        </Container >
    )
}

const QuizTitle = styled.div`
font-size: 16px;
font-weight: bold;
background-color: #eee;
padding: 8px 16px;
border-radius: 30px;
`;

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

const ButtonContainer = styled.div`
display: flex;
`;

const ButtonStyle = styled.h3`
color: slateblue;
font-size: 120px;
opacity: 0.3;
margin: 0px 30px;
`;

export default Quiz1;