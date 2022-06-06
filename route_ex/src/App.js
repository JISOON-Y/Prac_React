import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cat from './Cat';
import Dog from './Dog';

function App() {
  return (
    <div className="App">
      <div>
        {/* 페이지 이동을 위해 Link 사용 */}
        <Link to="/">Home으로 가기</Link>
        <Link to="/cat">Cat으로 가기</Link>
        <Link to="/dog">Dog로 가기</Link>
      </div>
      {/* react-router-dom v6에 따른 코드 수정 */}
      <Routes>
        {/* 자식 컴포넌트(Home)에 props 넘겨주기 */}
        <Route path="/" element={<Home data={"im data"} />} />
        {/* url 파라미터 사용 = 동적 라우팅 */}
        {/* <Route path="/cat:cat_name" element={<Cat />} /> */}
        <Route path="/cat" element={<Cat />} />
        <Route path="/dog" element={<Dog />} />
      </Routes>
    </div>
  );
}

export default App;
