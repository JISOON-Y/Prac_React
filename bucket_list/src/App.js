// import './style.css';
import styled, { keyframes } from 'styled-components';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createBucket } from './redux/modules/bucket';
import img from './quiz2.png';

import BucketList from './BucketList';
import Detail from './Detail';
import NotFound from './NotFound';
import Progress from './Progress';

function App() {
  const [list, setList] = React.useState(["영화관 가기", "매일 책읽기", "수영 배우기"]);
  const text = React.useRef(null);

  // 리덕스에서 데이터 수정한 값 불러오기
  const dispatch = useDispatch();

  const addBucketList = () => {
    // setList([...list, text.current.value]);

    // dispatch()로 action일으키기
    // createBucket + () = 생성 함수 '바로' 실행
    dispatch(createBucket({ text: text.current.value, completed: false }));
  }

  return (
    <AppStyle>
      <Container>
        <ImgAlign>
          <ImgStyle src={img} />
        </ImgAlign>
        <Title><PointStyle>양지순</PointStyle>의 버킷 리스트</Title>
        <Progress />
        {/* <Line /> */}

        <Routes>
          {/* <컴포넌트 명 [props명]={넘겨줄 것(데이터)} */}
          <Route path='/' element={<BucketList list={list} />} />
          <Route path="/detail/:idx" element={<Detail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>

      </Container>

      <SubContainer>
        {/* <Input> */}
        <input type="text" placeholder='버킷 리스트 작성하기' ref={text} />
        <button onClick={addBucketList}>추가하기</button>
        {/* <button onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}>상단으로 이동</button> */}
        {/* </Input> */}

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

const ImgAnimation = keyframes`
0% {
  margin-top: 0px;
}
100% {
  margin-top: 10px;
}
`

const ImgAlign = styled.div`
  // 이미지 가운데 정렬 (이미지 = 인라인 요소!)
  text-align: center;
  height: 220px;
`;

const ImgStyle = styled.img`
width: 200px;
animation: ${ImgAnimation} 1s linear 0s infinite alternate;

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
  padding: 12px 20px 20px 20px;
  // overflow: auto;
`;

const Title = styled.h1`
  font-size: 24px;
  // color: slateblue;
  margin: 14px 0 30px 0;
  text-align: center;
`;

const PointStyle = styled.span`
background-color: slateblue;
color: #fff;
padding: 5px 10px;
border-radius: 30px;
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
  display: flex;

  & > * {
    padding: 12px;
    border: 0;
    border-radius: 50px;
  }

  & input {
    background-color: #eee;
    width: 18em;
    font-size: 14px;
    margin-right: 12px;
  }

  & input:focus {
    outline: none;
    border: 1px solid slateblue;
  }

  & button {
    background-color: slateblue;
    width: 6em;
    color: #fff;
    font-weight: bold;
    margin-left: auto;
  }
`;

export default App;
