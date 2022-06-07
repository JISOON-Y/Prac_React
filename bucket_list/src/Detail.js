import React from "react";
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

const Detail = (props) => {

    // url 경로의 params값 불러오기
    const params = useParams();
    console.log(params);

    // params로 받아온 list의 index 값
    const bucket_idx = params.idx;

    // 리덕스에서 bucket_list의 데이터 가져오기
    const bucket_list = useSelector((state) => state.bucket.list);
    console.log(bucket_list);
    console.log(bucket_list[bucket_idx]);

    return (
        // 리덕스에서 불러온 값 넣어주기
        <FontStyle>{bucket_list[bucket_idx]}</FontStyle>
    );
}

const FontStyle = styled.h2`
    font-weight: bold;
    margin: 20px, 0;
`;

export default Detail;