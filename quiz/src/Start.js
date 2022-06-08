import React from 'react';
import img from './dev_soon.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createName } from './redux/modules/user';


const Start = (props) => {

    const name_ref = React.useRef(null);
    const dispatch = useDispatch();

    const nav = useNavigate();
    const goQuiz1 = () => { nav('/q') };

    return (
        <Container>
            <ImgStyle src={img} />

            <DescStyle>
                나는 <PointStyle>{props.name}</PointStyle>에 대해
                <br />얼마나 알고 있을까?
            </DescStyle>

            <InputStyle type="text" placeholder='내 이름' ref={name_ref} />

            <ButtonStyle onClick={() => {
                dispatch(createName(name_ref.current.value));
                goQuiz1();
            }}>
                시작하기
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
margin: 30px;
padding: 18px 48px;
border: 0;
border-radius: 100px;
color: #fff;
font-weight: bold;
font-size: 18px;
box-shadow: 0px 2px 8px darkgray;
`;

export default Start;