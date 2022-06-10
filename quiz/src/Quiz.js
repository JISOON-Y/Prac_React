import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAnswer } from "./redux/modules/quiz";
import Progress from './Progress'

const Quiz = (props) => {

    const nav = useNavigate();

    // 리덕스에서 퀴즈 리스트 && 유저 정답 목록 정보 불러오기
    const user_anwserList = useSelector(state => state.quiz.user_answer_list);
    const quiz_list = useSelector(state => state.quiz.quiz_list);
    const dispatch = useDispatch();

    const setAnswer = (user_anwser) => {
        dispatch(addAnswer(user_anwser));
    }

    // 첫번째 인자 = 실행할 함수, 두번째 인자 = 변할 값
    useEffect(() => {
        if (user_anwserList.length === quiz_list.length) {
            nav('/score')
            return;
        }
    }, [user_anwserList]);

    if (user_anwserList.length === quiz_list.length) {
        return null;
    }

    return (
        <Container>
            <QuizTitle>{user_anwserList.length + 1}번 문제</QuizTitle>
            <Progress />
            <ImgStyle src={quiz_list[user_anwserList.length].image} />

            <DescStyle>
                {/* <PointStyle>{props.name}</PointStyle>은 인싸중에 아싸,
                <br />아싸중에 인싸인 <PointStyle>ISFJ</PointStyle>이다. */}
                {quiz_list[user_anwserList.length].question}
            </DescStyle>
            <ButtonContainer>
                <ButtonStyle onClick={() => {
                    setAnswer(true);
                }}>O</ButtonStyle>
                <ButtonStyle onClick={() => {
                    setAnswer(false);
                }}>X</ButtonStyle>
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
width: 48vw;
// margin: 16px;
`;

const DescStyle = styled.h1`
font-size: 1.5em;
line-height: 1.8;
text-align: center;
margin: 20px 0 0 0;
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

export default Quiz;