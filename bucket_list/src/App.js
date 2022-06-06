// import './style.css';
import styled from 'styled-components';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import BucketList from './BucketList';
import Detail from './Detail';
import NotFound from './NotFound';

function App() {
  const [list, setList] = React.useState(["영화관 가기", "매일 책읽기", "수영 배우기"]);
  const text = React.useRef(null);

  const addBucketList = () => {
    setList([...list, text.current.value]);
  }

  return (
    <AppStyle>
      <Container>
        <Title>내 버킷 리스트</Title>
        <Line />

        <Routes>
          {/* <컴포넌트 명 [props명]={넘겨줄 것(데이터)} */}
          <Route path='/' element={<BucketList list={list} />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>

      </Container>

      <SubContainer>
        <input type="text" ref={text} />
        <button onClick={addBucketList}>추가하기</button>
      </SubContainer>
    </AppStyle>
  );
}

// 스타일 객체 만들기
const AppStyle = styled.div`
  background-color: #eee;
  height: 100vh;
  width: 100vw;
  // 흰 박스 중앙 정렬
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  background-color: white;
  width: 50vw;
  max-width: 350px;
  height: 70vh;
  /* 흰박스 가운데 정렬 */
  margin: 50px auto 10px;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 20px 0;
`;

const SubContainer = styled.div`
  background-color: white;
  width: 50vw;
  max-width: 350px;
  height: 5vh;
  margin: 10px auto;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
`;


export default App;
