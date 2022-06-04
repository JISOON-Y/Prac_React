// 리액트 패키지를 불러옵니다.
import React from 'react';
import styled from 'styled-components';

// 함수형 컴포넌트는 이렇게 쓸 수도 있고
// function Bucketlist(props){
// return (
// <div>버킷 리스트</div>
// );
// }

// 이렇게 쓸 수도 있어요. =>가 들어간 함수를 화살표 함수라고 불러요.
// 저희는 앞으로 화살표 함수를 사용할거예요.
// 앗 () 안에 props! 부모 컴포넌트에게 받아온 데이터입니다.
// js 함수가 값을 받아오는 것과 똑같이 받아오네요.

// {list}로 데이터 불러올 수 있음
const BucketList = (props) => {

    // Quiz 1: my_list에 ['a', 'b', 'c'] 대신 부모 컴포넌트가 넘겨준 값을 넣으려면 어떻게 해야할까요?
    // const my_lists = ['a', 'b', 'c'];

    // {list}로 불러올 경우,
    // const my_lists = list;
    const my_lists = props.list;

    // Ref 사용(함수형-hook)
    // React.useRef(초기값)
    const my_wrap = React.useRef(1);

    // 윈도우 내장함수 / 두 번째 인자만큼의 시간이 지나면, 첫 번째 인자로 들어온 함수를 실행
    window.setTimeout(() => {
        console.log(my_wrap)
    }, 1000);


    console.log(my_wrap)

    // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
    return (
        <div ref={my_wrap}>
            {
                // js의 내장 함수 중 하나인 map입니다. 리스트의 갯수만큼 => 오른쪽 구문을 반복해요. 
                // 자세한 사용법은 아래 링크를 확인해주세요.
                // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
                my_lists.map((list, index) => {
                    // 콘솔을 확인해봅시다 :)
                    console.log(list);
                    return <ItemStyle key={index}>
                        {list}
                    </ItemStyle>;
                })
            }
        </div>
    );
}

const ItemStyle = styled.div`
    padding: 16px;
    background-color: aliceblue;
    margin: 14px 0;
    border-radius: 5px;
`;

// 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
export default BucketList;