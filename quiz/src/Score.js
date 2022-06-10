import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createScore } from './redux/modules/user';

const Score = (props) => {

    const nav = useNavigate();
    const goMain = () => { nav('/') };
    const goMessage = () => { nav('/message') };

    const quiz_list = useSelector(state => state.quiz.quiz_list);
    const user_anwserList = useSelector(state => state.quiz.user_answer_list);
    const dispatch = useDispatch();

    // 점수 계산
    const totalScore = (100 / quiz_list.length) * quiz_list.filter((q, idx) => {
        return q.anwser === user_anwserList[idx];
    }).length;

    // 반올림
    // const finalScore = Math.round(totalScore);

    return (
        <Container>

            <DescStyle>
                <PointStyle>{props.name}</PointStyle>퀴즈에 대한
                <br />내 점수는?
                <ScoreStyle><PointStyle>{totalScore}</PointStyle>점!</ScoreStyle>
                <SubText>이 정도면 아주 친한 친구 사이!<br />앞으로도 더 친하게 지내요:)</SubText>
            </DescStyle>

            <ButtonStyle onClick={() => {
                dispatch(createScore(totalScore));
                { goMessage() }
            }}>
                한마디 하고 랭킹보기
            </ButtonStyle>
            <ButtonStyle2 onClick={goMain}>
                메인으로 가기
            </ButtonStyle2>
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

const ScoreStyle = styled.p`
font-size: 1.8em;
margin: 32px 0 0 0;
`;

const SubText = styled.p`
font-size: 0.7em;
line-height: 1.4;
margin: 10px 0 28px 0;
`;

const ButtonStyle = styled.button`
background-color: slateblue;
// margin: 30px;
padding: 18px 56px;
border: 0;
border-radius: 100px;
color: #fff;
font-weight: bold;
font-size: 18px;
box-shadow: 0px 2px 8px darkgray;
`;

const ButtonStyle2 = styled.button`
background-color: darkgray;
margin-top: 18px;
padding: 18px 80px;
color: #fff;
border: 0;
border-radius: 100px;
font-weight: bold;
font-size: 18px;
box-shadow: 0px 2px 8px darkgray;
`;

export default Score;