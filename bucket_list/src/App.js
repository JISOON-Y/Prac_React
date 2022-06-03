import logo from './logo.svg';
// import './App.css';
import './style.css';
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
  }

  render() {
    // console.log(this.state.list);
    return (
      <div className="App">
        <div className='container'>
          <h1>내 버킷 리스트</h1>
          <hr className='line' />
          {/* 컴포넌트 넣어주기 */}
          {/* <컴포넌트 명 [props명]={넘겨줄 것(데이터)} */}
          <BucketList list={this.state.list} />
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

export default App;
