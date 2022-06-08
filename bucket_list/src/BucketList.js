// 리액트 패키지를 불러옵니다.
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// {list}로 데이터 불러올 수 있음
const BucketList = (props) => {
    // console.log(props);

    // {list}로 state불러올 경우,
    // const my_lists = list;

    // props로 state불러올 경우,
    // const my_lists = props.list;

    // 리덕스에서 데이터 가져오기
    // useSelector((리덕스에 저장되어있는 전체 데이터) => 리턴값)
    const my_lists = useSelector((state) => state.bucket.list);
    console.log(my_lists);

    const navigate = useNavigate();


    // Ref 사용(함수형-hook)
    // React.useRef(초기값)
    // const my_wrap = React.useRef(1);


    // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
    return (
        <ListStyle>
            {my_lists.map((list, idx) => {
                return (
                    <ItemStyle completed={list.completed} className="list_item" key={idx} onClick={() => {
                        navigate("/detail/" + idx);
                    }}>
                        {list.text}
                    </ItemStyle>
                );
            })}
        </ListStyle>
    );
}

const ListStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 200px;
    overflow: auto;
`;

const ItemStyle = styled.div`
    padding: 14px;
    background-color: ${(props) => (props.completed ? "slateblue" : "aliceblue")};
    color: ${(props) => (props.completed ? "white" : "black")};
    margin: 6px 0;
    font-size : 14px;
    border-radius: 30px;
`;

// 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
export default BucketList;