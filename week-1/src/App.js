import logo from './logo.svg';
import './App.css';

// jsx 사용 규칙
function App() {
  let name = "soon";

  const style = {
    color: "pink",
    fontSize: "14px"
  }

  return (
    // 1. 태그는 꼭 닫아주기
    // 2. 무조건 1개의 엘리먼트 반환하기 (그럴 일은 없겠지만, 없을 경우 null값이라도 담아줘야 함)
    // 3. class 대신 className 사용하기 (id는 기존대로 사용)
    <div className="App">
      <input type="text" />
      {/* 4. style 속성을 넣을 땐 {}안에 딕셔너리{key:value}로 넣어주기 */}
      <p style={{ color: "orange", fontSize: "20px" }}>안녕하세요 {name}입니다.</p>
      <p style={style}>스타일 적용은 두가지 방법이 있지요</p>

      {/* 5. jsx에서 javascript 문법(map,삼항연산자)을 가져올 때는 {} 사용하기 */}
      {/* + return 안에서는 if문 대신 삼항 연산자로만 사용해야 함 */}
      <p>{name == "null" ? name : "soon"}</p>
    </div>
  );
}

export default App;

