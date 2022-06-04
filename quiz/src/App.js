import React from 'react';
import styled from 'styled-components';
import Start from './Start';

function App() {
  // 입력할 이름의 상태 관리
  const [name, setName] = React.useState("양지순")

  return (
    <div className='App' style={{
      // 컨텐츠의 최대 넓이 지정
      maxWidth: "350px",
      // 컨텐츠를 화면 가운데에 위치 지정
      margin: "auto"
    }}>
      <Start name={name} />
    </div>
  )

}


const Container = styled.div`
// background-color: #eee;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
`;

const TitleContainer = styled.div`
// background-color: #ddd;
margin: 200px auto 30px;
`;

const InputStyle = styled.input`
background-color: #eee;
width: 300px;
height: 48px;
margin: 20px auto;

border: 0;
border-radius: 100px;
padding-left: 24px;
font-size: 18px;
font-weight: bold;
`;

const ButtonStyle = styled.button`
background-color: slateblue;
width: 140px;
height: 48px;
margin: 14px auto;

border: 0;
border-radius: 100px;
color: white;
font-size: 18px;
font-weight: bold;
box-shadow: 0px 2px 8px darkgray;
`;


export default App;
