import React from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Detail = (props) => {

    return (
        <FontStyle>상세 페이지입니다.</FontStyle>
    );
}

const FontStyle = styled.h2`
    font-weight: bold;
    margin: 20px, 0;
`;

export default Detail;