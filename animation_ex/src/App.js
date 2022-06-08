import styled, { keyframes } from 'styled-components';

function App() {
  return (
    <div className="App">
      <Box />
    </div>
  );
}

const boxAnimation = keyframes`
0% {
  border-radius : 0px;
  opacity: 0.2;
  top: 20px;
  left: 20px;
}

50% {
  border-radius: 50px;
  opacity: 1;
  top: 400px;
  left: 400px;
}

100% {
  border-radius: 0px;
  opacity: 0.2;
  top: 20px;
  left: 20px;
}
`;

const Box = styled.div`
width: 100px;
height: 100px;
background-color: slateblue;
border-radius: 50px;
position: absolute;
top: 20px;
left: 20px;
animation: ${boxAnimation} 2s 1s infinite linear alternate;
`;

export default App;
