// 리액트 패키지를 불러옵니다.
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// {list}로 데이터 불러올 수 있음
const BucketList = (props) => {
    console.log(props);
    // {list}로 불러올 경우,
    // const my_lists = list;
    const my_lists = props.list;
    const navigate = useNavigate();

    // Ref 사용(함수형-hook)
    // React.useRef(초기값)
    // const my_wrap = React.useRef(1);

    // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
    return (
        <ListStyle>
            {my_lists.map((list, idx) => {
                return (
                    <ItemStyle className="list_item" key={idx} onClick={() => {
                        navigate("/detail");
                    }}>
                        {list}
                    </ItemStyle>
                );
            })}
        </ListStyle>
    );
}

const ListStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const ItemStyle = styled.div`
    padding: 16px;
    background-color: aliceblue;
    margin: 8px 0;
    border-radius: 5px;
`;

// 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
export default BucketList;