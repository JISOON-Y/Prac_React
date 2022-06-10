import React from 'react';
import styled from 'styled-components';
import Start from './Start';
import Quiz from './Quiz';
import Score from './Score';
import Message from './Message';
import Rank from './Rank';
import NotFound from './NotFound';
import { Route, Routes } from 'react-router-dom';

function App() {
  // 입력할 이름의 상태 관리
  const [name, setName] = React.useState("양지순")

  return (
    <AppStyle>
      <Routes>
        <Route path='/' element={<Start name={name} />} />
        <Route path='/q' element={<Quiz name={name} />} />
        <Route path='/score' element={<Score name={name} />} />
        <Route path='/message' element={<Message name={name} />} />
        <Route path='/rank' element={<Rank />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </AppStyle>
  )
}

const AppStyle = styled.div`
max-width: 350px;
margin: auto;
`;

export default App;
