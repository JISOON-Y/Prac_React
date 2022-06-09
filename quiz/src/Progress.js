import React from "react";
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Progress = (props) => {

    const quiz_list = useSelector(state => state.quiz.quiz_list);
    const user_answerList = useSelector(state => state.quiz.user_answer_list);

    return (
        <TotalBarStyle>
            <CompletedBarStyle width={(user_answerList.length / quiz_list.length) * 100 + "%"} />
            <CirclePinStyle />
        </TotalBarStyle>
    )
}

const TotalBarStyle = styled.div`
width: 60%;
height:12px;
border-radius: 30px;
background-color: #eee;
margin-top: 24px;
display: flex;
align-items: center;
`;

const CompletedBarStyle = styled.div`
width: ${(props) => (props.width)};
height: 12px;
border-radius: 30px;
background-color: slateblue;
transition: 0.8s;
`;

const CirclePinStyle = styled.div`
width: 18px;
height: 18px;
border-radius: 30px;
background-color: #fff;
border: 5px solid slateblue;
margin-left: -20px;
`;

export default Progress;