import React from 'react';
import styled from 'styled-components';
import Start from './Start';

function App() {
  // 입력할 이름의 상태 관리
  const [name, setName] = React.useState("양지순")

  return (
    <AppStyle>
      <Start name={name} />
    </AppStyle>
  )
}

const AppStyle = styled.div`
max-width: 350px;
margin: auto;
`;

export default App;
