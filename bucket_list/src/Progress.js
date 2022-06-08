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

    return (
        <BackgroundBar>
            <CompletedBar width={(count / bucket_list.length) * 100 + "%"} />
        </BackgroundBar>
    );
}

const BackgroundBar = styled.div`
width: 100%;
height: 20px;
background-color: #ddd;
border-radius: 30px;
`;

const CompletedBar = styled.div`
width: ${(props) => (props.width)};
transition: 1s;
height: 20px;
background-color: slateblue;
border-radius: 30px;
`;


export default Progress;