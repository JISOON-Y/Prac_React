import logo from './logo.svg';
import './App.css';

// jsx 사용 규칙
function App() {
  const boxStyle1 = {
    border: "1px solid orange",
    display: "flex",
    width: "800px"
  }
  const boxStyle2 = {
    border: "1px solid #000"

  }
  const boxStyle3 = {
    border: "1px solid #eee"
  };

  return (
    // 1. 태그는 꼭 닫아주기
    // 2. 무조건 1개의 엘리먼트 반환하기 (그럴 일은 없겠지만, 없을 경우 null값이라도 담아줘야 함)
    // 3. class 대신 className 사용하기 (id는 기존대로 사용)
    // 4. style 속성을 넣을 땐 {}안에 딕셔너리{key:value}로 넣어주기
    // 5. jsx에서 javascript 문법(map,삼항연산자)을 가져올 때는 {} 사용하기
    <div className="App">
      <h1>오늘 할 일</h1>
      <div style={boxStyle1}>
        <div style={boxStyle2}>
          <div style={boxStyle3}>
            <p>고양이 밥주기</p>
            <p>고양이 물, 사료 챙겨주기</p>
            <button>완료</button>
          </div>
          <div style={boxStyle3}>
            <p>장보기</p>
            <p>토마토, 계란, 초코렛 사기</p>
            <button>완료</button>
          </div>
        </div>
        <div style={boxStyle2}>
          <input type="text" />
          <button>추가하기</button>
        </div>
      </div>
    </div>
  );
}

export default App;

