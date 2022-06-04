import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 3,
    };
  }

  componentDidMount() { }

  // 버튼 클릭 시, 동작하는 함수
  addNemo = () => {
    this.setState({ count: this.state.count + 1 });
  }

  removeNemo = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    } else {
      window.alert("네모가 없어요!");
    }
  }


  render() {
    // 배열 만들기
    const nemoList = Array.from({ length: this.state.count }, (nemo, idx) => { return idx });
    console.log(nemoList);
    console.log(this.state)

    return (
      <div className='App'>
        {nemoList.map((nemo, idx) => {
          return (
            <div key={idx}
              style={{
                width: "150px",
                height: "150px",
                backgroundColor: "#ddd",
                margin: "10px"
              }}>
              nemo
            </div>
          )
        })}

        <div>
          <button onClick={() => {
            this.addNemo();
          }}>하나 추가</button>
          <button onClick={this.removeNemo}>하나 빼기</button>
        </div>
      </div>
    )
  }
}



export default App;
