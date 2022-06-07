import React from "react";
import styled from "styled-components";
import img from './quiz3.png';

const Quiz3 = (props) => {
    console.log(props);

    return (
        <Container>
            <QuizTitle>세 번째 문제</QuizTitle>
            <ImgStyle src={img} />

            <DescStyle>
                <PointStyle>{props.name}</PointStyle>이 가장 좋아하는 운동은
                <br /><PointStyle>배드민턴</PointStyle>이다.
            </DescStyle>
            <ButtonContainer>
                <ButtonStyle>O</ButtonStyle>
                <ButtonStyle>X</ButtonStyle>
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

export default Quiz3;