import React from "react";
import styled from 'styled-components';
import { useSelector } from "react-redux";

const Progress = (props) => {
    const bucket_list = useSelector(state => state.bucket.list);

    // true인 값 갯수 구하기
    let count = 0;
    bucket_list.map((b, idx) => {
        if (b.completed == true) {
            return count++;
        }
    })

    // const bar = React.useRef(null);

    return (
        <BackgroundBar>
            <CompletedBar width={(count / bucket_list.length) * 100 + "%"}>
                <CirclePin width={(count / bucket_list.length) * 100 + "%"} />
            </CompletedBar>
        </BackgroundBar>
    );
}

const BackgroundBar = styled.div`
width: 94%;
height: 10px;
background-color: #ddd;
border-radius: 30px;
margin: 0 auto 20px auto;
`;

const CompletedBar = styled.div`
width: ${(props) => (props.width)};
transition: 1s;
height: 10px;
background-color: slateblue;
border-radius: 30px;
position: relative;
`;

const CirclePin = styled.div`
width: 12px;
height: 12px;
border-radius: 30px;
background-color: #fff;
border: 5px solid slateblue;
position: absolute;
top: 50%;
left: 100%;
transform: translate(-50%, -50%)
`;


export default Progress;