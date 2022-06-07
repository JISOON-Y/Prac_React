import React from 'react';
import styled from 'styled-components';
import Start from './Start';
import Quiz1 from './Quiz1';
import Quiz2 from './Quiz2';
import Quiz3 from './Quiz3';
import Quiz4 from './Quiz4';
import Score from './Score';

function App() {
  // 입력할 이름의 상태 관리
  const [name, setName] = React.useState("양지순")

  return (
    <AppStyle>
      <Start name={name} />
      <Quiz1 name={name} />
      <Quiz2 name={name} />
      <Quiz3 name={name} />
      <Quiz4 name={name} />
      <Score name={name} />
    </AppStyle>
  )
}

const AppStyle = styled.div`
max-width: 350px;
margin: auto;
`;

export default App;
