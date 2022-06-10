import React from "react";
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Rank = (props) => {

    const nav = useNavigate();
    const goMain = () => { nav('/') };

    const user_data = useSelector(state => state.rank.user_ranking);

    // 높은 점수 순으로 sorting
    const rank_user_data = user_data.sort((a, b) => {
        return b.score - a.score;
    });

    const dispatch = useDispatch();

    return (
        <Container>
            <TitleStyle><PointStyle>{user_data.length}명</PointStyle>의 사람들 중 당신은?</TitleStyle>
            {user_data.map((u, idx) => {
                return (
                    <ContentBox>
                        <RankStyle>{idx + 1}등</RankStyle>
                        <Line />
                        <InfoBox>
                            <NameStyle>{u.user_name}</NameStyle>
                            <MessageStyle>{u.message}</MessageStyle>
                        </InfoBox>
                    </ContentBox>
                )
            })}
            <ButtonStyle2 onClick={goMain}>
                메인으로 가기
            </ButtonStyle2>
        </Container>
    )
}

const Container = styled.div`
background-color: #eee;
display: flex;
height: 100vh;
flex-direction: column;
// align-items: center;
// justify-content: center;
// padding: 0 14px 14px 14px;
box-sizing: border-box;
`;

const TitleStyle = styled.p`
text-align: center;
background-color: #fff;
margin: 0;
padding: 20px 0;
`;

const PointStyle = styled.span`
background-color: slateblue;
color: #fff;
font-weight: bold;
padding: 8px;
border-radius: 30px;
`;

const ContentBox = styled.div`
background-color: #fff; 
margin: 20px 14px 0 14px;
padding: 10px;
display: flex;
border-radius: 14px;
`;

const RankStyle = styled.h1`
font-size: 36px;
padding: 0 24px;
`;

const Line = styled.hr`
margin: 6px;
`;

const InfoBox = styled.div`
padding: 0 20px;
`;

const NameStyle = styled.p`
font-size: 16px;
font-weight: bold;
margin: 10px 0 0 0;
`;

const MessageStyle = styled.p`
font-size: 14px;
margin: 8px 0 0 0;
`;

const ButtonStyle2 = styled.button`
background-color: darkgray;
margin: 30px auto 0 auto;
display: block;
width: 200px;
padding: 18px 40px;
color: #fff;
border: 0;
border-radius: 100px;
font-weight: bold;
font-size: 18px;
box-shadow: 0px 2px 8px darkgray;
`;

export default Rank;