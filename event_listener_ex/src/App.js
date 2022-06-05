
import './App.css';
import React from "react";
import Text from "./Text";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.circle = React.createRef(null);
  }

  // 이벤트 함수 생성 (이벤트 생성)
  hoverEvent = (e) => {
    // e(객체)의 target(엘리먼트) = 이벤트 대상
    console.log(e.target);
    // ref로 가져온 리액트 요소
    console.log(this.circle.current);

    // 위의 두 대상이 일치하는지 콘솔로 확인 후, 속성 추가
    this.circle.current.style.background = "slateblue";
  }

  componentDidMount() {
    // 리액트 요소가 잘 잡혔는지 확인
    console.log(this.circle);

    // Dom 요소가 생성될 때, 이벤트 리스너 함수 연결 (이벤트 등록)
    // addEventListener ("어떤 동작이 발생하면", "실행시킬 함수")
    this.circle.current.addEventListener("mouseover", this.hoverEvent);
  }

  componentWillUnmount() {
    // 한번 등록되면 컴포넌트가 사라져도 계속 남아주기때문에 제거해주는 과정 필수 = clena up!
    this.circle.current.removeEventListener("mouseover", this.hoverEvent);
  }

  render() {
    return (
      <div style={{ width: "100vw", height: "100vh", textAlign: "center" }}>
        <Text />
        <div style={{ margin: "auto", width: "250px", height: "250px", background: "green", borderRadius: "250px" }} ref={this.circle}></div>
      </div>
    );
  }
}

export default App;