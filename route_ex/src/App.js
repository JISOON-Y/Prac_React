import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cat from './Cat';
import Dog from './Dog';

function App() {
  return (
    <div className="App">
      {/* react-router-dom v6에 따른 코드 수정 */}
      <Routes>
        {/* 자식 컴포넌트(Home)에 props 넘겨주기 */}
        <Route path="/" element={<Home data={"im data"} />} />
        <Route path="/cat" element={<Cat />} />
        <Route path="/dog" element={<Dog />} />
      </Routes>
    </div>
  );
}

export default App;
