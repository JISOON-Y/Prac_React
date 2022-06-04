import React from "react";
import BucketList from "./BucketList";
// import "./style.css";
import styled from "styled-components";

class App extends React.Component {
  constructor(props) {
    super(props);

    // 배열의 초기값 설정
    this.state = {
      list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
    };

    // input창에 쓴 텍스트의 돔요소 꺼내오기
    this.text = React.createRef();
  }

  componentDidMount() {
  }

  addBucket = () => {
    console.log(this.text.current.value);

    const newBucket = this.text.current.value;
    // 기존 배열에 새로운 값을 추가 (스프레드 문법 활용)
    this.setState({ list: [...this.state.list, newBucket] })
  }

  render() {
    return (
      <AppWrap>
        <Container>
          <Title>내 버킷리스트</Title>
          <Line />
          <BucketList list={this.state.list} />
        </Container>

        <InputContainer>
          <input type="text" ref={this.text} />
          <button onClick={this.addBucket}>추가하기</button>
        </InputContainer>
      </AppWrap>
    );
  }
}

const AppWrap = styled.div`
background-color: #eee;
height: 100vh;
width: 100vw;
// 흰 박스 중앙 정렬
display: flex;
flex-direction: column;
`;

const Container = styled.div`
background-color: #fff;
width: 50vw;
max-width: 350px;
margin: auto;
height: 80vh;
padding: 16px;
border: 1px solid #ddd;
border-radius: 5px;
`;

const InputContainer = styled.div`
background-color: #fff;
width: 50vw;
max-width: 350px;
margin: auto;
padding: 16px;
border: 1px solid #ddd;
border-radius: 5px;
`;

const Title = styled.h1`
color: slateblue;
text-align: center;
`;

const Line = styled.hr`
margin: 16px 0px;
`;

export default App;