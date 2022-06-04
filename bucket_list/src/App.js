import logo from './logo.svg';
// import './App.css';
import './style.css';
import styled from 'styled-components';
import React from 'react';
import BucketList from './BucketList';
// import { BucketList } from './BucketList';

// 클래스형 컴포넌트 
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
    }

    this.text = React.createRef();
  }

  componentDidMount() {
    console.log(this.text)
  }

  render() {
    console.log(this.text.current)
    // console.log(this.state.list);
    return (
      <div className="App">
        {/* style도 컴포넌트이기때문에 props 줄 수 있음 */}
        <Container>
          <Title>내 버킷 리스트</Title>
          <Line />
          {/* 컴포넌트 넣어주기 */}
          {/* <컴포넌트 명 [props명]={넘겨줄 것(데이터)} */}
          <BucketList list={this.state.list} />
        </Container>

        <div>
          {/* onChange(): 입력 값이 변했을 때, 호출되는 함수 */}
          <input type="text" ref={this.text}
            onChange={() => {
              console.log(this.text.current.value)
            }} />
        </div>
      </div>
    )
  }

}

// function App() {
//   return (
//     <div className="App">
//       {/* 자식 컴포넌트 불러오기 */}
//       <BucketList />
//     </div>
//   );
// }

// 스타일 객체 만들기
const Container = styled.div`
  background-color: white;
  width: 50vw;
  max-width: 350px;
  height: 70vh;
  /* 흰박스 가운데 정렬 */
  margin: auto;
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


export default App;
