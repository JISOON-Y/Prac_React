import React from "react";
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { removeBucket, updateBucket } from "./redux/modules/bucket";

const Detail = (props) => {

    // url 경로의 params값 불러오기
    const params = useParams();

    // params로 받아온 list의 index 값
    const bucket_idx = params.idx;

    // 리덕스에서 bucket_list의 데이터 가져오기
    const bucket_list = useSelector((state) => state.bucket.list);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div>
            <BackgroundStyle>
                {/* 리덕스에서 불러온 값 넣어주기 */}
                <FontStyle>{bucket_list[bucket_idx].text}</FontStyle>
            </BackgroundStyle>

            <ButtonContainer>
                <ButtonStyle button={true} onClick={() => {
                    dispatch(updateBucket(bucket_idx));
                    navigate("/");
                }}>완료하기</ButtonStyle>

                <ButtonStyle button={false} onClick={() => {
                    dispatch(removeBucket(bucket_idx));
                    navigate("/");
                }}>삭제하기</ButtonStyle>
            </ButtonContainer>

        </div>
    );
}

const BackgroundStyle = styled.div`
background-color: #eee;
padding: 20px;
border-radius: 20px;
`;

const FontStyle = styled.h2`
color: slateblue;
    font-weight: bold;
    margin: 20px, 0;
    text-align: center;
`;

const ButtonContainer = styled.div`
display: flex;
`;
const ButtonStyle = styled.button`
background-color: ${(props) => (props.button ? "slateblue" : "#eee")};
width: 8em;
color: ${(props) => (props.button ? "#fff" : "#000")};
font-weight: ${(props) => (props.button ? "bold" : "regular")};
border: none;
padding: 12px;
border-radius: 50px;
margin: ${(props) => (props.button ? "30px 8px 0 auto;" : "30px auto 0 8px;")}
`;

export default Detail;