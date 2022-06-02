import logo from './logo.svg';
import './App.css';

// jsx 사용 규칙
function App() {
  const styles = {
    border: "1px solid #eee",
    padding: "30px",
    color: "green",
    width: "300px",
    margin: "30px auto",
  };

  return (
    // 1. 태그는 꼭 닫아주기
    // 2. 무조건 1개의 엘리먼트 반환하기 (그럴 일은 없겠지만, 없을 경우 null값이라도 담아줘야 함)
    // 3. class 대신 className 사용하기 (id는 기존대로 사용)
    // 4. style 속성을 넣을 땐 {}안에 딕셔너리{key:value}로 넣어주기
    // 5. jsx에서 javascript 문법(map,삼항연산자)을 가져올 때는 {} 사용하기
    <div className="App">
      <div style={styles}>
        <h1 style={{ color: "orange", fontSize: "28px" }}>안녕하세요!</h1>
        <hr />
        <p style={{ textAlign: "left" }}>이름을 입력해주세요.</p>
        <input type="text" />
      </div>
    </div>
  );
}

export default App;

